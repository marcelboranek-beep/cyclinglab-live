const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const compile = (file) =>
  ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
const services = { exports: {} };
vm.runInNewContext(compile("lib/services.ts"), {
  exports: services.exports,
  module: services,
});
function route(send, configured = true) {
  const mod = { exports: {} };
  const calls = [];
  vm.runInNewContext(compile("app/api/contact/route.ts"), {
    exports: mod.exports,
    module: mod,
    Response,
    process: { env: { RESEND_API_KEY: configured ? "test-only" : "" } },
    require: (name) =>
      name === "@/lib/services"
        ? services.exports
        : {
            Resend: class {
              constructor() {
                this.emails = {
                  send: async (...args) => {
                    calls.push(args);
                    return send(...args);
                  },
                };
              }
            },
          },
  });
  return { post: mod.exports.POST, calls };
}
const body = () => ({
  name: "Test <script>",
  email: "test@example.com",
  phone: "+420 777 123 456",
  bikeType: "Gravel",
  serviceType: services.exports.serviceOptions[0].value,
  deliveryMethod: "Přivezu osobně",
  message: "<b>Poznámka</b>",
  requestId: "00000000-0000-4000-8000-000000000001",
});
const request = (value) =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
test("Provider rejection never reports a successful request", async () => {
  const { post } = route(() => ({
    data: null,
    error: { message: "Rejected" },
  }));
  const response = await post(request(body()));
  assert.equal(response.status, 502);
  assert.ok((await response.json()).error);
});
test("Provider exceptions and missing configuration return a failure", async () => {
  const throwing = route(() => {
    throw Error("Network");
  });
  assert.equal((await throwing.post(request(body()))).status, 503);
  const missing = route(() => assert.fail("Must not contact provider"), false);
  assert.equal((await missing.post(request(body()))).status, 503);
  assert.equal(missing.calls.length, 0);
});
test("Invalid contact data, tampered service and honeypot never send email", async () => {
  const { post, calls } = route(() => assert.fail("Must not contact provider"));
  for (const change of [
    { email: "bad" },
    { serviceType: "Cena 1 Kč" },
    { website: "spam" },
    { requestId: "invalid" },
    { phone: "abc" },
  ])
    assert.equal((await post(request({ ...body(), ...change }))).status, 400);
  assert.equal(calls.length, 0);
});
test("Accepted request uses plain text, reply-to and a stable idempotency key", async () => {
  const { post, calls } = route(() => ({
    data: { id: "provider-id" },
    error: null,
  }));
  const response = await post(request(body()));
  assert.equal(response.status, 201);
  assert.equal((await response.json()).status, "sent");
  assert.equal(calls[0][0].replyTo, body().email);
  assert.equal(calls[0][0].html, undefined);
  assert.match(calls[0][0].text, /<b>Poznámka<\/b>/);
  assert.equal(calls[0][1].idempotencyKey, "service-" + body().requestId);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
});

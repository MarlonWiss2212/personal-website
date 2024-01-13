import { POST } from "./route"
import { createMocks } from "node-mocks-http"
import { expect } from "vitest";
import { loadEnvConfig } from '@next/env'

describe("Login Route", () => {
  beforeEach( () => {
    loadEnvConfig(process.cwd())
  });

  it("should return 401 if wrong password is provided", async () => {
    const { req } = createMocks({ body: { password: "fwpijmohir239o" }, method: "POST" })
    const response = await POST(req)
    expect(response.status).toBe(401)
  })
  it("should return 200 if right password is provided", async () => {
    const { req } = createMocks({ body: { password: process.env.PAGE_PASSWORD! }, method: "POST" })
    const response = await POST(req)
    expect(response.status).toBe(200)
  })
})
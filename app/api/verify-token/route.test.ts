/*import { GET } from "./route"
import { createMocks } from "node-mocks-http"
import { expect } from "vitest";
import jwt from "jsonwebtoken";
import { loadEnvConfig } from '@next/env'

describe("Verify Login Route", () => {
  beforeEach( () => {
    loadEnvConfig(process.cwd())
  });

  it("should return 401 if no token is provided", async () => {
    const { req } = createMocks({ method: "GET" })
    //mock cookies
    const response = await GET(req)
    expect(response.status).toBe(401)
  })
  it("should return 200 if right token is provided", async () => {
    const token = jwt.sign({}, process.env.PAGE_PASSWORD!, { expiresIn: 60 * 60 * 24 * 31 })
    //mock cookies
    const { req } = createMocks({ headers: { cookie: `${process.env.PASSWORD_COOKIE_NAME}=${token}` }, method: "GET" });
    const response = await GET(req)
    expect(response.status).toBe(200)
  })
})*/
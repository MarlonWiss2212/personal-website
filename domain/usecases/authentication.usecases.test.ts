import { expect } from "vitest";
import { loadEnvConfig } from '@next/env'
import { AuthenticationUsecases } from "./authentication.usecases";

describe("Authentication UseCases", () => {
  const authenticationUsecases = new AuthenticationUsecases()
  let token: string | undefined = undefined
  beforeEach( () => {
    loadEnvConfig(process.cwd())
  });
  
  it("should return a JWT token and not null", async () => {
    token = authenticationUsecases.login(process.env.PAGE_PASSWORD!)
    expect(token).not.toBe(undefined)
  })

  it("should return a true boolean if the right token is provided", async () => {
    const response = authenticationUsecases.verifyToken(token ?? "", () => {})
    expect(response).toBe(true)
  })
})
import {expect} from "vitest";
import {EmailUseCases} from "./email.usecases";

const emailUseCases: EmailUseCases = new EmailUseCases()

describe("Email Use Cases", () => {
  it("call ifEmailValidFunction and test if it returns false if wrong email is passed", async () => {
    const email: string = "marlon.wio.de"
    const isEmailValid: boolean = emailUseCases.checkIfEmailIsValid(email)
    expect(isEmailValid).toBe(false)
  })
  it("call ifEmailValidFunction and test if it returns true if right email is passed", async () => {
    const email: string = "marlon.test@ignirf.de"
    const isEmailValid: boolean = emailUseCases.checkIfEmailIsValid(email)
    expect(isEmailValid).toBe(true)
  })
})
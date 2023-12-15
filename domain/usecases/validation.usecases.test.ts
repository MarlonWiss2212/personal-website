import {expect} from "vitest";
import { ValidationUsecases } from "./validation.usecases";

const validationUseCases: ValidationUsecases = new ValidationUsecases()

describe("Validation Use Cases", () => {
  it("call isEmailValid and should return false if wrong email is passed", async () => {
    const email: string = "marlon.wio.de"
    const isEmailValid: boolean = validationUseCases.isEmailValid(email)
    expect(isEmailValid).toBe(false)
  })

  it("call isEmailValid and should return true if right email is passed", async () => {
    const email: string = "marlon.test@ignirf.de"
    const isEmailValid: boolean = validationUseCases.isEmailValid(email)
    expect(isEmailValid).toBe(true)
  })


  it("call isPhoneNumberValid and should return false if phoneNumber is invalid", () => {
    const phoneNumber: string = "017690234853490"
    const isPhoneNumberValid: boolean = validationUseCases.isPhoneNumberValid(phoneNumber)
    expect(isPhoneNumberValid).toBe(false)
  })

  it("call isPhoneNumberValid and should return false if phoneNumber is invalid", () => {
    const phoneNumber: string = "+4917623456789"
    const isPhoneNumberValid: boolean = validationUseCases.isPhoneNumberValid(phoneNumber)
    expect(isPhoneNumberValid).toBe(true)
  })
})
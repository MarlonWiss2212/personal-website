import { POST } from "./route"
import { SendMailType } from "@/types/send-mail-type";
import { createMocks } from "node-mocks-http"
import { expect } from "vitest";
import { loadEnvConfig } from '@next/env'

describe("Send Email Route", () => {
  beforeEach( () => {
    loadEnvConfig(process.cwd())
  });
  
  it("should return 500 if email is wrong", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "marlon",
      phoneNumber: "Test",
      testing: true,
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)
    
    expect(response.status).toBe(500)
  })
  it("should return 500 if title is empty", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "",
      sendFromEmail: "marlon",
      phoneNumber: "Test",
      testing: true,
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)
    
    expect(response.status).toBe(500)
  })
  it("should return 500 if message is empty", async () => {
    const data: SendMailType = {
      message: "",
      title: "Test Title",
      sendFromEmail: "marlon",
      phoneNumber: "Test",
      testing: true,
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)
    
    expect(response.status).toBe(500)
  })
  it("should return 500 if phoneNumber is wrong", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "mar.qwaefin@outlook.de",
      phoneNumber: "Test",
      testing: true,
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)

    expect(response.status).toBe(500)
  })
  it("should return all error messages if email, phoneNumber, title and message are wrong", async () => {
    const data: SendMailType = {
      message: "",
      title: "",
      sendFromEmail: "Tecdsfst",
      phoneNumber: "Tedft",
      testing: true,
    }
    const { req } = createMocks({ body: data, method: "POST", headers: { "Content-Type": "application/json" } })
    const response = await POST(req)
    const bodyData = await response.json()

    expect(bodyData).toEqual({
      messageError: true,
      phoneNumberError: true,
      titleError: true,
      sendFromEmailError: true,
    })
  })
  it("should return 200 if no phoneNumber is provided", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "marlon.wiss@outlook.de",
      testing: true,
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)

    expect(response.status).toBe(200)
  })
  it("should return 200 if phoneNumber is empty", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "mar.qwaefin@outlook.de",
      phoneNumber: "",
      testing: true,
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)

    expect(response.status).toBe(200)
  })
})
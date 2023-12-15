import { POST } from "./route"
import { SendMailType } from "@/types/send-mail-type";
import { createMocks } from "node-mocks-http"
import { expect } from "vitest";

describe("Send Email Route", () => {
  it("should return 500 if email is wrong", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "marlon",
      phoneNumber: "Test"
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
      phoneNumber: "Test"
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)

    expect(response.status).toBe(500)
  })
  it("should return both error messages if email and phoneNumber are wrong", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "Tecdsfst",
      phoneNumber: "Tedft"
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)
    const bodyData = await response.json()
    expect(bodyData).toEqual({
      messageError: false,
      phoneNumberError: true,
      titleError: false,
      sendFromEmailError: true,
    })
  })
  it("should return 200 if no phoneNumber is provided", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "marlon.wiss@outlook.de",
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
      phoneNumber: ""
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)

    expect(response.status).toBe(200)
  })
})
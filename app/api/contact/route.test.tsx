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
      phoneNumber: "136686787"
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)
    
    expect(response.status).toBe(500)
  })
  it("should return 500 if phoneNumber is wrong", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "marlon.wiss@outlook.de",
      phoneNumber: "136686787"
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)

    expect(response.status).toBe(500)
  })
  it("should return 200 if no phoneNumber is provided", async () => {
    const data: SendMailType = {
      message: "Test Message",
      title: "Test Title",
      sendFromEmail: "marlon.wiss@outlook.de",
    }
    const { req } = createMocks({ body: data, method: "POST" })
    const response = await POST(req)

    expect(response.status).toBe(500)
  })
})
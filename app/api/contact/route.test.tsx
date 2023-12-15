import { POST } from "./route"
import { SendMailType } from "@/types/send-mail-type";
import { NextRequest } from "next/server";
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
})
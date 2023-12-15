import nodemailer from 'nodemailer'
import {SendMailType} from "@/types/send-mail-type";
import {NextResponse} from "next/server";
import { ValidationUsecases } from "../../../domain/usecases/validation.usecases";
import { ContactRouteResponseType } from "@/types/contact-route-response-type";

export async function POST(request: Request) {
  try {
    const validationUseCases = new ValidationUsecases()
    const emailData: SendMailType = await request.json()

    let responseData: ContactRouteResponseType = {
      messageError: false,
      phoneNumberError: false,
      titleError: false,
      sendFromEmailError: false,
    }
    const isEmailValid = validationUseCases.isEmailValid(emailData.sendFromEmail)
    const isPhoneNumberValid = emailData.phoneNumber != undefined && emailData.phoneNumber != "" ? validationUseCases.isPhoneNumberValid(emailData.phoneNumber) : undefined

    if (!isEmailValid) {
      responseData.sendFromEmailError = true
    }
    if (isPhoneNumberValid != undefined && !isPhoneNumberValid) {
      responseData.phoneNumberError = true
    }

    if(responseData.phoneNumberError || responseData.titleError || responseData.messageError || responseData.sendFromEmailError) {
      return NextResponse.json(responseData, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVICE,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        },
    })
    await transporter.sendMail({
      from: process.env.EMAIL_SEND_FROM,
      to: process.env.EMAIL_SEND_TO,
      subject: emailData.title,
      text: `${emailData.sendFromEmail}, ${emailData.phoneNumber}: ${emailData.message}`,
      html: `${emailData.sendFromEmail}, ${emailData.phoneNumber}: ${emailData.message}`,
    })
    return NextResponse.json(null, { status: 200 })
  } catch (error) {
    return NextResponse.json(null, { status: 500 })
  }
}
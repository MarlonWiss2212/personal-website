import nodemailer from 'nodemailer'
import {SendMailType} from "@/types/send-mail-type";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const emailData: SendMailType = await request.json()
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVICE,
            port: 587,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            },
        })
        const response = await transporter.sendMail({
            from: emailData.sendFromEmail,
            to: process.env.EMAIL_SEND_TO,
            subject: emailData.title,
            text: emailData.message,
            html: emailData.message
        })
        return NextResponse.json({ status: 200 })
    } catch (e) {
        return NextResponse.json({ status: 500 })
    }
}
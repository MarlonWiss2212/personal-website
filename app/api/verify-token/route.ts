import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
  const token = req.cookies.get(process.env.PASSWORD_COOKIE_NAME!)

  let response = new NextResponse("invalid token", { status: 401 })
  if(token?.value != undefined) {
    //TODO: make usecases for verify
    jwt.verify(token.value, process.env.PAGE_PASSWORD!, (error, data) => {
      if(error != null) {
        cookies().delete(process.env.PASSWORD_COOKIE_NAME!)
        response = new NextResponse("invalid token", { status: 401 })
      } else {
        response = new NextResponse("valid token", { status: 200 })
      }
    })
  }

  return response
}
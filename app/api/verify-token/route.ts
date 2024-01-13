import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const data: { jwt: string } = request?.json != null ? await request.json() : request.body;
  if(data.jwt == undefined) {
    return new NextResponse("invalid token", { status: 401 }) 
  }

  let response = new NextResponse("invalid token", { status: 401 })
  jwt.verify(data.jwt, process.env.PAGE_PASSWORD!, (error, data) => {
    if(error != null) {
      response = new NextResponse("invalid token", { status: 401 })
    } else {
      response = new NextResponse("valid token", { status: 200 })
    }
  })
  return response
}
import { serialize } from "cookie";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data: { password: string } = request?.json != null ? await request.json() : request.body;
  const password = data.password;

  if (process.env.PAGE_PASSWORD != password) {
    return new NextResponse("incorrect password", { status: 401 })
  }

  const token = jwt.sign({}, "password", { expiresIn: 60 * 60 * 24 * 31 })
  
  const cookie = serialize(process.env.PAGE_PASSWORD!, token, {
    httpOnly: true,
    path: "/",
  });

  return new NextResponse("correct password", { 
    status: 200,
    headers: { "Set-Cookie": cookie } 
  })
}
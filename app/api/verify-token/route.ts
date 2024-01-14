import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { AuthenticationUsecases } from "./../../../domain/usecases/authentication.usecases";

export async function GET(req: NextRequest) {
  const authenticationUseCases = new AuthenticationUsecases()
  const token = req.cookies.get(process.env.PASSWORD_COOKIE_NAME!)

  if(token?.value == null) {
    return new NextResponse("invalid token", { status: 401 })
  }

  const boolean = authenticationUseCases.verifyToken(token.value, () => {
    cookies().delete(process.env.PASSWORD_COOKIE_NAME!)
  })

  if(boolean) {
    return new NextResponse("valid token", { status: 200 })
  }
  return new NextResponse("invalid token", { status: 401 })
}
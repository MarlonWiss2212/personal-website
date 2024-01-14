import { AuthenticationUsecases } from "./../../../domain/usecases/authentication.usecases";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authenticationUseCases = new AuthenticationUsecases()
  const data: { password: string } = request?.json != null ? await request.json() : request.body;
  const password = data.password;
  const token = await authenticationUseCases.login(password)

  if (token == undefined) {
    return new NextResponse("incorrect password", { status: 401 })
  }
  
  const cookie = serialize(process.env.PASSWORD_COOKIE_NAME!, token, {
    httpOnly: true,
    path: "/",
  });
  

  return new NextResponse("correct password", { 
    status: 200,
    headers: { "Set-Cookie": cookie } 
  })
}
import { cookies } from "next/headers";
import PasswordPromptDialog from "../modal/password-prompt-dialog";

export default async function PasswordProtectedRoute({ children }: { children: React.ReactNode }) {
  const cookie = cookies().get(process.env.PASSWORD_COOKIE_NAME!)
  
  const response: Response = await fetch("/api/verify-token", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ "jwt": cookie?.value })
  })

  if (response.status != 200) {
    cookies().delete(process.env.PASSWORD_COOKIE_NAME!)
    return <PasswordPromptDialog />;
  } else {
    return children as JSX.Element
  }
}
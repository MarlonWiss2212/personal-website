"use client"
import { useEffect, useState } from "react";
import PasswordPromptDialog from "../modal/password-prompt-dialog";

export default function PasswordProtectedRoute({ children }: { children: React.ReactNode }) {
  const [response, setResponse] = useState<Response | undefined>(undefined)

  useEffect(() => {
    fetch("/api/verify-token", {
      method: "GET",
      headers: {"Content-Type": "application/json" },
    }).then(res => {
      console.log(res.status)
      setResponse(res)
    })
  }, [])

  if (response?.status != 200) {
    return <PasswordPromptDialog setResponse={setResponse} />;
  } else {
    return children as JSX.Element
  }
}
"use client";
import { Button, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React, { Dispatch, SetStateAction, useState } from 'react';

export default function PasswordPromptDialog({ setResponse }: { setResponse: Dispatch<SetStateAction<Response | undefined>> }) {
  const t = useTranslations("general")
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const request = await fetch(e.currentTarget.action, {
      body: JSON.stringify({password}),
      headers: {"Content-Type": "application/json"},
      method: e.currentTarget.method,
    });
    setResponse(request)
  }

  return (
    <div className='flex w-full h-full items-center justify-center'>
      <form method="POST" action={"/api/login"} onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 overscroll-none h-full w-full md:w-2/5">
        <Input
          data-testid="passwordPromptInput"
          type="password"
          id="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button className='w-full' color='primary' type="submit">Login</Button>
      </form>
    </div>
 );
}

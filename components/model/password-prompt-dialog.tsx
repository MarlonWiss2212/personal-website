"use client";
import { Button, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export default function PasswordPromptDialog() {
  const t = useTranslations("general")
  const [password, setPassword] = useState('');

  async function handleButtonPress(e: any) {
    const request = await fetch(`/api`, {
      body: JSON.stringify({password}),
      headers: {"Content-Type": "application/json"},
      method: "post",
    });

    if (request.status !== 200) return;
    else window.location.reload();
  }

  return (
    <div className='flex w-full h-full items-center justify-center'>
      <form className="flex flex-col items-center justify-center gap-4 overscroll-none h-full w-full md:w-2/5">
        <Input
          type="password"
          id="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button className='w-full' color='primary' onPress={handleButtonPress} type="button">Login</Button>
      </form>
    </div>
 );
}

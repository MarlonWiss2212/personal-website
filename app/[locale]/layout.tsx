import "./globals.css"
import type { Metadata } from "next"
import RootLayoutComponent from "@/components/layout/root-layout-component"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { NextIntlClientProvider } from "next-intl"
import {notFound} from 'next/navigation';

export const metadata: Metadata = {
  title: "Marlon Wißkirchen",
}

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({ children, params: {locale} }: { children: React.ReactNode, params: { locale: any } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="h-full">
      <head>
        <link rel="icon" href="/marlon_photo.jpg" sizes="any" className="rounded-md" />
        <meta name="google-site-verification" content="celk3M5txdecAsTCiA_HbYzoedL9yWE3HP3wmA3TIr0" />
      </head>
      <body className={inter.className + " bg-black text-white"}>
        <Analytics />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootLayoutComponent>{children}</RootLayoutComponent>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

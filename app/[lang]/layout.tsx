import "./globals.css"
import type { Metadata } from "next"
import RootLayoutComponent from "@/components/layout/root-layout-component"
import { Inter } from "next/font/google"
import { getDictionary } from "@/getDictionary"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Marlon Wißkirchen",
}

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: any } }) {
  const lang = await getDictionary(params.lang)
  return (
    <html lang={lang} className="h-full">
      <head>
        <meta name="google-site-verification" content="celk3M5txdecAsTCiA_HbYzoedL9yWE3HP3wmA3TIr0" />
      </head>
      <body className={inter.className + " bg-black text-white"}>
        <Analytics />
        <RootLayoutComponent lang={lang}>{children}</RootLayoutComponent>
      </body>
    </html>
  )
}

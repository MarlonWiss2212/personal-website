import "./globals.css"
import type { Metadata } from "next"
import RootLayoutComponent from "@/components/layout/root-layout-component"
import { Inter } from "next/font/google"
import { getDictionary } from "@/getDictionary"

export const metadata: Metadata = {
  title: "Marlon Wißkirchen",
}

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: any } }) {
  const lang = await getDictionary(params.lang)
  return (
    <html lang={lang} className="h-full">
      <body className={inter.className + " bg-black text-white"}>
        <RootLayoutComponent lang={lang}>{children}</RootLayoutComponent>
      </body>
    </html>
  )
}

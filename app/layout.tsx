import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import RootLayoutComponent from "@/components/layout/root-layout-component"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marlon Wißkirchen",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutComponent>{children}</RootLayoutComponent>
}

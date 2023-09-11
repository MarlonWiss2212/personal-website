import "./globals.css"
import type { Metadata } from "next"
import RootLayoutComponent from "@/components/layout/root-layout-component"

export const metadata: Metadata = {
  title: "Marlon Wißkirchen",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutComponent>{children}</RootLayoutComponent>
}

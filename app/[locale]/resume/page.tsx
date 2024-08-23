import AnimatedTitle from "@/components/general/animated-title"
import PasswordProtectedRoute from "@/components/general/password-protected-route"
import Timeline from "@/components/resume/timeline"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
  const t = await getTranslations({locale: locale, namespace: "resume.metadata"})
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    }
  }
}

export default function Resume() {
  const t = useTranslations("resume")
  return (
    <PasswordProtectedRoute>
      <div className="flex flex-col gap-4 overscroll-none h-full">
        <AnimatedTitle className="text-5xl font-bold">{t("title")}</AnimatedTitle>
        <Timeline />
      </div>
    </PasswordProtectedRoute>
  )
}

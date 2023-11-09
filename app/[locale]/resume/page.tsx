import AnimatedTitle from "@/components/general/animated-title"
import PasswordProtectedRoute from "@/components/general/password-protected-route"
import Timeline from "@/components/resume/timeline"
import { useTranslations } from "next-intl"

export default function Resume() {
  const t = useTranslations("resume")
  return (
    <PasswordProtectedRoute>
      <div className="flex flex-col gap-4 overscroll-none h-full">
        <AnimatedTitle className="text-5xl font-bold md:px-10">{t("title")}</AnimatedTitle>
        <Timeline />
      </div>
    </PasswordProtectedRoute>
  )
}

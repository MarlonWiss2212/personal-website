import Timeline from "@/components/resume/timeline"
import { useTranslations } from "next-intl"

export default function Resume() {
  const t = useTranslations("resume")
  return (
    <div className="flex flex-col gap-4 overscroll-none h-full">
      <h1 className="text-5xl font-bold md:px-10">{t("title")}</h1>
      <Timeline />
    </div>
  )
}

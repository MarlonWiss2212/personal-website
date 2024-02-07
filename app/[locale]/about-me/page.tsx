import PersonalData from "@/components/about-me/personal-data"
import Skills from "@/components/about-me/skills"
import AnimatedTitle from "@/components/general/animated-title"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({params: {locale}}: any) {
  const t = await getTranslations({locale: locale, namespace: "aboutMe.metadata"})
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function AboutMe() {
  const t = useTranslations("aboutMe")
  return (
    <div className="flex flex-col gap-10 overscroll-none h-full md:px-10">
      <AnimatedTitle className="text-5xl font-bold">{t("title")}</AnimatedTitle>
      <div className="flex flex-col flex-grow overflow-y-scroll gap-8 pb-4 lg:pb-14">
        <PersonalData />
        <Skills />
      </div>
    </div>
  )
}

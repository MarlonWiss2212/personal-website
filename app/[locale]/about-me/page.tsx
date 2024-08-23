import PersonalData from "@/components/about-me/personal-data"
import Skills from "@/components/about-me/skills"
import AnimatedTitle from "@/components/general/animated-title"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
  const t = await getTranslations({locale: locale, namespace: "aboutMe.metadata"})
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    }
  }
}

export default function AboutMe() {
  const t = useTranslations("aboutMe")
  return (
    <div className="flex flex-col gap-10 overscroll-none h-full">
      <AnimatedTitle className="text-5xl font-bold">{t("title")}</AnimatedTitle>
      <div className="flex flex-col flex-grow overflow-y-scroll gap-8 pb-4 lg:pb-14">
        <PersonalData />
        <Skills />
      </div>
    </div>
  )
}

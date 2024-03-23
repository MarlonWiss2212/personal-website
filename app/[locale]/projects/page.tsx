import ProjectBox from "@/components/projects/project-box"
import { ProjectType } from "@/types/project-type"
import AnimatedTitle from "@/components/general/animated-title"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({params: {locale}}: any) {
  const t = await getTranslations({locale: locale, namespace: "projects.metadata"})
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Projects() {
  const t = useTranslations("projects")
  const projects: ProjectType[] = [
    {
      title: t("zewothermApp.title"),
      message: t("zewothermApp.message"),
      images: ["/react-native.png", "/expo.png"],
      className: "",
      appStore: {
        appleLink: "https://apps.apple.com/de/app/zewotherm-produktwelt/id1659347270",
        googleLink: "https://play.google.com/store/apps/details?id=de.zwsystems.produktwelt",
      }
    },
    {
      title: t("weatherApp.title"),
      message: t("weatherApp.message"),
      images: ["/flutter.png"],
      className: "md:col-span-2 row-span-2",
      appStore: {
        gitLink: "https://github.com/MarlonWiss2212/weather_app"
      },
    },
    { 
      title: t("personalWebsite.title"), 
      message: t("personalWebsite.message"),
      images: ["/next.svg"], 
      className: "",
      web: {
        gitLink: "https://github.com/MarlonWiss2212/personal-webpage" 
      }
    },
    {
      title: t("chattyEvent.title"),
      message: t("chattyEvent.message"),
      images: ["/flutter.png", "/nuxt.svg", "/nest-js.png", "/graphql.png", "/firebase-auth.png", "/mongodb.svg", "/aws-s3-icon.png", "/kafka.png"],
      className: "md:col-span-3 row-span-3",
      appStore: {
        gitLink: "https://github.com/MarlonWiss2212/chattyevent_app_flutter"
      },
      web: {
        link: "https://chattyevent.com",
        gitLink: "https://github.com/MarlonWiss2212/chattyevent-web"
      }
    },
  ]

  return (
    <div className="flex flex-col gap-10 overscroll-none w-full h-full md:px-10 lg:pb-14">
      <AnimatedTitle className="text-5xl font-bold">{t("title")}</AnimatedTitle>
      <div className="flex flex-col flex-grow overflow-y-scroll">
        <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectBox className={project.className} key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

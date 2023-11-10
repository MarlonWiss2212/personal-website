import ProjectBox from "@/components/projects/project-box"
import { ProjectType } from "@/types/project-type"
import AnimatedTitle from "@/components/general/animated-title"
import { useTranslations } from "next-intl"

export default function Projects() {
  const t = useTranslations("projects")
  const projects: ProjectType[] = [
    {
      title: t("zewothermApp.title"),
      message: t("zewothermApp.message"),
      images: ["/react-native.png", "/expo.png"],
      className: "",
      appStoreLink: "https://apps.apple.com/de/app/zewotherm-produktwelt/id1659347270",
      playStoreLink: "https://play.google.com/store/apps/details?id=de.zwsystems.produktwelt",
    },
    {
      title: t("chattyEvent.title"),
      message: t("chattyEvent.message"),
      images: ["/flutter.png", "/nuxt.svg", "/nest-js.png", "/graphql.png", "/firebase-auth.png", "/mongodb.svg", "/aws-s3-icon.png", "/kafka.png"],
      className: "md:col-span-2 row-span-2",
      appStoreLink: "https://apps.apple.com/de/app/chattyevent/id6463625762",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.chattyevent.chattyevent",
      websiteLink: "https://chattyevent.com",
    },
    { title: t("personalWebsite.title"), message: t("personalWebsite.message"), images: ["/next.svg"], className: "", gitHubLink: "https://github.com/MarlonWiss2212/personal-webpage" },
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

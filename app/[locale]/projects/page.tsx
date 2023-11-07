import ProjectBox from "@/components/projects/project-box"
import { ProjectType } from "../../../types/project-type"
import AnimatedTitle from "@/components/general/animated-title"

export default function Projects() {
  const projects: ProjectType[] = [
    { title: "Zewotherm Produktwelt App", message: "Message 1", images: ["/react-native.png", "/expo.png"], className: "" },
    {
      title: "ChattyEvent",
      message:
        "ChattyEvent is an Mobile Cross-Platform app i developed starting fall 2022. The app is about planning events and parties with friends. It's developed with Flutter in the Frontend and NestJS, MongoDB and AWS S3 in the Backend. I used GraphQL instead of an REST API for more efficient requests. The App is currently in the google play store and the apple app store",
      images: ["/flutter.png", "/nuxt.svg", "/nest-js.png", "/graphql.png", "/firebase-auth.png", "/mongodb.svg", "/aws-s3-icon.png", "/kafka.png"],
      className: "md:col-span-2 row-span-2",
    },
    { title: "Personal Website", message: "This the website you currently see. It's developed with NextJS and NextUI as UI library. I designed it using Figma", images: ["/next.svg"], className: "" },
  ]

  return (
    <div className="flex flex-col gap-10 overscroll-none w-full h-full md:px-10 lg:pb-14">
      <AnimatedTitle className="text-5xl font-bold">Projects</AnimatedTitle>
      <div className="grid grid-cols-1 grid-flow-dense md:grid-cols-2 xl:grid-cols-3 flex-grow overflow-y-scroll gap-4 lg:pb-14">
        {projects.map((project, index) => (
          <ProjectBox className={project.className} key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

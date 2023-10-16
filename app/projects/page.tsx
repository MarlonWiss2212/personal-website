import ProjectBox from "@/components/projects/project-box"
import { ProjectType } from "../../types/project-type"

export default function Projects() {
  const projects: ProjectType[] = [
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["/react-native.png", "/expo.png"], className: "" },
    { 
      title: "ChattyEvent", 
      message: "ChattyEvent ist eine App die ich 2022 angefangen habe zu entwickeln um Partys mit Freunden zu planen. Die App basiert auf Flutter und holt die Daten über eine GraphQL Api bassierend auf NestJS von MongoDB und AWS. Die App habe ich ein Jahr später dann im Play- und App Store veröffentlicht", 
      images: ["/flutter.png", "/nuxt.svg", "/nest-js.png", "/graphql.png", "/firebase-auth.png", "/mongodb.svg", "/aws-s3-icon.png"], 
      className: "md:col-span-2 row-span-2" 
    },
    { title: "Personal Website", message: "Dies ist die Seite die sie gerade sehen. Sie bassiert auf NestJS in verbindung mit NextUI und wurde in Figma konzepiert", images: ["/next.svg"], className: "" },
  ]

  return (
    <div className="flex flex-col gap-10 overscroll-none w-full h-full">
      <h1 className="text-5xl font-bold">Projekte</h1>
      <div className="grid grid-cols-1 grid-flow-dense md:grid-cols-2 xl:grid-cols-3 flex-grow overflow-y-scroll gap-4">
        {projects.map((project, index) => (
          <ProjectBox className={project.className} key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

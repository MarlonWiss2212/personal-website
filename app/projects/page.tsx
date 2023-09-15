import ProjectBox from "@/components/projects/project-box"
import { ProjectType } from "./project-type"

export default function Projects() {
  const projects: ProjectType[] = [
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"] },
    { title: "ChattyEvent Api", message: "Nachricht 1", images: ["https://picsum.photos/200/300"] },
    { title: "ChattyEvent App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"] },
  ]

  return (
    <div className="flex flex-col gap-10 overscroll-none h-full md:px-10">
      <h1 className="text-5xl font-bold">Projekte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-grow overflow-y-scroll gap-4">
        {projects.map((project) => (
          <ProjectBox project={project} />
        ))}
      </div>
    </div>
  )
}

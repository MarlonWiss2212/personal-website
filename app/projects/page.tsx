import ProjectBox from "@/components/projects/project-box"
import { ProjectType } from "../../types/project-type"

export default function Projects() {
  const projects: ProjectType[] = [
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },
    { title: "ChattyEvent", message: "ChattyEvent Api und Flutter App und Webseite", images: ["https://picsum.photos/200/300"], className: "md:col-span-2 row-span-2" },
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },
    { title: "Zewotherm Produktwelt App", message: "Nachricht 1", images: ["https://picsum.photos/200/300"], className: "" },

  ]

  return (
    <div className="flex flex-col gap-10 overscroll-none h-full md:px-10">
      <h1 className="text-5xl font-bold">Projekte</h1>
      <div className="grid grid-cols-1 grid-flow-dense md:grid-cols-2 xl:grid-cols-3 flex-grow overflow-y-scroll gap-4">
        {projects.map((project, index) => (
          <ProjectBox className={project.className} key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

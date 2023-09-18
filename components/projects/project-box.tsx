import { ProjectType } from "@/app/projects/project-type"

export default function ProjectBox({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col justify-between h-52 p-4 bg-zinc-900 rounded-2xl">
      <div>
        <h3 className="font-bold text-xl">{project.title}</h3>
        <h4>{project.message}</h4>
      </div>
      <div className="flex flex-row gap-2">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt="" className="w-8 h-8 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

import { ProjectType } from "@/types/project-type"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import GithubLink from "@/components/general/github-link"

export default function ProjectBox({ project, className }: { project: ProjectType, className: string }) {
  return (
    <Card className={className + " overscroll-none"}>
      <CardBody className="flex flex-col justify-between gap-4 overscroll-none">
        <div>
          <h3 className="font-bold text-xl">{project.title}</h3>
          <h4>{project.message}</h4>
        </div>
        <div className="flex flex-col">
          {project.gitHubLink != null && 
            <GithubLink gitHubLink={project.gitHubLink} />
          }
          <div className="flex flex-wrap gap-2 overscroll-x-auto">
            {project.images.map((image, index) => (
              <Image key={index} width={40} height={40} src={image} alt="" className="w-10 h-10 p-1 rounded-md bg-neutral-800" />
            ))}
          </div>        
        </div>
      </CardBody>
    </Card>
  )
}

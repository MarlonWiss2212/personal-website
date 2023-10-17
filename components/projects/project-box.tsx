import { ProjectType } from "@/types/project-type"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"

export default function ProjectBox({ project, className }: { project: ProjectType, className: string }) {
  return (
    <Card className={className + " overscroll-none"}>
      <CardBody className="flex flex-col justify-between gap-4 overscroll-none">
        <div>
          <h3 className="font-bold text-xl">{project.title}</h3>
          <h4>{project.message}</h4>
        </div>
        <div className="flex flex-row gap-2 overscroll-x-auto">
          {project.images.map((image, index) => (
            <Image key={index} width={40} height={40} src={image} alt="" className="w-10 h-10 p-1 rounded-md bg-neutral-800" />
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

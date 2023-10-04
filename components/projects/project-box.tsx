"use client"
import { ProjectType } from "@/types/project-type"
import { Card, CardBody } from "@nextui-org/react"

export default function ProjectBox({ project }: { project: ProjectType }) {
  return (
    <Card className="max-h-52">
      <CardBody className="flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xl">{project.title}</h3>
          <h4>{project.message}</h4>
        </div>
        <div className="flex flex-row gap-2">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt="" className="w-8 h-8 rounded-xl" />
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

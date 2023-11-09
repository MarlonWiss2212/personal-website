"use client"
import { ProjectType } from "@/types/project-type"
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import GithubLink from "@/components/general/github-link"
import AppStoreLink from "@/components/general/app-store-link"
import PlayStoreLink from "@/components/general/play-store-link"
import WebsiteLink from "@/components/general/website-link"
import { motion } from "framer-motion"

export default function ProjectBox({ project, className }: { project: ProjectType, className: string }) {
  return (
    <motion.div className={className + " overscroll-none"} initial={{ scale: 0, opacity: 0, y: 400 }} animate={{ scale: 1, opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }}>
      <Card className="h-full w-full">
        <CardBody className="flex flex-col justify-between gap-4 overscroll-none">
          <div>
            <h3 className="font-bold text-xl">{project.title}</h3>
            <h4>{project.message}</h4>
          </div>
          <div className="flex flex-col">
            {(project.appStoreLink != null || project.playStoreLink != null || project.websiteLink != null) &&
              <div className="flex flex-wrap gap-2 py-2">
                {project.appStoreLink != null && <AppStoreLink appStoreLink={project.appStoreLink}/> }
                {project.playStoreLink != null && <PlayStoreLink playStoreLink={project.playStoreLink}/> }
                {project.websiteLink != null && <WebsiteLink websiteLink={project.websiteLink}/> }
              </div>
            }
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
    </motion.div>
  )
}

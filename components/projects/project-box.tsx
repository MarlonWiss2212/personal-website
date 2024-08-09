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
    <motion.div 
      className={className + " overscroll-none"} 
      initial={{ scale: 0, opacity: 0, y: (Math.random() * (500 - -500) + -500), x: (Math.random() * (500 - -500) + -500) }}
      animate={{ scale: 1, opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <Card className="h-full w-full">
        <CardBody className="flex flex-col justify-between gap-4 overscroll-none">
          <div>
            <h3 className="font-bold text-xl">{project.title}</h3>
            <h4>{project.message}</h4>
          </div>
          <div className="flex flex-col gap-2">
            {(project.web?.gitLink != null || project.appStore?.gitLink != null) &&
              <div className="flex flex-wrap gap-2">
              {project.web?.gitLink != null && 
                  <GithubLink gitHubLink={project.web.gitLink} imageSrc={"/website-icon.svg"} />
                }
                {project.appStore?.gitLink != null && 
                  <GithubLink gitHubLink={project.appStore.gitLink} />
                }
              </div>
            }
            {(project.web?.link != null || project.appStore?.appleLink != null || project.appStore?.googleLink != null) &&
              <div className="flex flex-wrap gap-2">
                {project.appStore?.appleLink != null && <AppStoreLink appStoreLink={project.appStore.appleLink}/> }
                {project.appStore?.googleLink != null && <PlayStoreLink playStoreLink={project.appStore.googleLink}/> }
                {project.web?.link!= null && <WebsiteLink websiteLink={project.web.link}/> }
              </div>
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

"use client"
import { Chip } from "@nextui-org/chip"
import { AccordionItem, Accordion } from "@nextui-org/accordion"
import { useTranslations } from "next-intl"

export default function Skills() {
  const t = useTranslations("aboutMe.skills")
  return (
    <Accordion variant="splitted">
      <AccordionItem key={"1"} aria-label={t("title")} title={t("title")}>
        <div className="p-4 w-full rounded-2xl flex flex-col gap-y-4">
          <div className="flex flex-wrap gap-2">
            <h3 className="text-xl font-bold">{t("legend.title")}: </h3>
            <Chip color="primary">{t("legend.goodExperience")}</Chip>
            <Chip>{t("legend.basicExperience")}</Chip>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{t("codingLanguages")}</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">Javascript</Chip>
              <Chip color="primary">Dart</Chip>
              <Chip color="primary">Typescript</Chip>
              <Chip>Kotlin</Chip>
              <Chip>Python</Chip>
              <Chip>Java</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">NuxtJS</Chip>
              <Chip color="primary">VueJS</Chip>
              <Chip color="primary">NextJS</Chip>
              <Chip>React</Chip>
              <Chip>Angular</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Cross-Platform</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">Flutter</Chip>
              <Chip color="primary">Ionic</Chip>
              <Chip>React-Native</Chip>
              <Chip>React-Native Expo</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Backend / API</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">NestJS</Chip>
              <Chip color="primary">REST Api</Chip>
              <Chip color="primary">Websockets</Chip>
              <Chip color="primary">GraphQL Api</Chip>
              <Chip color="primary">Node JS</Chip>
              <Chip color="primary">ExpressJs</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{t("databases")}</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">MongoDB</Chip>
              <Chip color="primary">AWS S3</Chip>
              <Chip>Postgre SQL</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Hosting</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">Render</Chip>
              <Chip color="primary">Cloudflare Pages</Chip>
              <Chip color="primary">Vercel</Chip>
              <Chip color="primary">Railway</Chip>
              <Chip color="primary">Heroku</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{t("technologiesPluginsOthers")}</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">Tailwind-CSS</Chip>
              <Chip color="primary">Supabase</Chip>
              <Chip color="primary">Firebase</Chip>
              <Chip color="primary">Scrum</Chip>
              <Chip color="primary">Kanban</Chip>
             <Chip>Apache Kafka</Chip>
              <Chip>Jetpack Compose</Chip>
              <Chip>Compose Multiplatform / Kotlin Multiplatform</Chip>
              <Chip>PWA</Chip>
              <Chip>Auth0</Chip>
              <Chip>Vite</Chip>
              <Chip>Webpack</Chip>
            </div>
          </div>
        </div>      
      </AccordionItem>
    </Accordion>
  )
}

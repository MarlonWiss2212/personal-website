"use client"
import { Chip } from "@nextui-org/chip"
import { AccordionItem, Accordion } from "@nextui-org/accordion"

export default function Skills() {
  return (
    <Accordion variant="splitted">
      <AccordionItem key={"1"} aria-label="programming knowledge" title="programming knowledge">
        <div className="p-4 w-full rounded-2xl flex flex-col gap-y-4">
        <div className="flex flex-row gap-2">
            <h3 className="text-xl font-bold">Legend: </h3>
            <Chip color="primary">Good experience</Chip>
            <Chip>Basic experience</Chip>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Coding languages</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">Javascript</Chip>
              <Chip color="primary">Dart</Chip>
              <Chip color="primary">Typescript</Chip>
              <Chip>Kotlin</Chip>
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
              <Chip color="primary">GraphQL Api</Chip>
              <Chip color="primary">Node JS</Chip>
              <Chip color="primary">ExpressJs</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Databases</h3>
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
              <Chip color="primary">Cloud-flare Pages</Chip>
              <Chip color="primary">Railway</Chip>
              <Chip color="primary">Heroku</Chip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Technologies / plugins / other</h3>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary">Tailwind-CSS</Chip>
              <Chip color="primary">Supabase</Chip>
              <Chip color="primary">Firebase</Chip>
              <Chip color="primary">Apache Kafka</Chip>
              <Chip>Auth0</Chip>
            </div>
          </div>
        </div>      
      </AccordionItem>
    </Accordion>
  )
}

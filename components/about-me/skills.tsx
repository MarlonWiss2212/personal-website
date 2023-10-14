import SkillRoundedItem from "./skill-rounded-item"
import { AccordionItem, Accordion } from "@nextui-org/accordion"

export default function Skills() {
  const circumference = 35 * 2 * Math.PI

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Programmierkentnisse" title="Programmierkentnisse">
        <div className="p-4 w-full rounded-2xl">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Programmiersprachen</h3>
            <div className="flex flex-wrap gap-2">
              <SkillRoundedItem circumference={circumference} percent={95} title="Java-script" />
              <SkillRoundedItem circumference={circumference} percent={80} title="Dart" />
              <SkillRoundedItem circumference={circumference} percent={70} title="Type-script" />
              <SkillRoundedItem circumference={circumference} percent={30} title="Kotlin" />
              <SkillRoundedItem circumference={circumference} percent={20} title="Java" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Frontend Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <SkillRoundedItem circumference={circumference} percent={90} title="NuxtJS" />
              <SkillRoundedItem circumference={circumference} percent={90} title="Vue" />
              <SkillRoundedItem circumference={circumference} percent={65} title="Angular" />
              <SkillRoundedItem circumference={circumference} percent={60} title="NextJS" />
              <SkillRoundedItem circumference={circumference} percent={60} title="React" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Backend Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <SkillRoundedItem circumference={circumference} percent={90} title="NestJS" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">CrossPlatform Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <SkillRoundedItem circumference={circumference} percent={100} title="Flutter" />
              <SkillRoundedItem circumference={circumference} percent={90} title="Ionic(mit Vue)" />
              <SkillRoundedItem circumference={circumference} percent={70} title="React-Native" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Backend Technologien / Plugins / Datenbanken</h3>
            <div className="flex flex-wrap gap-2">
              <SkillRoundedItem circumference={circumference} percent={95} title="MongoDB" />
              <SkillRoundedItem circumference={circumference} percent={90} title="AWS S3" />
              <SkillRoundedItem circumference={circumference} percent={90} title="NodeJS" />
              <SkillRoundedItem circumference={circumference} percent={90} title="ExpressJs" />
              <SkillRoundedItem circumference={circumference} percent={60} title="SQL" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Hosting</h3>
            <div className="flex flex-wrap gap-2">
              <SkillRoundedItem circumference={circumference} percent={85} title="Render" />
              <SkillRoundedItem circumference={circumference} percent={85} title="Cloud-flare Pages" />
              <SkillRoundedItem circumference={circumference} percent={80} title="Railway" />
              <SkillRoundedItem circumference={circumference} percent={80} title="Heroku" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Technologien / Plugins / anderes</h3>
            <div className="flex flex-wrap gap-2">
              <SkillRoundedItem circumference={circumference} percent={95} title="Tailwind-CSS" />
              <SkillRoundedItem circumference={circumference} percent={85} title="Firebase" />
              <SkillRoundedItem circumference={circumference} percent={45} title="Auth0" />
            </div>
          </div>
        </div>      
      </AccordionItem>
    </Accordion>
  )
}

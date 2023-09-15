import RoundedItem from "../rounded-item"

export default function SkillsOpen() {
  const circumference = 35 * 2 * Math.PI

  return (
    <div className="p-4 w-full rounded-2xl">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Programmiersprachen</h3>
        <div className="flex flex-wrap gap-2">
          <RoundedItem circumference={circumference} percent={95} title="Java-script" />
          <RoundedItem circumference={circumference} percent={80} title="Dart" />
          <RoundedItem circumference={circumference} percent={70} title="Type-script" />
          <RoundedItem circumference={circumference} percent={30} title="Kotlin" />
          <RoundedItem circumference={circumference} percent={20} title="Java" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Frontend Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          <RoundedItem circumference={circumference} percent={90} title="NuxtJS" />
          <RoundedItem circumference={circumference} percent={90} title="Vue" />
          <RoundedItem circumference={circumference} percent={65} title="Angular" />
          <RoundedItem circumference={circumference} percent={60} title="NextJS" />
          <RoundedItem circumference={circumference} percent={60} title="React" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Backend Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          <RoundedItem circumference={circumference} percent={90} title="NestJS" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">CrossPlatform Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          <RoundedItem circumference={circumference} percent={100} title="Flutter" />
          <RoundedItem circumference={circumference} percent={90} title="Ionic(mit Vue)" />
          <RoundedItem circumference={circumference} percent={70} title="React-Native" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Backend Technologien / Plugins / Datenbanken</h3>
        <div className="flex flex-wrap gap-2">
          <RoundedItem circumference={circumference} percent={95} title="MongoDB" />
          <RoundedItem circumference={circumference} percent={90} title="AWS S3" />
          <RoundedItem circumference={circumference} percent={90} title="NodeJS" />
          <RoundedItem circumference={circumference} percent={90} title="ExpressJs" />
          <RoundedItem circumference={circumference} percent={60} title="SQL" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Hosting</h3>
        <div className="flex flex-wrap gap-2">
          <RoundedItem circumference={circumference} percent={85} title="Render" />
          <RoundedItem circumference={circumference} percent={85} title="Cloud-flare Pages" />
          <RoundedItem circumference={circumference} percent={80} title="Railway" />
          <RoundedItem circumference={circumference} percent={80} title="Heroku" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Technologien / Plugins / anderes</h3>
        <div className="flex flex-wrap gap-2">
          <RoundedItem circumference={circumference} percent={95} title="Tailwind-CSS" />
          <RoundedItem circumference={circumference} percent={85} title="Firebase" />
          <RoundedItem circumference={circumference} percent={45} title="Auth0" />
        </div>
      </div>
    </div>
  )
}

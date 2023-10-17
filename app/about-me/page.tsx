import PersonalData from "@/components/about-me/personal-data";
import Skills from "@/components/about-me/skills";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-10 overscroll-none h-full md:px-10">
      <h1 className="text-5xl font-bold">About me</h1>
      <div className="flex flex-col flex-grow overflow-y-scroll gap-8 pb-4 lg:pb-14">
        <PersonalData />
        <Skills />
      </div>
    </div>
  )
}

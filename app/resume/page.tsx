import Timeline from "@/components/resume/timeline"

export default function Resume() {
  return (
    <div className="flex flex-col gap-4 overscroll-none h-full">
      <h1 className="text-5xl font-bold md:px-10">Resume</h1>
      <Timeline />
    </div>
  )
}

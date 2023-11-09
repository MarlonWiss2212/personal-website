import { TimelineBoxProps } from "@/types/timeline-box-props-type"
import TimelineBox from "./timeline-box"

interface TimelineDateBoxProps extends TimelineBoxProps {
  year: string
  month?: string
}

export default function TimelineDateBox({ month, year, onRight, text, title, certificates }: TimelineDateBoxProps) {
  return (
    <div className="flex flex-row w-full">
      {onRight ? <div className="w-2/5 px-2 py-60"></div> : <TimelineBox title={title} text={text} certificates={certificates} onRight={onRight}></TimelineBox>}
      {/* Center box with line and date */}
      <div className="w-1/5 flex justify-center">
        <div className="relative flex h-full w-1 bg-indigo-500 items-center justify-center">
          <div className="absolute flex flex-col justify-center gap-1 h-20 w-20 xl:h-24 xl:w-24 font-semibold xl:font-bold text-xs xl:text-sm rounded-full border-4 border-indigo-500 leading-none text-center z-10 bg-black">
            {month ? <p>{month}</p> : null}
            <p>{year}</p>
          </div>
        </div>
      </div>
      {onRight ? <TimelineBox title={title} text={text} certificates={certificates} onRight={onRight}></TimelineBox> : <div className="w-2/5 px-2 py-40"></div>}
    </div>
  )
}

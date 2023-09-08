export default function RoundedItem({ circumference, title, percent }: { circumference: number; title: string; percent: number }) {
  return (
    <div>
      <div className="inline-flex relative items-center justify-center overflow-hidden rounded-full">
        <svg className="w-20 h-20">
          <circle className="text-white" stroke-width="3" stroke="currentColor" fill="transparent" r="35" cx="40" cy="40" />
          <circle
            className="text-indigo-500"
            stroke-width="3"
            stroke-linecap="round"
            strokeDashoffset={circumference - (percent / 100) * circumference}
            strokeDasharray={circumference}
            stroke="currentColor"
            fill="transparent"
            r="35"
            cx="40"
            cy="40"
          />
        </svg>
        <span className="absolute text-sm max-w-[4rem] text-center">{title}</span>
      </div>
    </div>
  )
}

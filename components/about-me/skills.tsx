"use client"

import { ArrowDownIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import SkillsOpen from "./skills-open"

export default function Skills() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)

  return (
    <div className="rounded-2xl bg-zinc-900 flex flex-col items-start">
      <div className="p-4 w-full sticky flex flex-col gap-4 top-0 rounded-2xl bg-zinc-900 z-50">
        <button className="text-2xl flex justify-between w-full" onClick={() => setIsSkillsOpen(!isSkillsOpen)}>
          <h2 className="font-bold">Kenntnisse</h2>
          {isSkillsOpen && <ArrowDownIcon className="w-7 h-7" />}
          {!isSkillsOpen && <ArrowLeftIcon className="w-7 h-7" />}
        </button>
        {isSkillsOpen && <div className="w-full h-px bg-white/10 "></div>}
      </div>
      {isSkillsOpen && <SkillsOpen />}
    </div>
  )
}

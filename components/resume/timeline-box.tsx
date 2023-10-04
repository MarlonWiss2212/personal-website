"use client"

import { Card, CardBody } from "@nextui-org/react"

export default function TimelineBox({ text, title }: { text: string; title: string }) {
  return (
    <Card className="w-2/5 self-center hover:scale-105 duration-150">
      <CardBody className="flex flex-col w-full rounded-lg shadow px-4 py-5">
        <div className=" mb-2 flex justify-between">
          <h3 className="font-bold">{title}</h3>
        </div>
        <p>{text}</p>
      </CardBody>
    </Card>
  )
}

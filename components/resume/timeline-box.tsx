"use client"
import { Card, CardBody } from "@nextui-org/card"
import { motion } from "framer-motion"

export default function TimelineBox({ text, title, onRight }: { text: string; title: string; onRight: boolean }) {
  return (
    <motion.div className="w-2/5 self-center" initial={{ scale: 0, x: onRight ? -250 : 350 }} whileInView={{ scale: 1, x: 0, transition: { duration: 0.4 } }}>
      <Card>
        <CardBody className="flex flex-col w-full rounded-lg shadow px-4 py-5">
          <div className=" mb-2 flex justify-between">
            <h3 className="font-bold">{title}</h3>
          </div>
          <p>{text}</p>
        </CardBody>
      </Card>
    </motion.div>
  )
}

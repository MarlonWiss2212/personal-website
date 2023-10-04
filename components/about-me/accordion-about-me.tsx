"use client"
import React from "react"
import { Accordion, AccordionItem } from "@nextui-org/react"
import Skills from "./skills"

export default function AccordionAboutMe() {
  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Kenntnisse" title="Kenntnisse">
        <Skills />
      </AccordionItem>
    </Accordion>
  )
}

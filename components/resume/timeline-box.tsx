"use client"
import { Card, CardBody } from "@nextui-org/card"
import { motion } from "framer-motion"
import { Link } from "@nextui-org/react";
import { TimelineBoxProps } from "@/types/timeline-box-props-type";
import { useTranslations } from "next-intl";

export default function TimelineBox({ text, title, onRight, certificates }: TimelineBoxProps) {
  const t = useTranslations("resume.timeline")

  return (
    <motion.div className="w-2/5 self-center" initial={{ scale: 0, x: onRight ? -250 : 250 }} whileInView={{ scale: 1, x: 0, transition: { duration: 0.4, ease: "backInOut" } }}>
      <Card>
        <CardBody className="flex flex-col w-full rounded-lg shadow px-4 py-5">
          <div className=" mb-2 flex justify-between">
            <h3 className="font-bold">{title}</h3>
          </div>
          <p>{text}</p>
          {certificates != null &&
            <>
              <p className="pt-5 font-semibold">{t("certificateTitle")}: </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {certificates.map(certificate => {
                  return (
                    <Link href={certificate.link} rel="noopener noreferrer" target="_blank">
                      <div className="bg-neutral-800 flex items-center justify-center font-semibold text-sm h-8 w-auto rounded-md p-1 text-white">{certificate.name}</div>
                    </Link>
                  )
                })
                }
              </div>
            </>
          }
        </CardBody>
      </Card>
    </motion.div>
  )
}

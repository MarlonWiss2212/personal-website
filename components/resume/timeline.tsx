import { useTranslations } from "next-intl"
import TimelineDateBox from "./timeline-date-box"
import { Certificate } from "@/types/certificate-type"

export default function Timeline() {
  const t = useTranslations("resume.timeline")
  const tMonth = useTranslations("month")

  const certificates: Certificate[] = [{ link: "/certificate_2023.pdf", name: t("box4.certificates.2023Text") }]

  return (
    <div className="flex flex-col flex-grow overflow-y-scroll text-white md:px-10 cursor-default lg:pb-14">
      <TimelineDateBox year="2017-2021" text={t("box1.description")} title={t("box1.title")} onRight={true}></TimelineDateBox>
      <TimelineDateBox year="2020" month={tMonth("january")} text={t("box2.description")} title={t("box2.title")} onRight={false}></TimelineDateBox>
      <TimelineDateBox year="2021" month={tMonth("july")} text={t("box3.description")} title={t("box3.title")} onRight={true}></TimelineDateBox>
      <TimelineDateBox year="2021" month={tMonth("august")} text={t("box4.description")} title={t("box4.title")} certificates={certificates} onRight={false}></TimelineDateBox>
      <TimelineDateBox year="2022-2023" text={t("box5.description")} title={t("box5.title")} onRight={true}></TimelineDateBox>
    </div>
  )
}

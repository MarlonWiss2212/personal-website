"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function IntroductionTitle() {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center overscroll-none h-full md:px-10 lg:pb-14">
      <div className="h-screen flex flex-col items-start justify-center gap-4 lg:pr-48">
        <motion.h2 initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} className='text-md font-bold text-gray-400'>{t("page.title1")}</motion.h2>
        <motion.h1 initial={{ x: -450, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} className='text-5xl font-bold'>{t("page.title2")}</motion.h1>
        <motion.h2 initial={{ x: 450, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} className='text-5xl text-gray-500 font-bold'>{t("page.title3")}</motion.h2>
        <motion.p initial={{ y: 300, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} className='text-gray-500'>{t("page.text")}</motion.p>
      </div>
    </div>
  )
}
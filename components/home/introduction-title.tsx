"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function IntroductionTitle() {
  const t = useTranslations()

  function getAge(birthday: Date): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(birthday);
    let age: number = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  return (
    <div className="flex flex-col items-center overscroll-none h-full">
      <div className="h-screen w-full hyphens-auto flex flex-col items-start justify-center gap-4 lg:pr-48">
        <motion.h2
          initial={{ y: -300, opacity: 0 }} 
          animate={{ y: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} 
          className='text-base font-bold text-gray-400'
        >{t("page.title1")}</motion.h2>
        <motion.h1 
          data-testid={`nameTitle`} 
          initial={{ x: -450, opacity: 0 }} 
          animate={{ x: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} 
          className='text-3xl md:text-5xl font-bold'
        >{t("page.title2")}</motion.h1>
        <motion.h2 
          initial={{ x: 450, opacity: 0 }} 
          animate={{ x: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} 
          className='text-3xl md:text-5xl text-gray-500 font-bold'
        >{t("page.title3")}</motion.h2>
        <motion.p 
          initial={{ y: 300, opacity: 0 }} 
          animate={{ y: 0, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }} 
          className='text-gray-500'
        >{t("page.text", { age: getAge(new Date("12-22-2004")).toString() })}</motion.p>
      </div>
    </div>
  )
}
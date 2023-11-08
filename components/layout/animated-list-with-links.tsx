"use client"
import { Variants, motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

// english always has a slash
const transformLocale = (locale: string, withEndingSlash: boolean = true): string => {
  if (locale == "en") {
    return "/"
  } else {
    return withEndingSlash ? `/${locale}/` : `/${locale}`
  }
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function AnimatedListWithLinks({ setSidebarOpen }: { setSidebarOpen: Dispatch<SetStateAction<boolean>> }) {
  const t = useTranslations()
  const locale = useLocale()

  const pathname = usePathname()
  console.log(pathname)
  const navigation = [
    { name: t("page.title"), href: transformLocale(locale), current: pathname == transformLocale(locale, false) },
    { name: t("resume.title"), href: `${transformLocale(locale)}resume`, current: pathname.startsWith(`${transformLocale(locale)}resume`) },
    { name: t("projects.title"), href: `${transformLocale(locale)}projects`, current: pathname.startsWith(`${transformLocale(locale)}projects`) },
    { name: t("aboutMe.title"), href: `${transformLocale(locale)}about-me`, current: pathname.startsWith(`${transformLocale(locale)}about-me`) },
    { name: t("contact.title"), href: `${transformLocale(locale)}contact`, current: pathname.startsWith(`${transformLocale(locale)}contact`) },
  ]

  const container = (duration: number): Variants => {
    return {
      hidden: { x: -400 },
      show: {
        x: 0,
        transition: {
          duration: duration,
        },
      },
    }
  }

  return (
    <ul role="list" className="-mx-2 space-y-1">
      {navigation.map((item, index) => (
        <motion.li variants={container((index + 1) / 5)} initial="hidden" animate="show" key={item.name}>
          <Link
            onClick={() => setSidebarOpen(false)}
            href={item.href}
            className={classNames(item.current ? "text-white" : "text-gray-400 hover:text-white", "group flex gap-x-3 rounded-md p-2 text-2xl leading-6 font-bold")}
          >
            {item.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}

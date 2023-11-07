"use client"
import { Variants, motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedTitleProps {
  children: ReactNode
  className: string | null
}

export default function AnimatedTitle({ children, className }: AnimatedTitleProps) {
  const container: Variants = {
    hidden: { y: 100, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <motion.h1 variants={container} initial="hidden" animate="show" className={className ?? undefined}>
      {children}
    </motion.h1>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillCardProps {
  title: string
  description: string
  level: number
}

export default function SkillCard({ title, description, level }: SkillCardProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level)
    }, 100)

    return () => clearTimeout(timer)
  }, [level])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="p-5 rounded-lg bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-muted/50 shadow-lg"
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
        />
      </div>
      <div className="mt-2 text-right text-xs text-muted-foreground">{level}%</div>
    </motion.div>
  )
}


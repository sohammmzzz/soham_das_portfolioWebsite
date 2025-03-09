"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Achievement {
  title: string
  description: string
}

interface TimelineItemProps {
  title: string
  company: string
  location: string
  period: string
  achievements: Achievement[]
}

export default function TimelineItem({ title, company, location, period, achievements }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                {company} - {location}
              </CardDescription>
            </div>
            <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full inline-block">
              {period}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {achievements.slice(0, isExpanded ? achievements.length : 2).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary pl-4 py-1"
              >
                <h4 className="font-medium text-base mb-1">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          {achievements.length > 2 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 mt-2"
            >
              {isExpanded ? "Show Less" : "Show More"}
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}


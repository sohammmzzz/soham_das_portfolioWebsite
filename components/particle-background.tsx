"use client"

import { useCallback, useEffect, useRef } from "react"
import { motion } from "framer-motion"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  const createParticles = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    const particleCount = 100
    const colors = ["#3b82f6", "#8b5cf6", "#6366f1", "#ec4899"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    particlesRef.current = particles
  }, [])

  const drawParticles = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle, i) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Boundary check
      if (particle.x > canvas.width) particle.x = 0
      else if (particle.x < 0) particle.x = canvas.width

      if (particle.y > canvas.height) particle.y = 0
      else if (particle.y < 0) particle.y = canvas.height

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // Connect particles
      connectParticles(particle, i, ctx)
    })

    animationFrameRef.current = requestAnimationFrame(drawParticles)
  }, [])

  const connectParticles = (particle: Particle, index: number, ctx: CanvasRenderingContext2D) => {
    for (let j = index + 1; j < particlesRef.current.length; j++) {
      const particle2 = particlesRef.current[j]
      const distance = Math.sqrt(Math.pow(particle.x - particle2.x, 2) + Math.pow(particle.y - particle2.y, 2))

      if (distance < 100) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(150, 150, 255, ${0.2 - distance / 500})`
        ctx.lineWidth = 0.5
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particle2.x, particle2.y)
        ctx.stroke()
      }
    }

    // Connect to mouse
    const mouseDistance = Math.sqrt(
      Math.pow(particle.x - mouseRef.current.x, 2) + Math.pow(particle.y - mouseRef.current.y, 2),
    )

    if (mouseDistance < 150) {
      ctx.beginPath()
      ctx.strokeStyle = `rgba(150, 150, 255, ${0.3 - mouseDistance / 500})`
      ctx.lineWidth = 0.8
      ctx.moveTo(particle.x, particle.y)
      ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
      ctx.stroke()
    }
  }

  const handleResize = useCallback(() => {
    if (!canvasRef.current) return

    canvasRef.current.width = window.innerWidth
    canvasRef.current.height = window.innerHeight
    createParticles()
  }, [createParticles])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    animationFrameRef.current = requestAnimationFrame(drawParticles)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [drawParticles, handleResize, handleMouseMove])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    />
  )
}


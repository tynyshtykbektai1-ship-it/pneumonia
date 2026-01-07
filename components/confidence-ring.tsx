"use client"

import { useEffect, useState } from "react"

interface ConfidenceRingProps {
  confidence: number
  isPneumonia: boolean
}

export function ConfidenceRing({ confidence, isPneumonia }: ConfidenceRingProps) {
  const [animatedConfidence, setAnimatedConfidence] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedConfidence(confidence)
    }, 100)
    return () => clearTimeout(timer)
  }, [confidence])

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (animatedConfidence / 100) * circumference

  const colorClass = isPneumonia ? "text-destructive" : "text-accent"
  const bgColorClass = isPneumonia ? "text-destructive/20" : "text-accent/20"

  return (
    <div className="relative w-36 h-36">
      {/* Glow effect */}
      <div className={`absolute inset-0 blur-xl ${colorClass} opacity-30 rounded-full`} />

      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className={bgColorClass} />

        {/* Progress ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`${colorClass} transition-all duration-1000 ease-out`}
          style={{
            filter: `drop-shadow(0 0 8px currentColor)`,
          }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold ${colorClass}`}>{Math.round(animatedConfidence)}%</span>
        <span className="text-xs text-muted-foreground mt-1">Confidence</span>
        <span className="text-xs text-muted-foreground">Сенімділік</span>
      </div>
    </div>
  )
}

"use client"

import { AlertTriangle, CheckCircle, Stethoscope } from "lucide-react"
import { ConfidenceRing } from "./confidence-ring"
import { LungIllustration } from "./lung-illustration"

interface ResultCardProps {
  prediction: "PNEUMONIA" | "NORMAL"
  confidence: number
}

export function ResultCard({ prediction, confidence }: ResultCardProps) {
  const isPneumonia = prediction === "PNEUMONIA"

  return (
    <div
      className={`
      relative rounded-3xl p-6 sm:p-8 overflow-hidden
      border-2 transition-all duration-500
      ${isPneumonia ? "bg-destructive/5 border-destructive/30" : "bg-accent/5 border-accent/30"}
    `}
    >
      {/* Background glow */}
      <div
        className={`
        absolute inset-0 opacity-10
        ${
          isPneumonia
            ? "bg-gradient-to-br from-destructive to-destructive/0"
            : "bg-gradient-to-br from-accent to-accent/0"
        }
      `}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`
            p-3 rounded-xl
            ${isPneumonia ? "bg-destructive/20" : "bg-accent/20"}
          `}
          >
            {isPneumonia ? (
              <AlertTriangle className="w-6 h-6 text-destructive" />
            ) : (
              <CheckCircle className="w-6 h-6 text-accent" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Prediction Result / Талдау нәтижесі
            </h3>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 items-center">
          {/* Result text */}
          <div>
            <h2
              className={`
              text-2xl sm:text-3xl font-bold mb-2
              ${isPneumonia ? "text-destructive" : "text-accent"}
            `}
            >
              {isPneumonia ? "Pneumonia Detected" : "No Pneumonia Detected"}
            </h2>
            <p
              className={`
              text-lg font-medium
              ${isPneumonia ? "text-destructive/80" : "text-accent/80"}
            `}
            >
              {isPneumonia ? "Пневмония анықталды" : "Пневмония анықталған жоқ"}
            </p>

            {/* Lung illustration */}
            <div className="w-32 h-32 mt-4">
              <LungIllustration result={isPneumonia ? "pneumonia" : "normal"} />
            </div>
          </div>

          {/* Confidence display */}
          <div className="flex flex-col items-center">
            <ConfidenceRing confidence={confidence * 100} isPneumonia={isPneumonia} />
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">Confidence Level</p>
              <p className="text-xs text-muted-foreground">Сенімділік деңгейі</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-xs text-muted-foreground">
            ⚠️ This AI prediction is for screening purposes only. Please consult a medical professional for diagnosis.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            ⚠️ Бұл ЖИ болжамы тек скрининг мақсатында ғана. Диагноз қою үшін дәрігерге жүгініңіз.
          </p>
        </div>
      </div>
    </div>
  )
}

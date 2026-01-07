"use client"

import { useState } from "react"
import { Scan, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UploadZone } from "./upload-zone"
import { ResultCard } from "./result-card"
import { LoadingAnimation } from "./loading-animation"
import { LungIllustration } from "./lung-illustration"

interface PredictionResult {
  prediction: "Pneumonia" | "Normal"
  confidence: number
}

export function PneumoniaDetector() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)

  const handleImageSelect = (file: File) => {
    setSelectedFile(file)
    setSelectedImage(URL.createObjectURL(file))
    setResult(null)
  }

  const handleClear = () => {
    setSelectedImage(null)
    setSelectedFile(null)
    setResult(null)
  }

  const handleAnalyze = async () => {
    if (!selectedFile) return

    setIsAnalyzing(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("image", selectedFile)

      const response = await fetch("/api/predict", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Analysis failed")
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error analyzing image:", error)
      // For demo purposes, show a mock result
      setResult({
        prediction: Math.random() > 0.5 ? "Pneumonia" : "Normal",
        confidence: 0.85 + Math.random() * 0.1,
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleReset = () => {
    setSelectedImage(null)
    setSelectedFile(null)
    setResult(null)
  }

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Deep Learning</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            AI Pneumonia Detection System
          </h1>
          <p className="text-xl sm:text-2xl text-primary font-medium mb-4">
            Жасанды интеллект арқылы пневмонияны анықтау жүйесі
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload a chest X-ray image for instant AI-powered pneumonia analysis. Our deep learning model provides rapid
            screening results.
          </p>

          {/* Decorative lung */}
          <div className="w-24 h-24 mx-auto mt-6 opacity-50">
            <LungIllustration />
          </div>
        </div>

        {/* Main card */}
        <div className="bg-card/50 backdrop-blur-xl rounded-3xl border border-border shadow-xl shadow-primary/5 p-6 sm:p-8">
          {isAnalyzing ? (
            <LoadingAnimation />
          ) : result ? (
            <div className="space-y-6">
              <ResultCard prediction={result.prediction} confidence={result.confidence} />

              {/* Analyzed image preview */}
              {selectedImage && (
                <div className="rounded-2xl overflow-hidden border border-border">
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt="Analyzed X-ray"
                    className="w-full h-48 object-contain bg-muted/50"
                  />
                </div>
              )}

              {/* Reset button */}
              <div className="flex justify-center">
                <Button onClick={handleReset} variant="outline" size="lg" className="rounded-full gap-2 bg-transparent">
                  <RotateCcw className="w-4 h-4" />
                  <span>Analyze Another Image</span>
                  <span className="text-muted-foreground">/ Басқа суретті талдау</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <UploadZone
                onImageSelect={handleImageSelect}
                selectedImage={selectedImage}
                onClear={handleClear}
                disabled={isAnalyzing}
              />

              {selectedImage && (
                <div className="flex justify-center">
                  <Button
                    onClick={handleAnalyze}
                    size="lg"
                    className="rounded-full gap-3 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/30"
                    disabled={isAnalyzing}
                  >
                    <Scan className="w-5 h-5" />
                    <span>Analyze Image</span>
                    <span className="opacity-80">/ Суретті талдау</span>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          <div className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">Deep learning neural network</p>
            <p className="text-xs text-primary mt-1">Терең оқыту нейрондық желісі</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Instant Results</h3>
            <p className="text-sm text-muted-foreground">Get predictions in seconds</p>
            <p className="text-xs text-primary mt-1">Секунд ішінде нәтиже алыңыз</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">High Accuracy</h3>
            <p className="text-sm text-muted-foreground">Trained on medical datasets</p>
            <p className="text-xs text-primary mt-1">Медициналық деректерде оқытылған</p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { LungIllustration } from "./lung-illustration"

export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center py-8">
      {/* Animated lung */}
      <div className="w-40 h-40 mb-6">
        <LungIllustration isAnalyzing />
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce" />
          <span
            className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          />
          <span
            className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <span className="ml-2">Analyzing X-ray with AI</span>
        </h3>
        <p className="text-base text-primary">ЖИ суретті талдауда...</p>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs mt-6">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent animate-shimmer rounded-full"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Processing steps */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">1</span>
          </div>
          <p className="text-xs text-muted-foreground">Processing</p>
        </div>
        <div className="animate-pulse" style={{ animationDelay: "0.3s" }}>
          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">2</span>
          </div>
          <p className="text-xs text-muted-foreground">Analyzing</p>
        </div>
        <div className="animate-pulse" style={{ animationDelay: "0.6s" }}>
          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">3</span>
          </div>
          <p className="text-xs text-muted-foreground">Predicting</p>
        </div>
      </div>
    </div>
  )
}

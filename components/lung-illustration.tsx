"use client"

interface LungIllustrationProps {
  isAnalyzing?: boolean
  result?: "PNEUMONIA" | "NORMAL" | null
}

export function LungIllustration({ isAnalyzing, result }: LungIllustrationProps) {
  const getColor = () => {
    if (result === "PNEUMONIA") return "text-destructive"
    if (result === "NORMAL") return "text-accent"
    return "text-primary"
  }

  return (
    <div className={`relative ${isAnalyzing ? "animate-breathe" : ""}`}>
      <svg
        viewBox="0 0 200 200"
        className={`w-full h-full ${getColor()} transition-colors duration-500`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Trachea */}
        <path d="M100 20 L100 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="opacity-80" />

        {/* Bronchi */}
        <path
          d="M100 60 Q85 75 60 90"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-70"
        />
        <path
          d="M100 60 Q115 75 140 90"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-70"
        />

        {/* Left lung */}
        <path
          d="M60 90 Q20 100 25 140 Q30 180 70 175 Q90 170 95 140 Q100 110 60 90"
          fill="currentColor"
          className={`opacity-20 ${isAnalyzing ? "animate-pulse" : ""}`}
        />
        <path
          d="M60 90 Q20 100 25 140 Q30 180 70 175 Q90 170 95 140 Q100 110 60 90"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />

        {/* Right lung */}
        <path
          d="M140 90 Q180 100 175 140 Q170 180 130 175 Q110 170 105 140 Q100 110 140 90"
          fill="currentColor"
          className={`opacity-20 ${isAnalyzing ? "animate-pulse" : ""}`}
        />
        <path
          d="M140 90 Q180 100 175 140 Q170 180 130 175 Q110 170 105 140 Q100 110 140 90"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />

        {/* Bronchioles in left lung */}
        <path d="M60 100 Q50 110 45 125" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        <path d="M65 105 Q55 120 50 140" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        <path d="M70 115 Q65 130 60 150" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />

        {/* Bronchioles in right lung */}
        <path d="M140 100 Q150 110 155 125" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        <path d="M135 105 Q145 120 150 140" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
        <path d="M130 115 Q135 130 140 150" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />

        {/* Highlight areas for pneumonia */}
        {result === "pneumonia" && (
          <>
            <circle cx="50" cy="130" r="15" fill="currentColor" className="opacity-30 animate-pulse" />
            <circle
              cx="65"
              cy="155"
              r="10"
              fill="currentColor"
              className="opacity-25 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="145"
              cy="135"
              r="12"
              fill="currentColor"
              className="opacity-30 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
          </>
        )}

        {/* Scan line effect when analyzing */}
        {isAnalyzing && (
          <rect x="15" y="0" width="170" height="4" fill="currentColor" className="opacity-40 animate-scan-line" />
        )}
      </svg>

      {/* Glow effect */}
      <div className={`absolute inset-0 blur-2xl opacity-20 ${getColor()}`}>
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
          <ellipse cx="60" cy="135" rx="35" ry="45" />
          <ellipse cx="140" cy="135" rx="35" ry="45" />
        </svg>
      </div>
    </div>
  )
}

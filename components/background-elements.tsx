export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute -bottom-40 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      {/* Alveoli pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="alveoli" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle
              cx="30"
              cy="30"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
            <circle
              cx="30"
              cy="30"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-primary"
            />
            <circle cx="30" cy="30" r="5" fill="currentColor" className="text-primary/30" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#alveoli)" />
      </svg>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  )
}

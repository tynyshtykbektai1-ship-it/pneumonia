import { Brain, Activity } from "lucide-react"

export function Header() {
  return (
    <header className="relative py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">PneumoAI</h1>
              <p className="text-xs text-muted-foreground">Detection System</p>
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">System Online</span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  )
}

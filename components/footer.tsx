import { Brain, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        {/* Info section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">About This System</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This system uses deep learning and computer vision to analyze chest X-ray images for pneumonia. The AI
              model has been trained on extensive medical imaging datasets to provide accurate screening results.
            </p>
            <p className="text-sm text-primary leading-relaxed">
              Бұл жүйе пневмонияны анықтау үшін терең оқыту және компьютерлік көру технологияларын қолданады. ЖИ моделі
              дәл скрининг нәтижелерін қамтамасыз ету үшін медициналық деректер жиынтығында оқытылған.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-muted/50 border border-border mb-8">
          <p className="text-xs text-muted-foreground text-center">
            ⚠️ <strong>Medical Disclaimer:</strong> This AI tool is intended for screening purposes only and should not
            replace professional medical diagnosis. Always consult a qualified healthcare provider for medical advice.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            ⚠️ <strong>Медициналық ескерту:</strong> Бұл ЖИ құралы тек скрининг мақсатында ғана арналған және кәсіби
            медициналық диагностиканы алмастыра алмайды.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2025 PneumoAI</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">AI Healthcare Solutions</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { PneumoniaDetector } from "@/components/pneumonia-detector"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundElements } from "@/components/background-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundElements />
      <div className="relative z-10">
        <Header />
        <PneumoniaDetector />
        <Footer />
      </div>
    </main>
  )
}

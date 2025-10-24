import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ModernSlaveryPage() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />
      <main className="pt-24 sm:pt-28 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Modern Slavery Statement</h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          CWBS is committed to preventing modern slavery and human trafficking in our operations and supply chains. We
          uphold ethical labor practices, conduct due diligence on suppliers, and train our teams to identify and
          address risks. This statement outlines our approach and ongoing actions.
        </p>
      </main>
      <Footer />
    </div>
  )
}



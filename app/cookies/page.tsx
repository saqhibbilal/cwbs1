import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />
      <main className="pt-24 sm:pt-28 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Cookies Policy</h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          We use cookies to enhance your experience, analyze site performance, and deliver personalized content. By
          using our site, you consent to our use of cookies. You can manage your cookie preferences in your browser
          settings.
        </p>
      </main>
      <Footer />
    </div>
  )
}



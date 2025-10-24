import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              This is the Privacy Policy page for CWBS. We are committed to protecting your privacy and ensuring you
              have a positive experience on our website.
            </p>
            <p>
              We collect and process personal information in accordance with applicable data protection laws and
              regulations.
            </p>
            <p>For more information about how we handle your data, please contact us at saqbilal@cwbs.com.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

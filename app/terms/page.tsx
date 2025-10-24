import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Terms() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              This is the Terms and Conditions page for CWBS. Please review our terms carefully before using our
              services.
            </p>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
            <p>For more detailed information about our terms, please contact us at saqbilal@cwbs.com.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

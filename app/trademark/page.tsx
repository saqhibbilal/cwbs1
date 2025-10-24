import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Trademark() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Trademark</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              This is the Trademark page for CWBS. All trademarks, logos, and brand names are the property of CWBS or
              their respective owners.
            </p>
            <p>Unauthorized use of our trademarks is strictly prohibited.</p>
            <p>For trademark inquiries, please contact us at saqbilal@cwbs.com.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

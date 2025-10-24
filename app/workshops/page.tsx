import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const workshops = [
  {
    title: "Oracle Fusion Workshop",
    description: "Hands-on implementation and optimization workshop for Oracle Fusion ERP systems.",
    price: "$2,000",
  },
  {
    title: "Marketing Automation Workshop",
    description: "Learn to streamline campaigns and automate marketing processes for maximum efficiency.",
    price: "$1,200",
  },
  {
    title: "AI for Business Workshop",
    description: "Practical workshop on leveraging AI technologies to drive business growth and innovation.",
    price: "$1,800",
  },
]

export default function Workshops() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Expert Workshops</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Hands-on workshops to accelerate your business transformation with practical, expert-led sessions.
          </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {workshops.map((workshop) => (
              <Card
                key={workshop.title}
                className="border-2 border-[#1C2841]/20 hover:border-[#1C2841] hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-gradient-to-br from-white to-[#1C2841]/5"
              >
                <CardHeader className="border-b border-[#1C2841]/10">
                  <CardTitle className="text-base sm:text-lg text-[#1C2841] font-bold">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4 pt-6">
                  <CardDescription className="text-muted-foreground flex-1 text-xs sm:text-sm leading-relaxed">
                    {workshop.description}
                  </CardDescription>
                  <div className="space-y-4 pt-2">
                    <div className="text-2xl sm:text-3xl font-bold text-[#1C2841]">{workshop.price}</div>
                    <Button className="w-full bg-[#1C2841] text-white hover:bg-[#1C2841]/90 font-semibold transition-all text-sm">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

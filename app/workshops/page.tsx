"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseDetailsModal } from "@/components/course-details-modal"

const workshops = [
  {
    title: "Oracle Fusion Workshop",
    description: "Hands-on implementation and optimization workshop for Oracle Fusion ERP systems.",
    originalPrice: "$1,999",
    price: "$999",
    duration: "2 days, live online",
    mode: "Instructor-led workshop",
    overview: "Practical, hands-on Oracle Fusion workshop covering implementation patterns and best practices.",
    curriculum: [
      "Workshop setup and environment",
      "Core modules walkthrough",
      "Configuration and extensions",
      "Integration scenarios",
      "Performance tuning and best practices",
    ],
    outcomes: "Run small-to-medium Oracle Fusion implementations and apply workshop best practices.",
    registerUrl: "https://forms.google.com/dummy-workshop-fusion"
  },
  {
    title: "Marketing Automation Workshop",
    description: "Learn to streamline campaigns and automate marketing processes for maximum efficiency.",
    originalPrice: "$1,999",
    price: "$999",
    duration: "1 day, live online",
    mode: "Instructor-led workshop",
    overview: "Hands-on session to build and automate marketing campaigns end-to-end.",
    curriculum: [
      "Campaign design and segmentation",
      "Automation flows and triggers",
      "Personalization and A/B testing",
      "Reporting and ROI measurement",
    ],
    outcomes: "Design and run automated marketing campaigns that move the needle.",
    registerUrl: "https://forms.google.com/dummy-workshop-marketing"
  },
  {
    title: "AI for Business Workshop",
    description: "Practical workshop on leveraging AI technologies to drive business growth and innovation.",
    originalPrice: "$1,999",
    price: "$999",
    duration: "2 days, live online",
    mode: "Instructor-led workshop",
    overview: "Hands-on AI workshop covering model selection, integration, and deployment patterns for business use-cases.",
    curriculum: [
      "AI strategy and use-case identification",
      "Model selection and evaluation",
      "Integration with existing systems",
      "MLOps basics and deployment",
    ],
    outcomes: "Prototype and plan AI solutions that deliver measurable business value.",
    registerUrl: "https://forms.google.com/dummy-workshop-ai"
  },
]

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<(typeof workshops)[0] | null>(null)

  const handleRegister = (registerUrl: string) => {
    window.open(registerUrl, "_blank")
  }

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
                  <div className="space-y-3 pt-2">
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl sm:text-3xl font-bold text-[#1C2841]">{workshop.price}</div>
                      <div className="text-lg text-gray-500 line-through">{workshop.originalPrice}</div>
                      <div className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                        Save {Math.round(((parseInt(workshop.originalPrice.replace(/\$|,/g, '')) - parseInt(workshop.price.replace(/\$|,/g, ''))) / parseInt(workshop.originalPrice.replace(/\$|,/g, ''))) * 100)}%
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        className="w-full border-[#1C2841] text-[#1C2841] hover:bg-[#1C2841] hover:text-white font-semibold transition-all text-sm"
                        onClick={() => setSelectedWorkshop(workshop)}
                      >
                        More Info
                      </Button>
                      <Button
                        className="w-full bg-[#1C2841] text-white hover:bg-[#1C2841]/90 font-semibold transition-all text-sm"
                        onClick={() => handleRegister(workshop.registerUrl)}
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedWorkshop && (
        <CourseDetailsModal
          isOpen={!!selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
          course={selectedWorkshop}
        />
      )}

      <Footer />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const courses = [
  {
    title: "Oracle Fusion",
    description: "Comprehensive training for Oracle Fusion ERP system implementation and optimization.",
    price: "$1,500",
  },
  {
    title: "Advanced Digital Marketing",
    description: "Master advanced digital marketing strategies and tools to drive business growth.",
    price: "$900",
  },
  {
    title: "Human Capital Management",
    description: "HCM training for HR professionals to optimize talent management and employee engagement.",
    price: "$1,200",
  },
]

export default function Courses() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Professional Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Upskill your team with CWBS's professional training courses in Oracle Fusion, Marketing, and HCM.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {courses.map((course) => (
              <Card
                key={course.title}
                className="border-2 border-[#1C2841]/20 hover:border-[#1C2841] hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-gradient-to-br from-white to-[#1C2841]/5"
              >
                <CardHeader className="border-b border-[#1C2841]/10">
                  <CardTitle className="text-base sm:text-lg text-[#1C2841] font-bold">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4 pt-6">
                  <CardDescription className="text-muted-foreground flex-1 text-xs sm:text-sm leading-relaxed">
                    {course.description}
                  </CardDescription>
                  <div className="space-y-4 pt-2">
                    <div className="text-2xl sm:text-3xl font-bold text-[#1C2841]">{course.price}</div>
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

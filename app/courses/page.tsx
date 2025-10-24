"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseDetailsModal } from "@/components/course-details-modal"

const courses = [
  {
    title: "Oracle HCM Cloud",
    description: "Master Oracle HCM Cloud and transform your HR operations with cutting-edge tools and practices.",
    originalPrice: "$1,999",
    price: "$999",
    duration: "Expert-led, live online sessions",
    mode: "Instructor-guided (not self-paced)",
    handsOn: "Interactive labs and guided exercises",
    overview: "Discover how Oracle Human Capital Management (HCM) Cloud transforms HR and workforce operations through automation and analytics. This course helps you grasp end-to-end employee lifecycle management on the Oracle platform.",
    curriculum: [
      "Introduction to Oracle HCM Cloud - HCM architecture and modules, Navigation, roles, and permissions",
      "Core HR and Workforce Structures - Defining workforce structures, Managing employee data and organizational hierarchies",
      "Talent Management - Recruiting, onboarding, and talent acquisition, Performance management and learning modules",
      "Payroll and Compensation - Payroll processing and compliance setup, Compensation planning and automation",
      "AI and Analytics for HR - Predictive insights for employee retention, Workforce planning with machine learning, Diversity and inclusion analytics",
      "Self-Service and Mobility - Employee and manager self-service tools, Mobile HR features in Oracle HCM Cloud",
      "Integration and Security - Integrating HCM with ERP and Identity systems, Data privacy and compliance fundamentals"
    ],
    outcomes: "You'll gain the confidence to navigate Oracle HCM Cloud, understand digital HR transformation, and apply AI-driven insights to manage talent, engagement, and performance effectively",
    registerUrl: "https://forms.google.com/dummy-hcm-registration" // Replace with actual Google Form URL
  },
  {
    title: "Oracle Fusion",
    description: "Comprehensive training for Oracle Fusion ERP system implementation and optimization.",
    originalPrice: "$1,999",
    price: "$999",
    duration: "Expert-led, live online sessions",
    mode: "Instructor-guided (not self-paced)",
    handsOn: "Interactive labs and guided exercises",
    overview: "Master Oracle Fusion ERP implementation and configuration with hands-on practice and real-world scenarios.",
    curriculum: [
      "Oracle Fusion Fundamentals",
      "Financial Management and Reporting",
      "Supply Chain Management",
      "Project Portfolio Management",
      "System Administration and Security",
      "Integration and Customization"
    ],
    outcomes: "Become proficient in implementing and managing Oracle Fusion ERP systems for enterprise-scale operations",
    registerUrl: "https://forms.google.com/dummy-fusion-registration" // Replace with actual Google Form URL
  },
  {
    title: "Advanced Digital Marketing",
    description: "Master advanced digital marketing strategies and tools to drive business growth.",
    originalPrice: "$1,999",
    price: "$999",
    duration: "6 weeks, live online sessions",
    mode: "Instructor-guided with hands-on projects",
    handsOn: "Real-world campaign management",
    overview: "Learn cutting-edge digital marketing techniques and strategies to create impactful online campaigns.",
    curriculum: [
      "Digital Marketing Strategy",
      "SEO and Content Marketing",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Analytics and Reporting",
      "Conversion Rate Optimization"
    ],
    outcomes: "Develop and execute comprehensive digital marketing campaigns that drive measurable business results",
    registerUrl: "https://forms.google.com/dummy-marketing-registration" // Replace with actual Google Form URL
  }
]

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)

  const handleRegister = (registerUrl: string) => {
    window.open(registerUrl, "_blank")
  }

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
                  <div className="space-y-3 pt-2">
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl sm:text-3xl font-bold text-[#1C2841]">{course.price}</div>
                      <div className="text-lg text-gray-500 line-through">{course.originalPrice}</div>
                      <div className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                        Save {Math.round(((parseInt(course.originalPrice.replace(/\$|,/g, '')) - parseInt(course.price.replace(/\$|,/g, ''))) / parseInt(course.originalPrice.replace(/\$|,/g, ''))) * 100)}%
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        className="w-full border-[#1C2841] text-[#1C2841] hover:bg-[#1C2841] hover:text-white font-semibold transition-all text-sm"
                        onClick={() => setSelectedCourse(course)}
                      >
                        More Info
                      </Button>
                      <Button
                        className="w-full bg-[#1C2841] text-white hover:bg-[#1C2841]/90 font-semibold transition-all text-sm"
                        onClick={() => handleRegister(course.registerUrl)}
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

      {selectedCourse && (
        <CourseDetailsModal
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          course={selectedCourse}
        />
      )}

      <Footer />
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const keyServices = [
  {
    title: "AI Integrations",
    description:
      "Leverage cutting-edge AI technology to drive business efficiency and innovation across your enterprise.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
      </svg>
    ),
  },
  {
    title: "ERP Services",
    description: "Comprehensive enterprise resource planning solutions tailored to your business needs.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
      </svg>
    ),
  },
  {
    title: "Strategic Consulting",
    description: "Expert guidance to transform your business strategy and achieve sustainable growth.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: "Automation Solutions",
    description: "Streamline operations and reduce costs through intelligent process automation.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
  },
]

const featuredCourses = [
  {
    title: "Oracle ERP Cloud Financials",
    description: "Master Oracle ERP Cloud Financials implementation and optimization",
    duration: "3 Months",
  },
  {
    title: "Oracle SCM Cloud",
    description: "Advanced strategies for modern supply chain management",
    duration: "3 Months",
  },
  {
    title: "AI for Business Operations ",
    description: "Learn how to apply AI, automation, and GenAI tools to streamline business operations and improve decision-making.",
    duration: "2 Months",
  },
]

const featuredWorkshops = [
  {
    title: "Oracle Fusion Workshop",
    description: "Hands-on implementation and optimization",
    duration: "2 Days",
    price: "$2,000",
  },
  {
    title: "AI for Business",
    description: "Practical AI applications for business growth",
    duration: "1 Day",
    price: "$1,800",
  },
  {
    title: "Marketing Automation",
    description: "Streamline campaigns and automate processes",
    duration: "1 Day",
    price: "$1,200",
  },
]

const stats = [
  { number: "500+", label: "Clients Served", description: "Trusted by leading enterprises" },
  { number: "15+", label: "Years Experience", description: "Proven track record" },
  { number: "50+", label: "Projects Delivered", description: "Successful implementations" },
  { number: "98%", label: "Client Satisfaction", description: "Exceeding expectations" },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "CWBS transformed our operations with their AI integration expertise. The results exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateLabs",
    content: "Their Oracle Fusion implementation was seamless. We saw immediate improvements in efficiency.",
  },
  {
    name: "Emily Rodriguez",
    role: "VP Operations, GlobalTech",
    content: "The strategic consulting provided invaluable insights that drove our business growth significantly.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#1C2841]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#1C2841]/3 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Empowering Businesses with Innovative Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
            Transform your enterprise with CWBS's expertise in AI, automation, and strategic consulting. We deliver
            results that drive growth and innovation.
          </p>
          <Link href="/services">
            <Button className="bg-[#1C2841] text-white hover:bg-[#1C2841]/90 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold">
              Explore Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Transform Your Business</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our innovative solutions drive measurable results across every aspect of your enterprise
            </p>
          </div>
          
          {/* Interactive Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {keyServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-lg border border-[#1C2841]/20 hover:border-[#1C2841] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C2841]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-[#1C2841]/10 group-hover:bg-[#1C2841] transition-colors duration-300">
                      <div className="text-[#1C2841] group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#1C2841] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-[#1C2841]/10 px-6 py-3 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#1C2841] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#1C2841]">Trusted by 500+ Enterprises</span>
            </div>
                  <Link href="/services">
              <Button className="bg-[#1C2841] text-white hover:bg-[#1C2841]/90 px-8 py-3 text-base font-semibold hover:scale-105 transition-transform duration-300">
                Discover All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#1C2841]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Proven Impact</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results
            </p>
          </div>
          
          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl bg-white border border-[#1C2841]/20 hover:border-[#1C2841] transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C2841]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2841] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-foreground mb-1 group-hover:text-[#1C2841] transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1C2841] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Hub */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Accelerate Your Growth</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Master cutting-edge technologies and methodologies through our expert-led programs
            </p>
          </div>

          {/* Learning Tabs */}
          <div className="grid grid-cols-1 gap-8">
            {/* Courses Column */}
            <div className="space-y-6">
                <div className="flex flex-col items-center space-y-3 mb-6">
                  <div className="p-2 rounded-lg bg-[#1C2841]/10">
                    <svg className="w-6 h-6 text-[#1C2841]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center">Professional Courses</h3>
                </div>
              {/* Center the course cards in a constrained container so they don't stretch too wide */}
              <div className="space-y-6 max-w-3xl mx-auto w-full">
                {featuredCourses.map((course, index) => (
                  <div
                    key={course.title}
                    className="group relative overflow-hidden rounded-lg border border-[#1C2841]/20 hover:border-[#1C2841] transition-all duration-500 hover:shadow-lg hover:-translate-y-1 w-full"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1C2841]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-[#1C2841] transition-colors duration-300 mb-3">
                        {course.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Duration: {course.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*
            Workshops Column (commented out per client request). To re-enable, remove the surrounding comment markers.

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-[#1C2841]/10">
                  <svg className="w-6 h-6 text-[#1C2841]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Expert Workshops</h3>
              </div>
              
              {featuredWorkshops.map((workshop, index) => (
                <div
                  key={workshop.title}
                  className="group relative overflow-hidden rounded-lg border border-[#1C2841]/20 hover:border-[#1C2841] transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1C2841]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-[#1C2841] transition-colors duration-300 mb-3">
                      {workshop.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {workshop.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Duration: {workshop.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            */}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4">
              <Link href="/courses">
                <Button className="bg-[#1C2841] text-white hover:bg-[#1C2841]/90 px-6 py-3 font-semibold hover:scale-105 transition-transform duration-300">
                  Browse All Courses
                </Button>
              </Link>
              {/*
              View Workshops CTA (commented out per client request). To re-enable, remove the comment markers.
              <Link href="/workshops">
                <Button variant="outline" className="border-[#1C2841] text-[#1C2841] hover:bg-[#1C2841] hover:text-white px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                  View Workshops
                </Button>
              </Link>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#1C2841]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Client Success Stories</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real partnerships that drive business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white border border-[#1C2841]/20 hover:border-[#1C2841] transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1C2841] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-[#1C2841]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1C2841] to-[#1C2841]/70 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-[#1C2841] font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#1C2841]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C2841] to-[#1C2841]/90 p-8 sm:p-12">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
            </div>
            <div className="relative text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Accelerate Your Success?
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 500+ enterprises that trust CWBS to deliver transformative results. Let's build your competitive advantage together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/services">
                  <Button className="bg-white text-[#1C2841] hover:bg-white/90 px-8 py-4 text-base font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                    Start Your Journey
                  </Button>
                </Link>
                 
              </div>
              <div className="mt-8 flex items-center justify-center space-x-6 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

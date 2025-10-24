import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const leadership = [
  {
    name: "John Doe",
    title: "Chief Executive Officer",
    bio: "With 20 years of experience in enterprise solutions, John leads CWBS with a vision for innovation and growth.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "john@cwbs.com",
  },
  {
    name: "Sarah Johnson",
    title: "Chief Technology Officer",
    bio: "Sarah brings deep expertise in AI and cloud technologies, driving our technical innovation and product strategy.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sarah@cwbs.com",
  },
  {
    name: "Michael Chen",
    title: "Chief Operations Officer",
    bio: "Michael ensures operational excellence and scalability, managing our global operations and client success.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "michael@cwbs.com",
  },
  {
    name: "Emily Rodriguez",
    title: "VP of Consulting Services",
    bio: "Emily leads our consulting division with a focus on delivering strategic value and transformative solutions.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "emily@cwbs.com",
  },
]

const values = [
  { title: "Innovation", description: "Continuously pushing boundaries to deliver cutting-edge solutions." },
  { title: "Integrity", description: "Building trust through transparency and ethical business practices." },
  { title: "Impact", description: "Creating meaningful change that drives business success and growth." },
]

const stats = [
  { number: "500+", label: "Clients Served", description: "Trusted by leading enterprises globally" },
  { number: "15+", label: "Years of Excellence", description: "Proven track record in business solutions" },
  { number: "50+", label: "Projects Delivered", description: "Successful implementations across industries" },
  { number: "98%", label: "Client Satisfaction", description: "Committed to exceeding expectations" },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-10 left-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#1C2841]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#1C2841]/3 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">About CWBS</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            A trusted partner in corporate business solutions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-[#1C2841]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 bg-white border-2 border-[#1C2841]/20 hover:border-[#1C2841] transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2841] mb-2">{stat.number}</div>
                <div className="text-base sm:text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                CWBS is a trusted partner in corporate business solutions, delivering innovative services in AI,
                automation, ERP, and consulting to drive enterprise success. With a focus on excellence, we empower
                businesses to thrive in the digital age by providing comprehensive, scalable solutions tailored to their
                unique needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-[#1C2841]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {leadership.map((leader) => (
              <Card key={leader.name} className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-foreground">{leader.name}</CardTitle>
                  <CardDescription className="text-[#1C2841] font-semibold text-xs sm:text-sm">
                    {leader.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{leader.bio}</p>
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Link
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C2841] hover:text-[#1C2841]/70 transition-colors"
                      title="LinkedIn"
                    >
                      <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </Link>
                    <Link
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C2841] hover:text-[#1C2841]/70 transition-colors"
                      title="Twitter"
                    >
                      <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                    <Link
                      href={`mailto:${leader.email}`}
                      className="text-[#1C2841] hover:text-[#1C2841]/70 transition-colors"
                      title="Email"
                    >
                      <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </Link>
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

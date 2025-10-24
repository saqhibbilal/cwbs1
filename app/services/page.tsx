import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const allServices = [
  {
    title: "Marketing",
    description:
      "Digital marketing, SEO, and content strategy to elevate your brand presence and reach your target audience effectively.",
  },
  {
    title: "Automation",
    description: "Process automation and workflow optimization to streamline operations and reduce manual workload.",
  },
  {
    title: "AI Integrations",
    description:
      "AI-driven solutions for business efficiency, enabling smarter decision-making and enhanced productivity.",
  },
  {
    title: "Data Intelligence Services",
    description: "Data analytics and insights to unlock valuable business intelligence and drive informed strategies.",
  },
  {
    title: "Software & Application Development",
    description: "Custom software solutions tailored to your unique business requirements and scalability needs.",
  },
  {
    title: "Migration Services",
    description: "Cloud and data migration services ensuring smooth transitions with minimal downtime.",
  },
  {
    title: "HR & Staffing Services",
    description: "Talent acquisition and management solutions to build and nurture your workforce.",
  },
  {
    title: "ERP Services",
    description:
      "Enterprise resource planning solutions for integrated business management and operational excellence.",
  },
  {
    title: "Project Management",
    description: "Agile and waterfall methodologies to ensure successful project delivery on time and within budget.",
  },
  {
    title: "Product Management",
    description: "Product lifecycle management from conception to market launch and beyond.",
  },
  {
    title: "Compliance Services",
    description: "Regulatory and compliance solutions to ensure your business meets all industry standards.",
  },
  {
    title: "Enterprise Services",
    description: "Scalable enterprise solutions designed for large organizations with complex requirements.",
  },
  {
    title: "Consulting & Advisory Services",
    description: "Strategic business consulting to guide your organization through transformation and growth.",
  },
  {
    title: "DataOps & DevOps",
    description: "Data and development operations to optimize your technical infrastructure and deployment processes.",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white grid-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Comprehensive Business Solutions for the Modern Enterprise. From AI to ERP, we deliver results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {allServices.map((service) => (
              <Card
                key={service.title}
                className="border border-border hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4">
                  <CardDescription className="text-sm text-muted-foreground flex-1">
                    {service.description}
                  </CardDescription>
                  <Button className="w-full bg-[#1C2841] text-white hover:bg-[#1C2841]/90 mt-auto text-sm">
                    Learn More
                  </Button>
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

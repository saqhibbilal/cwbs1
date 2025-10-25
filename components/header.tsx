"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ContactModal } from "./contact-modal"

const services = [
  { name: "Marketing", description: "Digital marketing, SEO, and content strategy" },
  { name: "Automation", description: "Process automation and workflow optimization" },
  { name: "AI Integrations", description: "AI-driven solutions for business efficiency" },
  { name: "Data Intelligence Services", description: "Data analytics and insights" },
  { name: "Software & Application Development", description: "Custom software solutions" },
  { name: "Migration Services", description: "Cloud and data migration" },
  { name: "HR & Staffing Services", description: "Talent acquisition and management" },
  { name: "ERP Services", description: "Enterprise resource planning solutions" },
  { name: "Project Management", description: "Agile and waterfall methodologies" },
  { name: "Product Management", description: "Product lifecycle management" },
  { name: "Compliance Services", description: "Regulatory and compliance solutions" },
  { name: "Enterprise Services", description: "Scalable enterprise solutions" },
  { name: "Consulting & Advisory Services", description: "Strategic business consulting" },
  { name: "DataOps & DevOps", description: "Data and development operations" },
]

export function Header() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 w-full bg-[#1C2841] border-b border-[#1C2841] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          {/* Logo with subtitle */}
          <Link href="/" className="flex flex-col items-start flex-shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-white">CWBS</div>
            <div className="text-xs text-white/70 font-light tracking-wide hidden sm:block">
              Corporate World Business Solutions
            </div>
          </Link>

          {/* Navigation - centered on tablet+ */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center gap-4 lg:gap-8">
            <Link
              href="/"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm lg:text-base"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white hover:text-white/80 transition-colors font-medium text-sm lg:text-base">
                  Services
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 sm:w-96">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {services.slice(0, 4).map((service) => (
                    <Link key={service.name} href="/services" className="p-3 hover:bg-muted transition-colors">
                      <div className="font-semibold text-sm text-foreground">{service.name}</div>
                      <div className="text-xs text-muted-foreground">{service.description}</div>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border p-3">
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-[#1C2841] hover:text-[#1C2841]/80 transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm lg:text-base"
            >
              About
            </Link>

            <Link
              href="/courses"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm lg:text-base"
            >
              Courses
            </Link>

            {/*
            Workshops nav item (commented out per client request). To re-enable, remove the surrounding comment markers.
            <Link
              href="/workshops"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm lg:text-base"
            >
              Workshops
            </Link>
            */}
            </nav>
          </div>

          {/* Contact Button */}
          <Button
            onClick={() => setContactOpen(true)}
            className="bg-white text-[#1C2841] hover:bg-white/90 px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base flex-shrink-0"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Spacer below fixed header to increase content gap */}
      <div className="h-8 sm:h-10" />

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    inquiry: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to send")
      }

      alert("Thank you for your inquiry! We will contact you soon.")
      setFormData({ name: "", contact: "", subject: "", inquiry: "" })
      onOpenChange(false)
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-md bg-white border-2 border-[#1C2841] shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1C2841]">Get in Touch</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-[#1C2841]">Name</label>
            <Input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1 border-[#1C2841]/30 focus:border-[#1C2841]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-[#1C2841]">Contact</label>
            <Input
              type="email"
              placeholder="Email or phone"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
              className="mt-1 border-[#1C2841]/30 focus:border-[#1C2841]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-[#1C2841]">Subject</label>
            <Input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="mt-1 border-[#1C2841]/30 focus:border-[#1C2841]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-[#1C2841]">Describe Your Inquiry</label>
            <Textarea
              placeholder="Tell us about your inquiry..."
              value={formData.inquiry}
              onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
              required
              className="mt-1 min-h-24 border-[#1C2841]/30 focus:border-[#1C2841]"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1C2841] text-white hover:bg-[#1C2841]/90 font-semibold"
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

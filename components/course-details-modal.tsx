"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@/components/ui/dialog"

interface CourseDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  course: {
    title: string
    duration: string
    mode: string
    overview: string
    curriculum: string[]
    outcomes: string
    prerequisites?: string
  }
}

export function CourseDetailsModal({
  isOpen,
  onClose,
  course,
}: CourseDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border-2 border-[#1C2841] shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1C2841]">{course.title}</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-4 space-y-6">
              <div className="space-y-2">
                <div className="font-semibold">Duration:</div>
                <div className="text-sm text-muted-foreground">{course.duration}</div>
                <div className="font-semibold">Mode:</div>
                <div className="text-sm text-muted-foreground">{course.mode}</div>
              </div>
              
              <div className="space-y-2">
                <div className="font-semibold">Overview:</div>
                <div className="text-sm text-muted-foreground">{course.overview}</div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold">What You'll Learn:</div>
                <ul className="list-disc pl-5 space-y-2">
                  {course.curriculum.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <div className="font-semibold">Outcome:</div>
                <div className="text-sm text-muted-foreground">{course.outcomes}</div>
              </div>

              {course.prerequisites && (
                <div className="space-y-2">
                  <div className="font-semibold">Prerequisites:</div>
                  <div className="text-sm text-muted-foreground">{course.prerequisites}</div>
                </div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

type TabType = "what" | "how"

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("what")

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset to first tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab("what")
    }
  }, [isOpen])

  if (!isOpen) return null

  const tabs: { id: TabType; label: string }[] = [
    { id: "what", label: "WHAT?" },
    { id: "how", label: "HOW?" },
    { id: "why", label: "WHY?" },
    { id: "who", label: "WHO?" },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border-2 border-foreground shadow-[4px_4px_0px_0px] shadow-foreground max-w-lg w-full mx-4 max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Tabs navigation */}
          <div className="flex gap-6 mb-6 font-mono text-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  transition-colors pb-1
                  ${activeTab === tab.id 
                    ? "text-foreground font-bold border-b-2 border-foreground" 
                    : "text-foreground/40 hover:text-foreground/60"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "what" && (
            <div className="space-y-6">
              <p className="text-foreground font-mono leading-relaxed">
                welcome to my mushroom garden!!! these are some fun mushrooms that I've been learning about over the past little while.
              </p>

              <p className="text-foreground font-mono leading-relaxed text-sm">
                click and drag to explore the garden :~) if you want to see them grow again, click the button on the bottom left!
              </p>
            </div>
          )}

          {activeTab === "how" && (
            <div className="space-y-6">
              <p className="text-foreground font-mono leading-relaxed">
                I built this on Vercel and Replit!!! a fun little project so I could (partially) learn how to vibe code.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

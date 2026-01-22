"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

type TabType = "what" | "how" | "why" | "who"

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
                Mushroom Garden is a whimsical exploration of fungi, featuring cute kawaii-style mushrooms scattered across a lush forest floor.
              </p>

              <div className="relative bg-muted/30 border border-border rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-4xl font-bold text-foreground/80 font-sans">Have Fun!</p>
                  </div>
                </div>
              </div>

              <p className="text-foreground font-mono leading-relaxed text-sm">
                Click and drag to explore the garden. Click on any mushroom to learn more about it. If you want to see them grow again, restart the sprout.
              </p>
            </div>
          )}

          {activeTab === "how" && (
            <div className="space-y-6">
              <p className="text-foreground font-mono leading-relaxed">
                The garden is built with care and attention to detail, using modern web technologies to bring these charming fungi to life.
              </p>

              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-mono font-bold text-foreground mb-2">Explore</h3>
                  <p className="font-mono text-sm text-foreground/80">Click and drag anywhere on the screen to pan around the garden. The forest extends in all directions!</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-mono font-bold text-foreground mb-2">Discover</h3>
                  <p className="font-mono text-sm text-foreground/80">Click on any mushroom to reveal its name, species, and a fun fact. Each mushroom has its own personality!</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-mono font-bold text-foreground mb-2">Restart</h3>
                  <p className="font-mono text-sm text-foreground/80">Use the Restart Sprout button to watch all the mushrooms grow from the ground again.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="space-y-6">
              <p className="text-foreground font-mono leading-relaxed">
                Mushrooms are magical. They connect forests underground, break down the old to make way for the new, and remind us that beauty often grows in unexpected places.
              </p>

              <div className="relative bg-muted/30 border border-border rounded-lg overflow-hidden p-6">
                <blockquote className="font-mono text-foreground/80 italic text-center">
                  &quot;The mushroom is the elf of plants, at evening it is not, at morning in a truffled hut it stands upon the spot.&quot;
                </blockquote>
                <p className="font-mono text-sm text-foreground/60 text-center mt-4">— Emily Dickinson</p>
              </div>

              <p className="text-foreground font-mono leading-relaxed text-sm">
                This garden was created to bring a moment of calm and wonder. In our busy digital world, sometimes we need a quiet forest to wander through.
              </p>
            </div>
          )}

          {activeTab === "who" && (
            <div className="space-y-6">
              <p className="text-foreground font-mono leading-relaxed">
                Mushroom Garden was crafted with love by a team of fungi enthusiasts and pixel pushers.
              </p>

              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-mono font-bold text-foreground mb-1">Design & Development</h3>
                  <p className="font-mono text-sm text-foreground/80">Built with Next.js, Tailwind CSS, and a sprinkle of woodland magic.</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-mono font-bold text-foreground mb-1">Inspiration</h3>
                  <p className="font-mono text-sm text-foreground/80">Kawaii mushroom art, forest walks, and the quiet wisdom of mycelium networks.</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-mono font-bold text-foreground mb-1">Special Thanks</h3>
                  <p className="font-mono text-sm text-foreground/80">To the mushrooms themselves, for being endlessly fascinating little organisms.</p>
                </div>
              </div>

              <p className="text-foreground font-mono leading-relaxed text-sm text-center">
                Made with care, 2026
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

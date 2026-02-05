"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

type InfoModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
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

  if (!isOpen) return null

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
          <div className="space-y-6">
            <p className="text-foreground font-sans leading-relaxed">
              Welcome to my mushroom garden!!! These are some fun mushrooms that I've been learning about over the past little while.
            </p>

            <p className="text-foreground font-sans leading-relaxed text-sm">
              Click and drag to explore the garden :~) if you want to see them grow again, click the button on the bottom left!
            </p>

            <p className="text-foreground font-sans leading-relaxed text-sm">
              Last November, I took a quick trip back home to Vancouver where I did a fun mushroom foraging workshop. We went around UBC Spirit Park and spent the morning learning about different types of mushrooms. This site is a way for me to retain the knowledge that I learnt in a fun and whimsical way!!! 🍄✨🍄✨🍄🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

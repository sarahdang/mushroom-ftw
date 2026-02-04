"use client"

import React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Mushroom, type MushroomVariant } from "@/components/mushroom"
import { ForestBackground } from "@/components/forest-background"
import { InfoModal } from "@/components/info-modal"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

interface MushroomData {
  variant: MushroomVariant
  name: string
  description: string
  fact: string
  position: { x: number; y: number }
  size: "sm" | "md" | "lg"
}

const mushrooms: MushroomData[] = [
  {
    variant: "amanita",
    name: "Fly Agaric",
    description: "The iconic red-capped mushroom",
    fact: "Despite its fairy tale appearance, this mushroom has been used in traditional ceremonies across many cultures for thousands of years.",
    position: { x: 8, y: 10 },
    size: "lg"
  },
  {
    variant: "chanterelle",
    name: "Golden Chanterelle",
    description: "A prized culinary treasure",
    fact: "These golden beauties smell faintly of apricots and are beloved by chefs around the world for their delicate, peppery flavor.",
    position: { x: 35, y: 5 },
    size: "md"
  },
  {
    variant: "porcini",
    name: "King Bolete",
    description: "The mushroom royalty",
    fact: "Known as 'porcini' in Italy, these meaty mushrooms can grow incredibly large - some specimens weigh over 2 pounds!",
    position: { x: 65, y: 12 },
    size: "lg"
  },
  {
    variant: "oyster",
    name: "Oyster Mushroom",
    description: "Delicate shelf dweller",
    fact: "These mushrooms are nature's recyclers - they can break down pollutants and have even been used to clean up oil spills!",
    position: { x: 88, y: 8 },
    size: "md"
  },
  {
    variant: "morel",
    name: "Morel",
    description: "The honeycomb hunter's prize",
    fact: "Morel hunters guard their secret spots fiercely! These elusive mushrooms can sell for over $50 per pound when in season.",
    position: { x: 18, y: 32 },
    size: "md"
  },
  {
    variant: "shimeji",
    name: "Beech Mushroom",
    description: "A clustered family",
    fact: "These sociable mushrooms always grow in groups. In Japan, they symbolize prosperity and are given as gifts for good fortune.",
    position: { x: 50, y: 28 },
    size: "sm"
  },
  {
    variant: "enoki",
    name: "Enoki",
    description: "Delicate snow puffs",
    fact: "Wild enoki look completely different from cultivated ones! In nature, they have brown caps and shorter stems.",
    position: { x: 78, y: 35 },
    size: "md"
  },
  {
    variant: "button",
    name: "Button Mushroom",
    description: "The friendly familiar",
    fact: "This humble mushroom is actually the same species as cremini and portobello - just harvested at different stages of growth!",
    position: { x: 5, y: 55 },
    size: "sm"
  },
  {
    variant: "honey",
    name: "Honey Fungus",
    description: "The forest giant",
    fact: "One honey fungus in Oregon spans 2,385 acres and is estimated to be 2,400 years old - making it one of the largest organisms on Earth!",
    position: { x: 30, y: 52 },
    size: "lg"
  },
  {
    variant: "coral",
    name: "Pink Coral",
    description: "Soft and blushing",
    fact: "Despite looking like ocean coral, these pretty pink mushrooms grow on forest floors and are completely terrestrial.",
    position: { x: 58, y: 48 },
    size: "md"
  },
  {
    variant: "parasol",
    name: "Parasol Mushroom",
    description: "The elegant umbrella",
    fact: "These graceful giants can grow up to 16 inches tall! Foragers prize them for their delicious, meat-like texture when cooked.",
    position: { x: 85, y: 55 },
    size: "lg"
  },
  {
    variant: "truffle",
    name: "Black Truffle",
    description: "Underground treasure",
    fact: "Truffles can cost up to $3,000 per pound! Specially trained pigs and dogs are used to sniff out these buried delicacies.",
    position: { x: 12, y: 75 },
    size: "sm"
  },
  {
    variant: "amanita",
    name: "Forest Jewel",
    description: "A spotted beauty",
    fact: "The compounds in this mushroom have inspired scientists researching treatments for various neurological conditions.",
    position: { x: 42, y: 72 },
    size: "md"
  },
  {
    variant: "chanterelle",
    name: "Summer Gold",
    description: "Sunshine in mushroom form",
    fact: "Chanterelles form special relationships with trees - they trade nutrients in a partnership that benefits the entire forest.",
    position: { x: 70, y: 78 },
    size: "sm"
  },
  {
    variant: "button",
    name: "Meadow Button",
    description: "A classic favorite",
    fact: "These versatile mushrooms are grown in more than 70 countries and make up about 40% of all mushrooms consumed globally.",
    position: { x: 92, y: 75 },
    size: "md"
  },
  {
    variant: "oyster",
    name: "Pearl Oyster",
    description: "Cascading shelves",
    fact: "Oyster mushrooms are carnivorous! They can trap and digest tiny roundworms to supplement their nitrogen intake.",
    position: { x: 25, y: 88 },
    size: "lg"
  },
  {
    variant: "coral",
    name: "Blush Cap",
    description: "Gentle and soft",
    fact: "The soft pink color of these mushrooms comes from natural pigments that have potential uses in textile dyeing.",
    position: { x: 55, y: 92 },
    size: "sm"
  },
  {
    variant: "porcini",
    name: "Forest Emperor",
    description: "Majestic and bold",
    fact: "In some European countries, foraging for porcini is regulated - you need a license and can only pick a certain amount per day!",
    position: { x: 82, y: 90 },
    size: "md"
  },
]

export default function MushroomGarden() {
  const [selectedMushroom, setSelectedMushroom] = useState<MushroomData | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const [hasGrown, setHasGrown] = useState(false)
  const [growKey, setGrowKey] = useState(0)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const startPos = useRef({ x: 0, y: 0 })
  const scrollPos = useRef({ x: 0, y: 0 })

  // Trigger sway animation after grow animation completes
  useEffect(() => {
    // Wait for all mushrooms to finish growing (last mushroom starts at index 17 * 0.1s = 1.7s + 0.8s animation = 2.5s)
    const timer = setTimeout(() => {
      setHasGrown(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [growKey])

  const handleRestartSprout = () => {
    setHasGrown(false)
    setGrowKey(prev => prev + 1)
    setSelectedMushroom(null)
  }

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('[role="button"]')) {
      return
    }
    setIsDragging(true)
    setHasDragged(false)
    startPos.current = { x: e.clientX, y: e.clientY }
    scrollPos.current = { x: window.scrollX, y: window.scrollY }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    
    const dx = e.clientX - startPos.current.x
    const dy = e.clientY - startPos.current.y
    
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      setHasDragged(true)
    }
    
    window.scrollTo(
      scrollPos.current.x - dx,
      scrollPos.current.y - dy
    )
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'none'
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = ''
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const handleMushroomClick = (mushroom: MushroomData) => {
    if (hasDragged) return
    setSelectedMushroom(mushroom)
  }

  const closePanel = () => {
    setSelectedMushroom(null)
  }

  return (
    <main 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className={`relative min-w-[200vw] min-h-[200vh] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
    >
      {/* Forest background */}
      <ForestBackground />

      {/* Sticky title - top right */}
      <div className="fixed top-5 right-5 z-50">
        <div className="bg-card border-2 border-foreground shadow-[3px_3px_0px_0px] shadow-foreground px-4 py-2">
          <h1 className="font-sans text-sm font-bold text-foreground tracking-wide uppercase">Magical Mushroom Forest</h1>
        </div>
      </div>

      {/* Restart sprout button - bottom left */}
      <button
        onClick={handleRestartSprout}
        className="fixed bottom-5 left-5 z-50 bg-card border-2 border-foreground shadow-[3px_3px_0px_0px] shadow-foreground px-4 py-2 font-sans text-xs font-bold text-foreground tracking-wide hover:bg-muted transition-colors active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px] uppercase"
      >
        Sprout Again
      </button>

      {/* Info button - bottom right */}
      <button
        onClick={() => setIsInfoOpen(true)}
        className="fixed bottom-5 right-5 z-50 bg-card border-2 border-foreground shadow-[3px_3px_0px_0px] shadow-foreground px-4 py-2 font-sans text-xs font-bold text-foreground tracking-wide hover:bg-muted transition-colors active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px] uppercase"
      >
        Discover More
      </button>

      {/* Info modal */}
      <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      {/* Mushrooms scattered across the garden */}
      <div className="relative z-10 min-w-[200vw] min-h-[200vh]">
        {mushrooms.map((mushroom, index) => (
          <div
            key={`${mushroom.name}-${index}-${growKey}`}
            className={`absolute ${hasGrown ? 'animate-sway' : 'animate-grow-in'}`}
            style={{
              left: `${mushroom.position.x}%`,
              top: `${mushroom.position.y}%`,
              animationDelay: hasGrown ? `${index * 0.2}s` : `${index * 0.1}s`,
              animationDuration: hasGrown ? `${3 + (index % 3)}s` : '0.8s',
              transform: "translateX(-50%)"
            }}
          >
            <Mushroom
              variant={mushroom.variant}
              name={mushroom.name}
              description={mushroom.description}
              size={mushroom.size}
              isSelected={selectedMushroom?.name === mushroom.name && selectedMushroom?.position.x === mushroom.position.x}
              onClick={() => handleMushroomClick(mushroom)}
            />
          </div>
        ))}
      </div>

      {/* Info panel - fixed position */}
      <div
        className={`
          fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
          ${selectedMushroom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
        `}
      >
        <Card className="bg-card/95 backdrop-blur-md border-border/50 shadow-2xl max-w-md mx-4">
          <CardContent className="p-5 pr-12 relative">
            <button
              onClick={closePanel}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors text-foreground/60 hover:text-foreground"
              aria-label="Close info panel"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-foreground">{selectedMushroom?.name}</h2>
            <p className="text-muted-foreground text-sm mt-1">{selectedMushroom?.description}</p>
            <p className="text-foreground/80 text-sm mt-3 leading-relaxed">{selectedMushroom?.fact}</p>
          </CardContent>
        </Card>
      </div>

      
    </main>
  )
}

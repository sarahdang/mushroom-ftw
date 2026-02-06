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
  image?: string
}

const mushrooms: MushroomData[] = [
  {
    variant: "amanita",
    name: "fly agaric",
    description: "the iconic red-capped mushroom",
    fact: "despite its fairy tale appearance, this mushroom has been used in traditional ceremonies across many cultures for thousands of years",
    position: { x: 8, y: 10 },
    size: "lg"
  },
  {
    variant: "chanterelle",
    name: "golden chanterelle",
    description: "yummmmmy",
    fact: "commonly featured in dishes like creamy risotto, pasta with parmesan, sautéed on toast, or omelets",
    position: { x: 35, y: 5 },
    size: "md"
  },
  {
    variant: "porcini",
    name: "king bolete",
    description: "aka porcinis",
    fact: "these meaty mushrooms can grow incredibly large - some specimens weigh over 2 pounds!",
    position: { x: 65, y: 12 },
    size: "lg"
  },
  {
    variant: "oyster",
    name: "pleurotus ostreatus",
    description: "delicate shelf dweller",
    fact: "popular edible mushroom found in temperate and subtropical forests around the world. these look funny :3",
    position: { x: 88, y: 8 },
    size: "md"
  },
  {
    variant: "morel",
    name: "Morel",
    description: "funny looking things",
    fact: "expensive but yummy mushrooms!",
    position: { x: 18, y: 32 },
    size: "md"
  },
  {
    variant: "shimeji",
    name: "beech mushroom",
    description: "often known as Shimeji or clamshell mushrooms",
    fact: "these mushrooms always grow in groups. they kill in a bibimpbap",
    position: { x: 50, y: 28 },
    size: "sm"
  },
  {
    variant: "enoki",
    name: "enoki",
    description: "flammulina filiformis",
    fact: "GOATED MUSHROOMS!!! widely cultivated as an edible mushroom in East Asia and kills especially in hotpot",
    position: { x: 78, y: 35 },
    size: "md"
  },
  {
    variant: "button",
    name: "button mushroom",
    description: "most common mushroom variety",
    fact: "this humble mushroom is actually the same species as cremini and portobello - just harvested at different stages of growth!",
    position: { x: 5, y: 55 },
    size: "sm"
  },
  {
    variant: "honey",
    name: "honey fungus",
    description: "the forest giant",
    fact: "one honey fungus in Oregon spans 2,385 acres and is estimated to be 2,400 years old - making it one of the largest organisms on Earth",
    position: { x: 30, y: 52 },
    size: "lg"
  },
  {
    variant: "coral",
    name: "pink coral",
    description: "ramaria botrytis",
    fact: "looks like ocean coral :O",
    position: { x: 58, y: 48 },
    size: "md"
  },
  {
    variant: "parasol",
    name: "parasol mushroom",
    description: "macrolepiota procera",
    fact: "found solitary or in groups and fairy rings in pastures and occasionally in woodland",
    position: { x: 85, y: 55 },
    size: "lg"
  },
  {
    variant: "truffle",
    name: "black truffle",
    description: "another yummy mushroom",
    fact: "I just love anything truffle",
    position: { x: 12, y: 75 },
    size: "sm"
  },
  {
    variant: "button",
    name: "meadow button",
    description: "a classic",
    fact: "these mushrooms are grown in more than 70 countries and make up about 40% of all mushrooms consumed globally",
    position: { x: 92, y: 75 },
    size: "md"
  },
  {
    variant: "oyster",
    name: "pearl oyster",
    description: "cascading shelves",
    fact: "they are carnivorous! they can trap and digest tiny roundworms to supplement their nitrogen intake :O",
    position: { x: 25, y: 88 },
    size: "lg"
  },
  {
    variant: "coral",
    name: "blush cap",
    description: "blusher",
    fact: "the flesh of the mushroom is white and turns pink when bruised or exposed to air ^___^ how cute",
    position: { x: 55, y: 92 },
    size: "sm"
  },
  {
    variant: "amanita",
    name: "horny mushroom",
    description: "a spicy little guy",
    fact: "this mushroom seems to have a lot of personality! looks like it's from a pixelated world.",
    position: { x: 45, y: 60 },
    size: "md",
    image: "/horny_mushroom.png"
  },
  {
    variant: "amanita",
    name: "super mushroom",
    description: "makes you big",
    fact: "found in many pipes and blocks across the mushroom kingdom. very iconic!",
    position: { x: 75, y: 85 },
    size: "md",
    image: "/mario_mushroom.png"
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

      {/* Sticky top-left title */}
      <div className="fixed top-8 left-8 z-50 space-y-4 pointer-events-none">
        <img 
          src="/title.png" 
          alt="Sarah's mushroom garden" 
          className="h-12 md:h-16 w-auto object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(81%) sepia(9%) saturate(464%) hue-rotate(182deg) brightness(88%) contrast(87%)' }}
        />
        <p className="font-sans text-xs leading-relaxed text-white pointer-events-auto max-w-sm">
          Last November, I took a quick trip back home to Vancouver where I participated in a mushroom foraging class. We walked around UBC's Pacific Spirit Park and I learnt about several different types of mushrooms. This site is a way for me to retain the knowledge that I learnt in a fun and whimsical way!!! ⋆.ೃ࿔.𖥔˖*:･༄ 𖦹🍄🌟
        </p>
      </div>

      {/* LEARN MORE - top right */}
      <div className="fixed top-8 right-8 z-50 text-right">
        <button
          onClick={() => setIsInfoOpen(!isInfoOpen)}
          className="font-sans text-xs font-bold text-white tracking-widest uppercase hover:opacity-70 transition-colors"
        >
          {isInfoOpen ? "CLOSE" : "LEARN MORE"}
        </button>
        <div 
          className={`
            mt-4 max-w-xs transition-all duration-500 ease-in-out overflow-hidden
            ${isInfoOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="space-y-4 p-4 bg-black/50 rounded-lg backdrop-blur-sm border border-white/10 text-left">
            <p className="text-white font-sans text-[10px] leading-relaxed uppercase">
              Welcome to my mushroom garden!!! These are some fun mushrooms that I've been learning about over the past little while.
            </p>
            <p className="text-white font-sans text-[10px] leading-relaxed uppercase">
              Click and drag to explore the garden :~) if you want to see them grow again, click "RESTART SPROUT" on the bottom left!
            </p>
          </div>
        </div>
      </div>

      {/* RESTART SPROUT - bottom left */}
      <button
        onClick={handleRestartSprout}
        className="fixed bottom-8 left-8 z-50 font-sans text-xs font-bold text-white tracking-widest hover:opacity-70 transition-colors uppercase"
      >
        RESTART SPROUT
      </button>

      {/* COPYRIGHT - bottom right */}
      <div className="fixed bottom-8 right-8 z-50">
        <p className="font-sans text-xs font-bold text-white tracking-widest uppercase">
          Made with love from <a href="https://www.sarahdang.com" className="underline underline-offset-4 hover:opacity-70 transition-colors">Sarah</a> © 2026
        </p>
      </div>

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
            <div className="relative group">
                <Mushroom
                  variant={mushroom.variant}
                  name={mushroom.name}
                  description={mushroom.description}
                  size={mushroom.size}
                  image={mushroom.image}
                  isSelected={selectedMushroom?.name === mushroom.name && selectedMushroom?.position.x === mushroom.position.x}
                  onClick={() => handleMushroomClick(mushroom)}
                />
                
                {/* Inline mushroom info panel - appears next to the mushroom */}
                {selectedMushroom?.name === mushroom.name && selectedMushroom?.position.x === mushroom.position.x && (
                  <div className="absolute left-full ml-12 top-1/2 -translate-y-1/2 z-[60] w-64 pointer-events-auto">
                    <div className="space-y-3 p-4 bg-black/50 rounded-lg backdrop-blur-md border border-white/20 shadow-xl animate-grow-in text-left">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-sans font-bold text-white leading-tight">
                        {mushroom.name}
                      </h2>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          closePanel();
                        }}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-white/80 font-sans text-[10px] uppercase tracking-wider">
                      {mushroom.description}
                    </p>
                    <p className="text-white font-sans text-[10px] leading-relaxed uppercase">
                      {mushroom.fact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      
    </main>
  )
}

"use client"

import React from "react"

import { cn } from "@/lib/utils"

export type MushroomVariant =
  | "amanita" | "chanterelle" | "porcini" | "oyster"
  | "morel" | "shimeji" | "enoki" | "button"
  | "honey" | "coral" | "parasol" | "truffle"

interface MushroomProps {
  variant: MushroomVariant
  name: string
  description: string
  isSelected?: boolean
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  size?: "sm" | "md" | "lg"
  image?: string
}

const mushroomColors: Record<MushroomVariant, { cap: string; stem: string; spots?: string; details?: string }> = {
  "amanita": {
    cap: "#c44536",
    stem: "#f5ebe0",
    spots: "#f5ebe0",
    details: "#9e3a2f"
  },
  "chanterelle": {
    cap: "#e9c46a",
    stem: "#dda15e",
    details: "#bc6c25"
  },
  "porcini": {
    cap: "#8b5e3c",
    stem: "#f5ebe0",
    details: "#6b4423"
  },
  "oyster": {
    cap: "#d4c4b5",
    stem: "#e8ddd4",
    details: "#b8a99a"
  },
  "morel": {
    cap: "#7c6354",
    stem: "#d4c4a8",
    details: "#5c473a"
  },
  "shimeji": {
    cap: "#c9a987",
    stem: "#f5ebe0",
    details: "#a88b6b"
  },
  "enoki": {
    cap: "#f5ebe0",
    stem: "#f5ebe0",
    details: "#d4c4b5"
  },
  "button": {
    cap: "#d4a574",
    stem: "#f5ebe0",
    details: "#b88b5a"
  },
  "honey": {
    cap: "#d4943a",
    stem: "#f5ebe0",
    spots: "#f5ebe0",
    details: "#b57a2a"
  },
  "coral": {
    cap: "#e8a4a4",
    stem: "#f5dada",
    details: "#d08080"
  },
  "parasol": {
    cap: "#c9b896",
    stem: "#f5ebe0",
    details: "#a89878"
  },
  "truffle": {
    cap: "#4a3f35",
    stem: "#5c4f43",
    details: "#3a322a"
  }
}

const sizeClasses = {
  sm: "w-16 h-20",
  md: "w-24 h-32",
  lg: "w-32 h-44"
}

export function Mushroom({ variant, name, isSelected, onClick, className, style, size = "md", image }: MushroomProps) {
  const colors = mushroomColors[variant]

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center cursor-pointer transition-all duration-300 ease-out focus:outline-none group",
        "hover:scale-110",
        isSelected && "scale-115",
        sizeClasses[size],
        className
      )}
      style={style}
      aria-label={`Select ${name}`}
      aria-pressed={isSelected}
    >
      {/* Glow effect when selected */}
      {isSelected && (
        <div
          className="absolute inset-0 -m-4 rounded-full animate-glow-soft"
          style={{ backgroundColor: image ? "#ffffff" : colors.cap, opacity: 0.3 }}
        />
      )}

      {image ? (
        <img src={image} alt={name} className="w-full h-full object-contain drop-shadow-md" />
      ) : (
        <svg viewBox="0 0 100 130" className="w-full h-full drop-shadow-md">
          {/* Different mushroom shapes based on variant */}
          {variant === "amanita" && (
          <>
            {/* Stem */}
            <path
              d="M40 70 Q38 100 42 120 L58 120 Q62 100 60 70"
              fill={colors.stem}
              stroke={colors.details}
              strokeWidth="1"
            />
            {/* Cap */}
            <ellipse cx="50" cy="50" rx="38" ry="28" fill={colors.cap} />
            <ellipse cx="50" cy="52" rx="36" ry="24" fill={colors.cap} />
            {/* Spots */}
            <circle cx="35" cy="42" r="5" fill={colors.spots} />
            <circle cx="55" cy="38" r="6" fill={colors.spots} />
            <circle cx="70" cy="48" r="4" fill={colors.spots} />
            <circle cx="45" cy="55" r="4" fill={colors.spots} />
            <circle cx="62" cy="58" r="3" fill={colors.spots} />
            {/* Face */}
            <circle cx="42" cy="48" r="2" fill="#3d3d3d" />
            <circle cx="58" cy="48" r="2" fill="#3d3d3d" />
            <path d="M46 56 Q50 60 54 56" stroke="#3d3d3d" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "chanterelle" && (
          <>
            {/* Stem - funnel shape */}
            <path
              d="M42 55 Q35 85 38 120 L62 120 Q65 85 58 55"
              fill={colors.stem}
              stroke={colors.details}
              strokeWidth="1"
            />
            {/* Cap - wavy funnel */}
            <path
              d="M15 55 Q25 35 50 30 Q75 35 85 55 Q80 60 70 58 Q60 62 50 58 Q40 62 30 58 Q20 60 15 55"
              fill={colors.cap}
            />
            {/* Ridges */}
            <path d="M42 55 L44 38" stroke={colors.details} strokeWidth="1" opacity="0.5" />
            <path d="M50 55 L50 35" stroke={colors.details} strokeWidth="1" opacity="0.5" />
            <path d="M58 55 L56 38" stroke={colors.details} strokeWidth="1" opacity="0.5" />
            {/* Face */}
            <circle cx="42" cy="45" r="2" fill="#3d3d3d" />
            <circle cx="58" cy="45" r="2" fill="#3d3d3d" />
            <path d="M46 52 Q50 56 54 52" stroke="#3d3d3d" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "porcini" && (
          <>
            {/* Stem - thick and bulbous */}
            <path
              d="M35 65 Q30 90 35 120 L65 120 Q70 90 65 65"
              fill={colors.stem}
              stroke={colors.details}
              strokeWidth="1"
            />
            {/* Cap - round and plump */}
            <ellipse cx="50" cy="45" rx="35" ry="25" fill={colors.cap} />
            {/* Shading */}
            <ellipse cx="50" cy="50" rx="28" ry="15" fill={colors.details} opacity="0.3" />
            {/* Face */}
            <circle cx="40" cy="42" r="2" fill="#f5ebe0" />
            <circle cx="60" cy="42" r="2" fill="#f5ebe0" />
            <path d="M45 52 Q50 56 55 52" stroke="#f5ebe0" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "oyster" && (
          <>
            {/* Multiple overlapping caps */}
            <ellipse cx="55" cy="70" rx="30" ry="18" fill={colors.cap} transform="rotate(-15 55 70)" />
            <ellipse cx="45" cy="55" rx="28" ry="16" fill={colors.stem} transform="rotate(10 45 55)" />
            <ellipse cx="50" cy="40" rx="32" ry="18" fill={colors.cap} transform="rotate(-5 50 40)" />
            {/* Gills */}
            <path d="M30 45 L50 60" stroke={colors.details} strokeWidth="1" opacity="0.4" />
            <path d="M40 42 L55 58" stroke={colors.details} strokeWidth="1" opacity="0.4" />
            <path d="M50 40 L60 58" stroke={colors.details} strokeWidth="1" opacity="0.4" />
            {/* Short stem */}
            <path d="M48 75 Q45 95 48 110 L58 110 Q60 95 58 75" fill={colors.stem} />
            {/* Face on top cap */}
            <circle cx="42" cy="38" r="2" fill="#3d3d3d" />
            <circle cx="56" cy="36" r="2" fill="#3d3d3d" />
            <path d="M45 46 Q50 50 55 46" stroke="#3d3d3d" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "morel" && (
          <>
            {/* Stem */}
            <path
              d="M40 75 Q38 100 42 120 L58 120 Q62 100 60 75"
              fill={colors.stem}
              stroke={colors.details}
              strokeWidth="1"
            />
            {/* Honeycomb cap */}
            <ellipse cx="50" cy="50" rx="25" ry="35" fill={colors.cap} />
            {/* Honeycomb pattern */}
            <circle cx="42" cy="35" r="6" fill="none" stroke={colors.details} strokeWidth="2" />
            <circle cx="58" cy="38" r="5" fill="none" stroke={colors.details} strokeWidth="2" />
            <circle cx="50" cy="50" r="6" fill="none" stroke={colors.details} strokeWidth="2" />
            <circle cx="40" cy="55" r="5" fill="none" stroke={colors.details} strokeWidth="2" />
            <circle cx="60" cy="55" r="5" fill="none" stroke={colors.details} strokeWidth="2" />
            <circle cx="50" cy="68" r="5" fill="none" stroke={colors.details} strokeWidth="2" />
            <circle cx="45" cy="25" r="4" fill="none" stroke={colors.details} strokeWidth="2" />
            <circle cx="55" cy="25" r="4" fill="none" stroke={colors.details} strokeWidth="2" />
            {/* Face */}
            <circle cx="44" cy="48" r="2" fill="#f5ebe0" />
            <circle cx="56" cy="48" r="2" fill="#f5ebe0" />
            <ellipse cx="50" cy="58" rx="4" ry="3" fill="#a08070" />
          </>
        )}

        {variant === "shimeji" && (
          <>
            {/* Multiple small mushrooms in cluster */}
            {/* Main one */}
            <path d="M45 50 Q44 80 46 115 L54 115 Q56 80 55 50" fill={colors.stem} />
            <ellipse cx="50" cy="42" rx="15" ry="12" fill={colors.cap} />
            <circle cx="46" cy="40" r="1.5" fill="#3d3d3d" />
            <circle cx="54" cy="40" r="1.5" fill="#3d3d3d" />
            <path d="M48 46 Q50 48 52 46" stroke="#3d3d3d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Left small */}
            <path d="M25 55 Q24 75 26 100 L32 100 Q34 75 33 55" fill={colors.stem} />
            <ellipse cx="29" cy="48" rx="10" ry="8" fill={colors.cap} />
            <circle cx="26" cy="46" r="1" fill="#3d3d3d" />
            <circle cx="32" cy="46" r="1" fill="#3d3d3d" />
            <path d="M28 51 Q29 52 30 51" stroke="#3d3d3d" strokeWidth="1" fill="none" strokeLinecap="round" />
            {/* Right small */}
            <path d="M67 52 Q66 75 68 105 L74 105 Q76 75 75 52" fill={colors.stem} />
            <ellipse cx="71" cy="45" rx="11" ry="9" fill={colors.cap} />
            <circle cx="68" cy="43" r="1" fill="#3d3d3d" />
            <circle cx="74" cy="43" r="1" fill="#3d3d3d" />
            <path d="M70 48 Q71 49 72 48" stroke="#3d3d3d" strokeWidth="1" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "enoki" && (
          <>
            {/* Many thin tall stems with tiny caps */}
            {[20, 30, 40, 50, 60, 70, 80].map((x, i) => (
              <g key={i}>
                <path
                  d={`M${x - 2} ${35 + (i % 3) * 5} Q${x - 1} 80 ${x} 120 L${x + 4} 120 Q${x + 3} 80 ${x + 2} ${35 + (i % 3) * 5}`}
                  fill={colors.stem}
                />
                <ellipse cx={x + 1} cy={30 + (i % 3) * 5} rx="6" ry="5" fill={colors.cap} />
                {i === 3 && (
                  <>
                    <circle cx={x - 1} cy={28} r="1" fill="#3d3d3d" />
                    <circle cx={x + 3} cy={28} r="1" fill="#3d3d3d" />
                    <path d={`M${x - 1} 33 Q${x + 1} 35 ${x + 3} 33`} stroke="#3d3d3d" strokeWidth="1" fill="none" strokeLinecap="round" />
                  </>
                )}
              </g>
            ))}
          </>
        )}

        {variant === "button" && (
          <>
            {/* Stem */}
            <path
              d="M40 60 Q38 90 42 120 L58 120 Q62 90 60 60"
              fill={colors.stem}
              stroke={colors.details}
              strokeWidth="1"
            />
            {/* Simple round cap */}
            <ellipse cx="50" cy="45" rx="30" ry="22" fill={colors.cap} />
            {/* Slight shading */}
            <ellipse cx="50" cy="50" rx="22" ry="12" fill={colors.details} opacity="0.3" />
            {/* Face */}
            <circle cx="42" cy="42" r="2" fill="#3d3d3d" />
            <circle cx="58" cy="42" r="2" fill="#3d3d3d" />
            <path d="M46 52 Q50 56 54 52" stroke="#3d3d3d" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "honey" && (
          <>
            {/* Clustered stems */}
            <path d="M35 55 Q32 85 36 120 L46 120 Q48 85 45 55" fill={colors.stem} />
            <path d="M48 60 Q46 90 50 120 L60 120 Q62 90 58 60" fill={colors.stem} />
            {/* Scaly cap */}
            <ellipse cx="40" cy="42" rx="18" ry="15" fill={colors.cap} />
            <ellipse cx="55" cy="48" rx="16" ry="14" fill={colors.cap} />
            {/* Scales/spots */}
            <circle cx="35" cy="38" r="3" fill={colors.spots} />
            <circle cx="45" cy="35" r="2" fill={colors.spots} />
            <circle cx="50" cy="45" r="2.5" fill={colors.spots} />
            <circle cx="60" cy="42" r="2" fill={colors.spots} />
            {/* Face on main cap */}
            <circle cx="36" cy="40" r="1.5" fill="#3d3d3d" />
            <circle cx="44" cy="40" r="1.5" fill="#3d3d3d" />
            <path d="M38 47 Q40 50 42 47" stroke="#3d3d3d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "coral" && (
          <>
            {/* Stem */}
            <path
              d="M42 65 Q40 95 44 120 L56 120 Q60 95 58 65"
              fill={colors.stem}
              stroke={colors.details}
              strokeWidth="1"
            />
            {/* Soft rounded cap */}
            <ellipse cx="50" cy="48" rx="28" ry="22" fill={colors.cap} />
            {/* Soft detail lines */}
            <path d="M35 55 Q40 50 45 55" stroke={colors.details} strokeWidth="1" opacity="0.4" />
            <path d="M55 55 Q60 50 65 55" stroke={colors.details} strokeWidth="1" opacity="0.4" />
            {/* Face */}
            <circle cx="42" cy="45" r="2" fill="#3d3d3d" />
            <circle cx="58" cy="45" r="2" fill="#3d3d3d" />
            <path d="M46 54 Q50 58 54 54" stroke="#3d3d3d" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "parasol" && (
          <>
            {/* Tall thin stem */}
            <path
              d="M46 55 Q44 90 46 120 L54 120 Q56 90 54 55"
              fill={colors.stem}
              stroke={colors.details}
              strokeWidth="1"
            />
            {/* Wide flat cap */}
            <ellipse cx="50" cy="40" rx="40" ry="18" fill={colors.cap} />
            {/* Ring pattern */}
            <ellipse cx="50" cy="42" rx="30" ry="10" fill="none" stroke={colors.details} strokeWidth="1" opacity="0.5" />
            <ellipse cx="50" cy="44" rx="20" ry="6" fill="none" stroke={colors.details} strokeWidth="1" opacity="0.5" />
            {/* Face */}
            <circle cx="42" cy="38" r="2" fill="#3d3d3d" />
            <circle cx="58" cy="38" r="2" fill="#3d3d3d" />
            <path d="M46 46 Q50 50 54 46" stroke="#3d3d3d" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === "truffle" && (
          <>
            {/* Lumpy irregular shape */}
            <path
              d="M25 65 Q20 50 35 40 Q50 30 65 40 Q80 50 75 65 Q80 80 65 90 Q50 100 35 90 Q20 80 25 65"
              fill={colors.cap}
            />
            {/* Texture bumps */}
            <circle cx="40" cy="55" r="8" fill={colors.details} opacity="0.4" />
            <circle cx="55" cy="50" r="6" fill={colors.details} opacity="0.4" />
            <circle cx="60" cy="70" r="7" fill={colors.details} opacity="0.4" />
            <circle cx="35" cy="75" r="5" fill={colors.details} opacity="0.4" />
            <circle cx="50" cy="65" r="5" fill={colors.details} opacity="0.4" />
            {/* Face */}
            <circle cx="42" cy="58" r="2" fill="#a08070" />
            <circle cx="56" cy="58" r="2" fill="#a08070" />
            <path d="M46 68 Q50 72 54 68" stroke="#a08070" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}
      </svg>
    </button>
  )
}

"use client"

export function ForestBackground() {
  return (
    <div className="absolute inset-0 min-w-[200vw] min-h-[200vh] pointer-events-none overflow-hidden">
      {/* Base grass gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a7c59] via-[#5a8f5c] to-[#3d6b4f]" />

      {/* Lighter patches */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-[#6b9b60] opacity-40 blur-3xl" />
      <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-[#7aab70] opacity-30 blur-3xl" />
      <div className="absolute bottom-[30%] left-[40%] w-72 h-72 rounded-full bg-[#5d9055] opacity-35 blur-3xl" />

      {/* Scattered grass tufts */}
      <svg className="absolute inset-0 min-w-[200vw] min-h-[200vh]" preserveAspectRatio="none">
        {/* Grass patches scattered throughout - extended for 200vw x 200vh */}
        {[
          { x: 50, y: 200 }, { x: 150, y: 350 }, { x: 280, y: 180 }, { x: 400, y: 420 },
          { x: 520, y: 280 }, { x: 680, y: 150 }, { x: 800, y: 380 }, { x: 950, y: 220 },
          { x: 1100, y: 450 }, { x: 1250, y: 300 }, { x: 100, y: 550 }, { x: 320, y: 680 },
          { x: 550, y: 580 }, { x: 780, y: 650 }, { x: 1000, y: 550 }, { x: 1200, y: 700 },
          { x: 200, y: 850 }, { x: 450, y: 920 }, { x: 700, y: 800 }, { x: 900, y: 950 },
          { x: 1150, y: 880 }, { x: 80, y: 1100 }, { x: 350, y: 1200 }, { x: 600, y: 1050 },
          { x: 850, y: 1180 }, { x: 1100, y: 1100 }, { x: 180, y: 1400 }, { x: 500, y: 1350 },
          { x: 750, y: 1480 }, { x: 1000, y: 1300 }, { x: 1250, y: 1450 }, { x: 300, y: 1600 },
          { x: 600, y: 1700 }, { x: 900, y: 1580 }, { x: 1150, y: 1680 }, { x: 120, y: 1850 },
          { x: 420, y: 1950 }, { x: 720, y: 1820 }, { x: 1050, y: 1920 }, { x: 250, y: 2100 },
          // Extended right side
          { x: 1450, y: 200 }, { x: 1600, y: 350 }, { x: 1780, y: 180 }, { x: 1920, y: 420 },
          { x: 2100, y: 280 }, { x: 2280, y: 150 }, { x: 2450, y: 380 }, { x: 2600, y: 220 },
          { x: 1500, y: 550 }, { x: 1700, y: 680 }, { x: 1900, y: 580 }, { x: 2150, y: 650 },
          { x: 2350, y: 550 }, { x: 2550, y: 700 }, { x: 1450, y: 850 }, { x: 1650, y: 920 },
          { x: 1850, y: 800 }, { x: 2050, y: 950 }, { x: 2300, y: 880 }, { x: 2500, y: 1000 },
          { x: 1500, y: 1100 }, { x: 1750, y: 1200 }, { x: 2000, y: 1050 }, { x: 2250, y: 1180 },
          { x: 2500, y: 1100 }, { x: 1550, y: 1400 }, { x: 1800, y: 1350 }, { x: 2100, y: 1480 },
          { x: 2350, y: 1300 }, { x: 2600, y: 1450 }, { x: 1480, y: 1700 }, { x: 1720, y: 1580 },
          { x: 1980, y: 1680 }, { x: 2200, y: 1850 }, { x: 2450, y: 1750 }, { x: 2650, y: 1900 },
        ].map((pos, i) => (
          <g
            key={i}
            className="animate-grass-sway"
            style={{ animationDelay: `${(i * 0.1) % 2}s`, transformOrigin: `${pos.x}px ${pos.y + 20}px` }}
          >
            <path
              d={`M${pos.x} ${pos.y + 20} Q${pos.x - 3} ${pos.y + 10} ${pos.x - 5} ${pos.y}`}
              stroke="#3d6b4f"
              strokeWidth="2"
              fill="none"
            />
            <path
              d={`M${pos.x} ${pos.y + 20} Q${pos.x + 1} ${pos.y + 8} ${pos.x + 2} ${pos.y - 3}`}
              stroke="#4a7c59"
              strokeWidth="2"
              fill="none"
            />
            <path
              d={`M${pos.x} ${pos.y + 20} Q${pos.x + 4} ${pos.y + 12} ${pos.x + 7} ${pos.y + 2}`}
              stroke="#5a8f5c"
              strokeWidth="2"
              fill="none"
            />
          </g>
        ))}

        {/* Small flowers/clovers scattered */}
        {[
          { x: 120, y: 280 }, { x: 380, y: 520 }, { x: 620, y: 350 }, { x: 900, y: 480 },
          { x: 1150, y: 250 }, { x: 250, y: 750 }, { x: 550, y: 850 }, { x: 850, y: 720 },
          { x: 1050, y: 900 }, { x: 180, y: 1150 }, { x: 480, y: 1080 }, { x: 780, y: 1250 },
          { x: 1100, y: 1180 }, { x: 350, y: 1450 }, { x: 680, y: 1550 }, { x: 980, y: 1400 },
          { x: 200, y: 1750 }, { x: 550, y: 1880 }, { x: 880, y: 1750 }, { x: 1200, y: 1900 },
          // Extended right side
          { x: 1450, y: 280 }, { x: 1700, y: 520 }, { x: 1950, y: 350 }, { x: 2200, y: 480 },
          { x: 2450, y: 250 }, { x: 1550, y: 750 }, { x: 1800, y: 850 }, { x: 2100, y: 720 },
          { x: 2350, y: 900 }, { x: 1500, y: 1150 }, { x: 1780, y: 1080 }, { x: 2050, y: 1250 },
          { x: 2300, y: 1180 }, { x: 1600, y: 1450 }, { x: 1900, y: 1550 }, { x: 2200, y: 1400 },
          { x: 2500, y: 1750 }, { x: 1700, y: 1880 }, { x: 2050, y: 1750 }, { x: 2400, y: 1900 },
        ].map((pos, i) => (
          <g key={`flower-${i}`}>
            {i % 3 === 0 ? (
              // Small flower
              <>
                <circle cx={pos.x} cy={pos.y} r="3" fill="#f5ebe0" opacity="0.7" />
                <circle cx={pos.x - 3} cy={pos.y - 2} r="2" fill="#f5ebe0" opacity="0.6" />
                <circle cx={pos.x + 3} cy={pos.y - 2} r="2" fill="#f5ebe0" opacity="0.6" />
                <circle cx={pos.x} cy={pos.y - 4} r="2" fill="#f5ebe0" opacity="0.6" />
                <circle cx={pos.x} cy={pos.y - 1} r="1.5" fill="#e9c46a" />
              </>
            ) : i % 3 === 1 ? (
              // Clover
              <>
                <circle cx={pos.x} cy={pos.y - 4} r="4" fill="#6b9b60" opacity="0.8" />
                <circle cx={pos.x - 4} cy={pos.y} r="4" fill="#5d9055" opacity="0.8" />
                <circle cx={pos.x + 4} cy={pos.y} r="4" fill="#6b9b60" opacity="0.8" />
              </>
            ) : (
              // Small dots/berries
              <>
                <circle cx={pos.x} cy={pos.y} r="2" fill="#c44536" opacity="0.6" />
                <circle cx={pos.x + 5} cy={pos.y + 2} r="1.5" fill="#c44536" opacity="0.5" />
              </>
            )}
          </g>
        ))}

        {/* Fallen leaves */}
        {[
          { x: 200, y: 400 }, { x: 700, y: 600 }, { x: 1100, y: 350 }, { x: 400, y: 900 },
          { x: 900, y: 1100 }, { x: 300, y: 1350 }, { x: 800, y: 1500 }, { x: 1200, y: 1300 },
          { x: 150, y: 1700 }, { x: 600, y: 1900 }, { x: 1000, y: 1800 },
          // Extended right side
          { x: 1500, y: 400 }, { x: 1850, y: 600 }, { x: 2200, y: 350 }, { x: 1650, y: 900 },
          { x: 2050, y: 1100 }, { x: 2400, y: 1350 }, { x: 1750, y: 1500 }, { x: 2150, y: 1300 },
          { x: 2500, y: 1700 }, { x: 1900, y: 1900 }, { x: 2300, y: 1800 },
        ].map((pos, i) => (
          <ellipse
            key={`leaf-${i}`}
            cx={pos.x}
            cy={pos.y}
            rx="8"
            ry="4"
            fill={i % 2 === 0 ? "#b88b5a" : "#d4943a"}
            opacity="0.4"
            transform={`rotate(${30 + i * 25} ${pos.x} ${pos.y})`}
          />
        ))}
      </svg>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3d6b4f]/30 via-transparent to-[#3d6b4f]/30" />
    </div>
  )
}

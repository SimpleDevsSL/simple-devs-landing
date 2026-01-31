import { useState, useEffect } from "react"

interface Win98ShutdownProps {
  onRestart: () => void
}

export function Win98Shutdown({ onRestart }: Win98ShutdownProps) {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center font-sans">
      <div 
        className={`transition-opacity duration-1000 ${showText ? "opacity-100" : "opacity-0"} text-center`}
      >        
        <button 
          onClick={onRestart}
          className="px-6 py-2 bg-[#c0c0c0] win98-button hover:bg-[#dfdfdf] active:win98-button-pressed text-black font-bold"
          style={{ fontFamily: "var(--font-pixel), 'MS Sans Serif', sans-serif" }}
        >
          Encender
        </button>
      </div>
    </div>
  )
}

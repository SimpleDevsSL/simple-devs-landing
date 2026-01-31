"use client"

import React from "react"

interface DesktopIconProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

export function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 w-20 hover:bg-[#000080]/30 focus:bg-[#000080] focus:outline-none group"
      style={{ fontFamily: "var(--font-pixel), 'MS Sans Serif', Tahoma, sans-serif" }}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-white text-xs text-center leading-tight group-focus:bg-[#000080] px-0.5 break-words">
        {label}
      </span>
    </button>
  )
}

// File Icons
export function FolderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-sm">
      <rect x="2" y="8" width="28" height="20" fill="#ffff00" stroke="#000" strokeWidth="1"/>
      <rect x="2" y="6" width="12" height="4" fill="#ffff00" stroke="#000" strokeWidth="1"/>
      <rect x="4" y="12" width="24" height="2" fill="#c0a000"/>
    </svg>
  )
}

export function TextFileIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-sm">
      <rect x="6" y="2" width="20" height="28" fill="#fff" stroke="#000" strokeWidth="1"/>
      <rect x="6" y="2" width="14" height="6" fill="#fff" stroke="#000" strokeWidth="1"/>
      <polygon points="20,2 26,8 20,8" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <rect x="9" y="12" width="14" height="1" fill="#000"/>
      <rect x="9" y="15" width="14" height="1" fill="#000"/>
      <rect x="9" y="18" width="10" height="1" fill="#000"/>
      <rect x="9" y="21" width="14" height="1" fill="#000"/>
      <rect x="9" y="24" width="8" height="1" fill="#000"/>
    </svg>
  )
}

export function ComputerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-sm">
      <rect x="4" y="4" width="24" height="18" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <rect x="6" y="6" width="20" height="14" fill="#000080"/>
      <rect x="8" y="22" width="16" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
      <rect x="10" y="24" width="12" height="4" fill="#c0c0c0" stroke="#000" strokeWidth="1"/>
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-sm">
      <rect x="2" y="6" width="28" height="20" fill="#fff" stroke="#000" strokeWidth="1"/>
      <polygon points="2,6 16,16 30,6" fill="none" stroke="#000" strokeWidth="1"/>
      <rect x="4" y="8" width="24" height="2" fill="#c0c0c0"/>
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-sm">
      <circle cx="16" cy="16" r="12" fill="#0078d7" stroke="#000" strokeWidth="1"/>
      <ellipse cx="16" cy="16" rx="5" ry="12" fill="none" stroke="#fff" strokeWidth="1"/>
      <line x1="4" y1="16" x2="28" y2="16" stroke="#fff" strokeWidth="1"/>
      <line x1="16" y1="4" x2="16" y2="28" stroke="#fff" strokeWidth="1"/>
      <path d="M6 10 Q16 12 26 10" fill="none" stroke="#fff" strokeWidth="1"/>
      <path d="M6 22 Q16 20 26 22" fill="none" stroke="#fff" strokeWidth="1"/>
    </svg>
  )
}

export function CodeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-sm">
      <rect x="4" y="4" width="24" height="24" fill="#1e1e1e" stroke="#000" strokeWidth="1"/>
      <text x="8" y="14" fill="#569cd6" fontSize="6" fontFamily="monospace">{"<"}</text>
      <text x="12" y="14" fill="#4ec9b0" fontSize="6" fontFamily="monospace">/</text>
      <text x="16" y="14" fill="#569cd6" fontSize="6" fontFamily="monospace">{">"}</text>
      <rect x="8" y="18" width="8" height="2" fill="#ce9178"/>
      <rect x="8" y="22" width="12" height="2" fill="#6a9955"/>
    </svg>
  )
}

import React from "react"
import type { Metadata, Viewport } from 'next'
import { VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel'
})

export const metadata: Metadata = {
  title: 'simpleDevs - Open Source Developer Collective',
  description: 'simpleDevs builds helpful open-source software for developers worldwide.',

  icons: {
    icon: '/simpledevslogo.png',
    shortcut: '/simpledevslogo.ico',
    apple: '/simpledevslogo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#008080',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nilay - Ma Petite Monde Rose 🐱",
  description: "Welcome to my coquette world full of cats, bubble tea, and pink dreams! Miauw miauw! 💕",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

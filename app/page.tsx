"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Instagram, Sparkles } from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [meowCount, setMeowCount] = useState(0)

  const slides = [
    {
      image: "/images/catay.JPG",
      caption: "Moi en la normal habitat",
    },
    {
      image: "/images/bubbleNilay.jpg",
      caption: "Bubble tea addiction 🧋",
    },
    {
      image: "/images/chatonay.jpg",
      caption: "Me on a cup ✨",
    },
    {
      image: "/images/hamsteray.jpg",
      caption: "Playtime with friends 💕",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const meowInterval = setInterval(() => {
      setMeowCount((prev) => prev + 1)
    }, 2000)
    return () => clearInterval(meowInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-pink-500 animate-pulse" size={24} />
          <span className="text-2xl font-bold text-pink-600 font-serif">Nilay</span>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="text-pink-600 hover:text-pink-800 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-pink-600 hover:text-pink-800 font-medium transition-colors">
            About Me
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-12 px-6">
        <div className="relative inline-block">
          <h1 className="text-6xl font-bold text-pink-600 mb-4 font-serif animate-bounce">Bonjour! I'm Nilay</h1>
          <div className="absolute -top-4 -right-4 animate-spin-slow">
            <Heart className="text-pink-400" size={32} fill="currentColor" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 text-lg text-pink-700">
          <p className="animate-pulse">Miauw miauw! 🐱 Welcome to my petit monde rose!</p>
          <p className="animate-bounce delay-100">Je suis obsédée with bubble tea 🧋 and everything kawaii!</p>
          <p className="animate-pulse delay-200">Miauw miauw miauw! Life is better in pink! 💕</p>
        </div>

        {/* Floating meows */}
        <div className="relative h-20 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float text-pink-400 text-sm font-bold ${
                i % 2 === 0 ? "animate-bounce" : "animate-pulse"
              }`}
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            >
              miauw ✨
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Section */}
      <div className="text-center py-8 px-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto shadow-lg border-2 border-pink-200">
          <h2 className="text-2xl font-bold text-pink-600 mb-4 font-serif">Follow my adventures! 📸</h2>
          <p className="text-pink-700 mb-6">Mon life es un beau chat</p>
          <a
            href="https://www.instagram.com/sunkittencats/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Instagram size={20} />
            <span className="font-medium">@Nilay</span>
          </a>
        </div>
      </div>

      {/* Things I Love Section */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-8 font-serif">Things I Love 💕</h2>
          <p className="text-center text-pink-700 mb-8 text-lg">Mes petites obsessions as un human chat</p>

          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-pink-200">
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full h-full object-contain transition-all duration-500 transform hover:scale-105 bg-white"              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-600/80 to-transparent p-6">
                <p className="text-white font-medium text-lg text-center">{slides[currentSlide].caption}</p>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-pink-500 scale-125" : "bg-pink-300 hover:bg-pink-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-6">
        <div className="flex justify-center items-center space-x-2 text-pink-600">
          <span>Made with</span>
          <Heart className="animate-pulse" size={16} fill="currentColor" />
          <span>and lots of miauw miauw</span>
        </div>
      </footer>
    </div>
  )
}

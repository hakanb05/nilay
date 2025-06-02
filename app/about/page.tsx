"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Sparkles, Star } from "lucide-react"

export default function AboutPage() {
  const [floatingMeows, setFloatingMeows] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [meowCounter, setMeowCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newMeow = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
      }
      setFloatingMeows((prev) => [...prev.slice(-4), newMeow])
      setMeowCounter((prev) => prev + 1)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const catPhotos = [
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 relative overflow-hidden">
      {/* Floating meows */}
      {floatingMeows.map((meow) => (
        <div
          key={meow.id}
          className="absolute text-pink-400 font-bold text-lg animate-ping pointer-events-none z-10"
          style={{
            left: `${meow.x}%`,
            top: `${meow.y}%`,
            animationDuration: "2s",
          }}
        >
          miauw ✨
        </div>
      ))}

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center relative z-20">
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

      {/* Main Content */}
      <div className="px-6 py-12 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h1 className="text-6xl font-bold text-pink-600 mb-6 font-serif animate-bounce">
                Je suis une belle chatte! 🐱
              </h1>
              <div className="absolute -top-6 -right-6 animate-spin-slow">
                <Star className="text-pink-400" size={40} fill="currentColor" />
              </div>
            </div>

            <div className="space-y-4 text-lg text-pink-700 max-w-2xl mx-auto">
              <p className="animate-pulse">Miauw miauw! I'm a beautiful cat who loves pink everything! 💕</p>
              <p className="animate-bounce delay-100">Mon monde is full of kawaii things and bubble tea obsessions!</p>
              <p className="animate-pulse delay-200">Miauw miauw miauw! Life is purr-fect when it's coquette! ✨</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-pink-600 mb-8 font-serif">Mes petites photos 📸</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {catPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                    index % 2 === 0 ? "animate-pulse" : "animate-bounce"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-colors">
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Cute cat photo ${index + 1}`}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Miauw! 💕</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Text */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-pink-200 mb-16">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center font-serif">About This Little Kitty 🎀</h2>
            <div className="space-y-6 text-pink-700 text-lg leading-relaxed">
              <p className="animate-fade-in">
                <strong>Bonjour mes amis!</strong> Miauw miauw! I'm Nilay, une petite chatte who lives in Catistan, Caen🌸
              </p>
              <p className="animate-fade-in delay-100">
                My daily routine includes: drinkinng bubble tea 🧋, taking aesthetic photos, saying "miauw" approximately
                847 times per day, and making everything around me as coquette as possible! ✨
              </p>
              <p className="animate-fade-in delay-200">
                Je suis obsédée with all things cute, pink, and cat! From my collection of hello kitty to my endless supply
                of turkic accessories, everything in my life is cat vibe 💕
              </p>
              <p className="animate-fade-in delay-300">
                When I'm not busy being adorable (which is never), you can find me cuddled up with other cats, planning
                my next bubble tea adventure, or adding more pink to my already very pink world! Miauw miauw! 🐱
              </p>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-300/50 to-rose-300/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-pink-600 mb-4 font-serif flex items-center">
                <Heart className="mr-2 animate-pulse" size={24} fill="currentColor" />
                Mes Favorites
              </h3>
              <ul className="space-y-2 text-pink-700">
                <li>🧋 Bubble tea</li>
                <li>🎀 Pink ribbons</li>
                <li>✨ coquette </li>
                <li>🐱 Other cute cats</li>
                <li>📸 Aesthetic photography</li>
                <li>💕 Everything kawaii (hihi)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-300/50 to-pink-300/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-pink-600 mb-4 font-serif flex items-center">
                <Sparkles className="mr-2 animate-spin-slow" size={24} />
                Random Facts
              </h3>
              <ul className="space-y-2 text-pink-700">
                <li>🌸 I own 47 cat items</li>
                <li>😸 I say "miauw" in 3 languages</li>
                <li>🎵 I listen to kpop....</li>
                <li>🌙 I dream in pastel colors</li>
                <li>💫 I believe in fairy tale magic</li>
                <li>🦄 I'm basically a beau cat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-6 relative z-20">
        <div className="flex justify-center items-center space-x-2 text-pink-600">
          <span>Fait avec</span>
          <Heart className="animate-pulse" size={16} fill="currentColor" />
          <span>et beaucoup de miauw miauw</span>
        </div>
        <p className="text-pink-500 text-sm mt-2">Meow counter: {meowCounter} miauw today! 🐱</p>
      </footer>
    </div>
  )
}

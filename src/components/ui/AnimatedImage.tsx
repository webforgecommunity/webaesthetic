'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Palette, Zap } from 'lucide-react'

export default function AnimatedImage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative justify-center items-center hidden lg:flex">
      <div className="relative w-full max-w-md mx-auto">
        {/* Main Image Container */}
        <div className={`relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 ${mounted ? 'animate-float' : ''}`}>
          <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center overflow-hidden">
            <Image 
              src="/team-image.png" 
              alt="Professional development team collaborating on innovative projects"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Floating Elements - Desktop */}
        <div className={`absolute -top-4 -left-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ${mounted ? 'animate-bounce-slow' : ''}`}>
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div className={`absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center ${mounted ? 'animate-bounce-slow delay-1000' : ''}`}>
          <Palette className="w-4 h-4 text-white" />
        </div>
        <div className={`absolute top-1/2 -left-8 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ${mounted ? 'animate-ping' : ''}`}></div>
        <div className={`absolute top-1/4 -right-6 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full ${mounted ? 'animate-ping delay-500' : ''}`}></div>
      </div>
    </div>
  )
}

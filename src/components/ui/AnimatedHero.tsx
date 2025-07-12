'use client'

import { useEffect, useState } from 'react'
import { Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface AnimatedHeroProps {
  className?: string
}

export default function AnimatedHero({ className = '' }: AnimatedHeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`space-y-6 sm:space-y-8 text-center lg:text-left ${className}`}>
        <div className="space-y-4 sm:space-y-6">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 fill-current text-blue-600" />
            <span className="hidden sm:inline">Make Your Development Project Successful</span>
            <span className="sm:hidden">Your Success Partner</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Build Your 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Dreams
            </span>
            <span className="block">With Webasthetic</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Full-service development agency creating powerful digital experiences. 
            From web to mobile, we transform your ideas into reality.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left ${className}`}>
      <div className="space-y-4 sm:space-y-6">
        <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium animate-bounce-subtle">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 fill-current text-blue-600" />
          <span className="hidden sm:inline">Make Your Development Project Successful</span>
          <span className="sm:hidden">Your Success Partner</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
          Build Your 
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Digital Dreams
          </span>
          <span className="block">With Webasthetic</span>
        </h1>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Full-service development agency creating powerful digital experiences. 
          From web to mobile, we transform your ideas into reality.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
        <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center">
            <Link href="/contact" className="flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </button>
        
        <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg w-full sm:w-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <Link href="/portfolio" className="flex items-center justify-center">
              View Our Work
            </Link>
          </div>
        </button>
      </div>
    </div>
  )
}

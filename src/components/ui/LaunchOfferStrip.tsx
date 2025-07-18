'use client'
import { useState } from 'react'
import { X, Gift, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LaunchOfferStrip() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-b border-blue-700/20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-purple-600/95"></div>
      
      {/* Minimal Fireworks Stars Animation - Responsive */}
      <div className="absolute inset-0 hidden sm:block">
        {/* First wave of stars */}
        <div className="absolute top-1 left-[15%] w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full animate-firework-star"></div>
        <div className="absolute top-2 left-[25%] w-0.5 h-0.5 bg-white/40 rounded-full animate-firework-star-delay-1"></div>
        <div className="absolute bottom-2 left-[35%] w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/50 rounded-full animate-firework-star-delay-2"></div>
        
        {/* Second wave of stars */}
        <div className="absolute top-1 right-[20%] w-0.5 h-0.5 bg-white/50 rounded-full animate-firework-star-delay-3"></div>
        <div className="absolute bottom-1 right-[30%] w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full animate-firework-star-delay-4"></div>
        <div className="absolute top-3 right-[45%] w-0.5 h-0.5 bg-white/40 rounded-full animate-firework-star"></div>
        
        {/* Third wave of stars - Desktop only */}
        <div className="absolute top-1 left-[60%] w-0.5 h-0.5 bg-white/50 rounded-full animate-firework-star-delay-1 hidden lg:block"></div>
        <div className="absolute bottom-1 left-[70%] w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full animate-firework-star-delay-5 hidden lg:block"></div>
        <div className="absolute top-2 left-[80%] w-0.5 h-0.5 bg-white/40 rounded-full animate-firework-star-delay-2 hidden lg:block"></div>
      </div>
      
      {/* Mobile simplified stars */}
      <div className="absolute inset-0 sm:hidden">
        <div className="absolute top-1 left-[20%] w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1 right-[25%] w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2 right-[15%] w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-2.5 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          
          {/* Left Section - Clean Message */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap">
                🎯 Limited Launch Offer
              </span>
            </div>
            
            {/* Mobile - Show all offers in compact format */}
            <div className="sm:hidden flex flex-wrap items-center justify-center gap-1.5 text-[10px] text-white/90">
              <span className="bg-white/15 px-2 py-0.5 rounded-md">Free Consultation</span>
              <span className="bg-white/15 px-2 py-0.5 rounded-md">Free Maintenance</span>
              <span className="bg-white/15 px-2 py-0.5 rounded-md">Unlimited Revisions</span>
            </div>
            
            {/* Tablet - Medium Pills */}
            <div className="hidden sm:flex lg:hidden items-center gap-2 text-xs">
              <div className="flex items-center gap-1.5 bg-white/12 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                <Gift className="w-2.5 h-2.5" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/12 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                <span className="font-medium">Free Maintenance</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/12 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                <span className="font-medium">Unlimited Revisions</span>
              </div>
            </div>
            
            {/* Desktop - Full Pills */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                <Gift className="w-3 h-3" />
                <span className="text-xs font-medium">Free 1-on-1 Consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                <span className="text-xs font-medium">1 Month Free Maintenance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                <span className="text-xs font-medium">Unlimited Design Revisions</span>
              </div>
            </div>
          </div>

          {/* Right Section - Clean CTA */}
          <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-0">
            
            {/* Timer - Responsive */}
            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-white/80">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="hidden sm:inline">Limited time</span>
              <span className="sm:hidden">Ends soon</span>
            </div>
            
            {/* CTA Button - Responsive */}
            <Link 
              href="/contact"
              className="group bg-white text-blue-600 hover:text-purple-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-gray-50 border border-white/20 hover:border-white/40 whitespace-nowrap"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <span>Claim Now</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            
            {/* Close button - Responsive */}
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1 sm:p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200"
              aria-label="Close offer strip"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
        
        {/* Mobile Value Indicator */}
      </div>
    </div>
  )
}

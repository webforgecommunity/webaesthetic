'use client'
import { useState } from 'react'
import { X, Gift, Clock } from 'lucide-react'

export default function LaunchOfferBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 animate-pulse"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            <span className="font-semibold">🚀 Launch Offer:</span>
            <span className="hidden sm:inline">Free Consultation + 1 Month Free Maintenance + Unlimited Revisions</span>
            <span className="sm:hidden">Limited Time Offers Available!</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Limited Time
            </span>
            <button 
              onClick={() => setIsVisible(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

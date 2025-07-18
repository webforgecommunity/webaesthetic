'use client'
import { useState, useEffect } from 'react'
import { X, Gift, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function FloatingOfferPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform transition-all duration-500 hover:scale-105 animate-slideIn">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Gift className="w-6 h-6 text-white animate-bounce" />
          </div>
          
          <h3 className="font-bold text-gray-900 mb-2">🎉 Limited Launch Offers!</h3>
          
          <div className="text-sm text-gray-600 mb-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span>Free 1-on-1 Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-purple-500" />
              <span>1 Month Free Maintenance</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-orange-500" />
              <span>Unlimited Design Revisions</span>
            </div>
          </div>
          
          <Link href="/contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block text-center">
            Claim Now
          </Link>
          
          <p className="text-xs text-gray-500 mt-2">⏰ Offer expires soon!</p>
        </div>
      </div>
    </div>
  )
}
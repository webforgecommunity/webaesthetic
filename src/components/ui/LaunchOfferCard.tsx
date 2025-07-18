'use client'
import { Gift, Users, Shield, Palette, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LaunchOfferCard() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 sm:p-8 border-2 border-dashed border-blue-300 mb-8">
      {/* Floating elements */}
      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
        LIMITED TIME
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Gift className="w-4 h-4" />
          Launch Special Offers
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Start Your Project with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Exclusive Perks</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
            <Users className="w-8 h-8 text-blue-600" />
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Free 1-on-1 Consultation</h4>
              
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
            <Shield className="w-8 h-8 text-purple-600" />
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">1 Month Free Maintenance</h4>
              
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
            <Palette className="w-8 h-8 text-orange-600" />
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Unlimited Design Revisions</h4>
              
            </div>
          </div>
        </div>
        
        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
          Claim Your Offers
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

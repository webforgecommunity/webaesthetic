'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" role="banner">
      <div className="w-full max-w-7xl mx-auto px-0.5 sm:px-1 lg:px-1.5">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group mr-12">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-lg">W</span>
              </div>
            </div>
            <span className="font-poppins font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Webasthetic
            </span>
          </Link>

          {/* Desktop Navigation - Moved to Left */}
          <nav className="hidden lg:flex items-center space-x-2 flex-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95",
                    "hover:shadow-lg active:shadow-md",
                    "mx-1", // Extra margin to prevent overlap
                    isActive 
                      ? "text-blue-600 bg-blue-50 shadow-md border border-blue-100" 
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200"
                  )}
                  style={{
                    transformOrigin: 'center',
                  }}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            {/* Phone Number */}
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">+91 9216952323</span>
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-blue-600 hover:border-blue-700 inline-flex items-center justify-center"
            >
              Contact us
            </Link>
          </div>

          {/* Medium Screen Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1 flex-1 justify-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105",
                    isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Medium Screen Right Side */}
          <div className="hidden md:flex lg:hidden items-center space-x-4 ml-auto">
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 transform hover:scale-110 active:scale-95 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 active:scale-95",
                      "hover:shadow-md active:shadow-sm",
                      isActive 
                        ? "text-blue-600 bg-blue-50 border border-blue-100" 
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.name}
                  </Link>
                )
              })}
              
              <div className="pt-6 border-t border-gray-100 mt-6 space-y-4">
                <div className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-xl hover:bg-gray-50">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-base font-medium">+1-234-567-890</span>
                </div>
                <Link 
                  href="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center"
                >
                  Contact us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

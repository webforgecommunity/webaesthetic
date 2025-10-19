"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Search, 
  Shield, 
  Code, 
  Palette, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Cloud,
  Sparkles,
  Target,
  Rocket,
  Award,
  Smartphone,
  ShoppingCart
} from 'lucide-react'

// Check if we're in the browser before using GSAP
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let gsap: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ScrollTrigger: any = null

if (typeof window !== 'undefined') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    gsap = require('gsap').gsap
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)
  } catch (error) {
    console.warn('GSAP not loaded:', error)
  }
}

// Dynamic services from API
type ApiService = { name: string; slug: string; description?: string; icon?: string; iconImageUrl?: string; subtitle?: string; image?: string; features?: string[]; technologies?: string[]; techImages?: string[]; price?: string; timeline?: string; gradient?: string; bgGradient?: string; category?: string }

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [apiServices, setApiServices] = useState<ApiService[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Refs for animations
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null)
  const heroDescRef = useRef<HTMLParagraphElement | null>(null)
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const heroBgBlobsRef = useRef<(HTMLDivElement | null)[]>([])
  const heroGlowRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const categoryCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const heroStatsRef = useRef<(HTMLDivElement | null)[]>([])

  // Mouse-following glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroGlowRef.current) return
      const rect = heroGlowRef.current.parentElement?.getBoundingClientRect()
      if (!rect) return
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      heroGlowRef.current.style.left = `${x - 150}px`
      heroGlowRef.current.style.top = `${y - 150}px`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // GSAP animations
  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !ScrollTrigger) return

    // Hero animations
    if (heroTitleRef.current && heroDescRef.current) {
      gsap.fromTo(
        [heroTitleRef.current, heroDescRef.current],
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.2, 
          ease: 'expo.out', 
          stagger: 0.2,
          delay: 0.3
        }
      )
    }

    // Animate category preview cards
    categoryCardsRef.current.forEach((card, idx) => {
      if (!card) return
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.8 + idx * 0.1,
        }
      )
    })

    // Animate hero stats
    heroStatsRef.current.forEach((stat, idx) => {
      if (!stat) return
      gsap.fromTo(
        stat,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 1.2 + idx * 0.1,
        }
      )
    })

    // Background blobs animation
    heroBgBlobsRef.current.forEach((blob, i) => {
      if (!blob) return
      gsap.to(blob, {
        y: i % 2 === 0 ? 20 : -20,
        x: i % 3 === 0 ? 15 : -15,
        scale: 1.1 + i * 0.05,
        opacity: 0.4 + i * 0.1,
        repeat: -1,
        yoyo: true,
        duration: 4 + i * 0.5,
        ease: 'sine.inOut',
        delay: i * 0.3,
      })
    })

    // Service cards animation
    serviceCardsRef.current.forEach((card, idx) => {
      if (!card) return
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotateY: 10,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
          delay: (idx % 3) * 0.15,
        }
      )
    })

    // CTA section animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'expo.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    }

    return () => {
      if (ScrollTrigger) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [])

  // Load services from API on mount
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/services', { cache: 'no-store' })
        const json = await res.json()
        setApiServices(json?.data || [])
  } catch {
        setError('Failed to load services')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    code: Code,
    smartphone: Smartphone,
    shoppingcart: ShoppingCart,
    palette: Palette,
    search: Search,
    rocket: Rocket,
    shield: Shield,
    sparkles: Sparkles,
    cloud: Cloud,
    users: Users,
    award: Award,
  }

  // 3D Card hover effect
  useEffect(() => {
    if (typeof window === 'undefined' || !gsap) return
    
    serviceCardsRef.current.forEach((card, idx) => {
      if (!card) return
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * 5
        const rotateY = ((x - centerX) / centerX) * 8
        
        gsap.to(card, {
          rotateX: -rotateX,
          rotateY: rotateY,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        })
        
        setHoveredCard(idx)
      }
      
      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        })
        
        setHoveredCard(null)
      }
      
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={el => { heroBgBlobsRef.current[0] = el }} className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div ref={el => { heroBgBlobsRef.current[1] = el }} className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div ref={el => { heroBgBlobsRef.current[2] = el }} className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-15"></div>
        </div>

        {/* Mouse-following glow */}
        <div ref={heroGlowRef} className="hidden lg:block pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/15 to-white/0 blur-3xl opacity-50 -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Hero Content */}
          <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 ref={heroTitleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
            </h1>
            <p ref={heroDescRef} className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12">
              Transform your digital presence with our comprehensive suite of services. From web development to cloud solutions, we deliver excellence at every step.
            </p>
            
            {/* Service Categories Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
              <div ref={el => { categoryCardsRef.current[0] = el }} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Development</h3>
                <p className="text-xs sm:text-sm text-gray-600">Web & Mobile Apps</p>
              </div>
              
              <div ref={el => { categoryCardsRef.current[1] = el }} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Design</h3>
                <p className="text-xs sm:text-sm text-gray-600">UI/UX & Branding</p>
              </div>
              
              <div ref={el => { categoryCardsRef.current[2] = el }} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Infrastructure</h3>
                <p className="text-xs sm:text-sm text-gray-600">Cloud & DevOps</p>
              </div>
              
              <div ref={el => { categoryCardsRef.current[3] = el }} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Marketing</h3>
                <p className="text-xs sm:text-sm text-gray-600">SEO & Analytics</p>
              </div>
            </div>

            {/* Call to Action with floating elements */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30"></div>
              <Link href="/portfolio" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-3 group text-sm sm:text-base">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Animated Service Stats
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div ref={el => { heroStatsRef.current[0] = el }} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">12+</div>
                <div className="text-sm text-gray-600">Service Categories</div>
              </div>
            </div> */}
            
            {/* <div ref={el => { heroStatsRef.current[1] = el }} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div> */}
            
            {/* <div ref={el => { heroStatsRef.current[2] = el }} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Fast</div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
            </div> */}
            
            {/* <div ref={el => { heroStatsRef.current[3] = el }} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Secure</div>
              </div>
            </div> 
          </div>*/}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div ref={servicesRef} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Choose from our range of professional services designed to take your business to the next level.
            </p>
          </div> */}

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {(apiServices || []).map((service, idx) => {
              const Icon = iconMap[(service.icon || '').toLowerCase()] || Code
              const category = service.category || 'Service'
              const gradient = service.gradient || 'from-blue-500 to-purple-500'
              const bgGradient = service.bgGradient || 'from-blue-50 to-purple-50'
              const features = service.features && service.features.length ? service.features : (service.description ? [service.description] : [])
              return (
                <div
                  key={service.slug}
                  ref={el => { serviceCardsRef.current[idx] = el }}
                  className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden ${
                    hoveredCard === idx ? 'z-10' : ''
                  }`}
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Service Icon & Header */}
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`relative rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center`}>
                        {service.iconImageUrl ? (
                          <Image src={service.iconImageUrl} alt={service.name} fill sizes="64px" className="object-cover" />
                        ) : (
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{category}</div>
                        <div className="flex items-center gap-1 mt-1">                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{service.subtitle || service.slug}</p>


                    {/* Key Features */}
                    {!!features.length && (
                      <div className="space-y-2 mb-6">
                        {features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    {service.technologies?.length ? (
                      <div className="mb-6">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Technologies</div>
                        <div className="flex items-center gap-2 mb-3">
                          {(service.techImages || []).slice(0, 3).map((img, idx) => (
                            <Image key={idx} src={img} alt="" width={24} height={24} className="rounded-lg shadow-sm" />
                          ))}
                          {service.technologies.length > 3 && (
                            <div className="text-xs text-gray-500">+{service.technologies.length - 3}</div>
                          )}
                        </div>
                      </div>
                    ) : null}

                    {/* Service Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-xs text-gray-500 mb-1">Category</div>
                        <div className="font-bold text-gray-900">{category}</div>
                      </div>
                      {service.timeline ? (
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-xs text-gray-500 mb-1">Timeline</div>
                          <div className="font-bold text-gray-900">{service.timeline}</div>
                        </div>
                      ) : (
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-xs text-gray-500 mb-1">Price</div>
                          <div className="font-bold text-gray-900">{service.price || '—'}</div>
                        </div>
                      )}
                    </div>

                    {/* Learn More Button */}
                    <Link href={`/services/${service.slug}`} className={`w-full bg-gradient-to-r ${gradient} text-white px-4 sm:px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm sm:text-base`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              )
            })}
            {loading && (
              <div className="col-span-full text-center text-sm text-gray-500">Loading services…</div>
            )}
            {!loading && apiServices && apiServices.length === 0 && (
              <div className="col-span-full text-center text-sm text-gray-500">No services yet. Add some from the Admin.</div>
            )}
            {error && (
              <div className="col-span-full text-center text-sm text-red-500">{error}</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 mx-auto text-blue-600 mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your ideas and turn them into reality. Get a free consultation and project estimate today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group">
                <Rocket className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <div className="font-semibold text-gray-900">100% Secure</div>
                <div className="text-sm text-gray-600">Your data is protected</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <div className="font-semibold text-gray-900">Expert Team</div>
                <div className="text-sm text-gray-600">Professional developers</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <div className="font-semibold text-gray-900">Quality Assured</div>
                <div className="text-sm text-gray-600">Tested & optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



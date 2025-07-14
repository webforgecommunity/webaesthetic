'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Monitor, Smartphone, ShoppingCart, Zap, ExternalLink, Github, Calendar, Users, Star, Filter, Grid3X3, ArrowRight, Play, TrendingUp, Database, Bot, Briefcase, ChevronDown, X } from 'lucide-react'

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

// Enhanced portfolio data with more projects and categories
const projects = [
  {
    id: 1,
    title: 'E-Commerce Revolution',
    description: 'A next-generation e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless multi-payment gateway integration.',
    image: '/tech_logos/next.png',
    tech: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB', 'Stripe'],
    techImages: ['/tech_logos/next.png', '/tech_logos/Tailwind.png', '/tech_logos/Node.jpeg', '/tech_logos/MongoDB.png'],
    category: 'E-commerce',
    featured: true,
    status: 'Live',
    duration: '6 months',
    team: '8 members',
    rating: 4.9,
    url: '#',
    github: '#',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'FinTech Mobile Banking',
    description: 'A secure, cross-platform mobile banking app with biometric authentication, instant transfers, and comprehensive financial analytics.',
    image: '/tech_logos/Flutter.png',
    tech: ['Flutter', 'Firebase', 'Android', 'iOS', 'Node.js'],
    techImages: ['/tech_logos/Flutter.png', '/tech_logos/Firebase.jpg', '/tech_logos/Android.jpg', '/tech_logos/iOS.png'],
    category: 'Mobile',
    featured: true,
    status: 'Live',
    duration: '8 months',
    team: '12 members',
    rating: 4.8,
    url: '#',
    github: '#',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'AI Content Studio',
    description: 'Revolutionary AI-powered content generation platform with natural language processing, automated SEO optimization, and multi-language support.',
    image: '/tech_logos/Python.png',
    tech: ['Python', 'React', 'AWS', 'TensorFlow', 'OpenAI'],
    techImages: ['/tech_logos/Python.png', '/tech_logos/react.jpeg', '/tech_logos/AWS.jpg'],
    category: 'AI/ML',
    featured: true,
    status: 'Beta',
    duration: '10 months',
    team: '15 members',
    rating: 4.7,
    url: '#',
    github: '#',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Enterprise SaaS Hub',
    description: 'Comprehensive project management platform with advanced collaboration tools, real-time analytics, and seamless third-party integrations.',
    image: '/tech_logos/Vue.jpeg',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
    techImages: ['/tech_logos/Vue.jpeg', '/tech_logos/Node.jpeg', '/tech_logos/PostgreSQL.png', '/tech_logos/Docker.jpg'],
    category: 'Web',
    featured: false,
    status: 'Live',
    duration: '4 months',
    team: '6 members',
    rating: 4.6,
    url: '#',
    github: '#',
    demoUrl: '#'
  },
  {
    id: 5,
    title: 'Smart IoT Dashboard',
    description: 'Real-time IoT monitoring and control system with predictive analytics, automated alerts, and comprehensive device management.',
    image: '/tech_logos/react.jpeg',
    tech: ['React', 'Python', 'AWS', 'MongoDB', 'WebSocket'],
    techImages: ['/tech_logos/react.jpeg', '/tech_logos/Python.png', '/tech_logos/AWS.jpg', '/tech_logos/MongoDB.png'],
    category: 'IoT',
    featured: false,
    status: 'Live',
    duration: '5 months',
    team: '10 members',
    rating: 4.5,
    url: '#',
    github: '#',
    demoUrl: '#'
  },
  {
    id: 6,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform with patient management, appointment scheduling, telemedicine capabilities, and HIPAA compliance.',
    image: '/tech_logos/angular.png',
    tech: ['Angular', 'Java', 'PostgreSQL', 'AWS', 'Docker'],
    techImages: ['/tech_logos/angular.png', '/tech_logos/Java.png', '/tech_logos/PostgreSQL.png', '/tech_logos/AWS.jpg'],
    category: 'Healthcare',
    featured: false,
    status: 'Live',
    duration: '12 months',
    team: '20 members',
    rating: 4.9,
    url: '#',
    github: '#',
    demoUrl: '#'
  },
  {
    id: 7,
    title: 'Crypto Trading Platform',
    description: 'Advanced cryptocurrency trading platform with real-time market data, algorithmic trading, and comprehensive portfolio management.',
    image: '/tech_logos/next.png',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSocket'],
    techImages: ['/tech_logos/next.png', '/tech_logos/Node.jpeg', '/tech_logos/PostgreSQL.png'],
    category: 'FinTech',
    featured: false,
    status: 'Development',
    duration: '9 months',
    team: '14 members',
    rating: 4.4,
    url: '#',
    github: '#',
    demoUrl: '#'
  },
  {
    id: 8,
    title: 'Social Media Analytics',
    description: 'Powerful social media analytics platform with sentiment analysis, competitor tracking, and automated reporting for brands.',
    image: '/tech_logos/Python.png',
    tech: ['Python', 'React', 'MongoDB', 'AWS', 'TensorFlow'],
    techImages: ['/tech_logos/Python.png', '/tech_logos/react.jpeg', '/tech_logos/MongoDB.png', '/tech_logos/AWS.jpg'],
    category: 'Analytics',
    featured: false,
    status: 'Live',
    duration: '7 months',
    team: '9 members',
    rating: 4.3,
    url: '#',
    github: '#',
    demoUrl: '#'
  }
]

const categories = [
  { name: 'All Projects', value: 'all', icon: Grid3X3, count: projects.length },
  { name: 'Web Applications', value: 'Web', icon: Monitor, count: projects.filter(p => p.category === 'Web').length },
  { name: 'E-commerce', value: 'E-commerce', icon: ShoppingCart, count: projects.filter(p => p.category === 'E-commerce').length },
  { name: 'Mobile Apps', value: 'Mobile', icon: Smartphone, count: projects.filter(p => p.category === 'Mobile').length },
  { name: 'AI & ML', value: 'AI/ML', icon: Bot, count: projects.filter(p => p.category === 'AI/ML').length },
  { name: 'FinTech', value: 'FinTech', icon: TrendingUp, count: projects.filter(p => p.category === 'FinTech').length },
  { name: 'Healthcare', value: 'Healthcare', icon: Users, count: projects.filter(p => p.category === 'Healthcare').length },
  { name: 'IoT Solutions', value: 'IoT', icon: Zap, count: projects.filter(p => p.category === 'IoT').length },
  { name: 'Analytics', value: 'Analytics', icon: Database, count: projects.filter(p => p.category === 'Analytics').length }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const badgeRefs = useRef<(HTMLSpanElement | null)[][]>([])
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([])
  const heroDescRef = useRef<HTMLParagraphElement | null>(null)
  const heroBgBlobsRef = useRef<(HTMLDivElement | null)[]>([])
  const featuredTitleRef = useRef<HTMLHeadingElement | null>(null)
  const featuredDescRef = useRef<HTMLParagraphElement | null>(null)
  const featuredBlobRef = useRef<HTMLDivElement | null>(null)
  const featuredBgBlobsRef = useRef<(HTMLDivElement | null)[]>([])
  const statsRef = useRef<HTMLDivElement | null>(null)
  const heroGlowRef = useRef<HTMLDivElement | null>(null)
  const heroHeadlineWords = ["Our", "Portfolio"];
  const heroWordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const filterDropdownRef = useRef<HTMLDivElement | null>(null)

  // Filter projects based on category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory))
    }
  }, [activeCategory])

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isFilterOpen])

  // Mouse-following glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroGlowRef.current) return
      const rect = heroGlowRef.current.parentElement?.getBoundingClientRect()
      if (!rect) return
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      heroGlowRef.current.style.left = `${x - 100}px`
      heroGlowRef.current.style.top = `${y - 100}px`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate hero headline words
  useEffect(() => {
    if (!gsap || !heroWordRefs.current.length) return
    gsap.fromTo(
      heroWordRefs.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out', stagger: 0.18, delay: 0.2 }
    )
  }, [])

  // GSAP scroll and animations
  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !ScrollTrigger) return
    
    // Hero section animations
    if (heroDescRef.current) {
      gsap.fromTo(
        heroDescRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out', delay: 0.4 }
      )
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 40, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          ease: 'expo.out', 
          stagger: 0.1, 
          delay: 0.6 
        }
      )
    }

    // Animate hero background blobs
    heroBgBlobsRef.current.forEach((blob, i) => {
      if (!blob) return
      gsap.to(blob, {
        scale: 1.08 + i * 0.04,
        y: i % 2 === 0 ? 20 : -20,
        opacity: 0.22 + i * 0.03,
        repeat: -1,
        yoyo: true,
        duration: 5 + i * 1.5,
        ease: 'sine.inOut',
        delay: i * 0.5,
      })
    })

    // Featured section animations
    if (featuredTitleRef.current && featuredDescRef.current) {
      gsap.fromTo(
        [featuredTitleRef.current, featuredDescRef.current],
        { opacity: 0, y: 40, scale: 0.96 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1, 
          ease: 'expo.out', 
          stagger: 0.15,
          scrollTrigger: {
            trigger: featuredTitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    }

    // Animate featured floating blob
    if (featuredBlobRef.current) {
      gsap.fromTo(
        featuredBlobRef.current,
        { opacity: 0, scale: 0.7, y: -30 },
        { 
          opacity: 0.25, 
          scale: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'expo.out',
          scrollTrigger: {
            trigger: featuredBlobRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      )
      gsap.to(featuredBlobRef.current, {
        y: 24,
        scale: 1.08,
        opacity: 0.32,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: 'sine.inOut',
        delay: 1.2,
      })
    }

    // Animate featured background blobs
    featuredBgBlobsRef.current.forEach((blob, i) => {
      if (!blob) return
      gsap.to(blob, {
        scale: 1.1 + i * 0.05,
        y: i % 2 === 0 ? 18 : -18,
        opacity: 0.25 + i * 0.04,
        repeat: -1,
        yoyo: true,
        duration: 6 + i * 1.2,
        ease: 'sine.inOut',
        delay: i * 0.7,
      })
    })

    // Category filters animation
    categoryRefs.current.forEach((category, idx) => {
      if (!category) return
      gsap.fromTo(
        category,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: idx * 0.05,
          scrollTrigger: {
            trigger: category,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    })

    // Project cards animations
    cardsRef.current.forEach((card, idx) => {
      if (!card) return
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotateY: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
          delay: (idx % 3) * 0.1,
        }
      )

      // Animate tech badges with stagger
      if (badgeRefs.current[idx]) {
        gsap.fromTo(
          badgeRefs.current[idx],
          { opacity: 0, y: 20, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: 0.3,
          }
        )
      }
    })

    return () => {
      if (ScrollTrigger) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [filteredProjects])

  // 3D Card Tilt Effect
  useEffect(() => {
    if (typeof window === 'undefined' || !gsap) return
    
    cardsRef.current.forEach((card) => {
      if (!card) return
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * 8
        const rotateY = ((x - centerX) / centerX) * 12
        
        gsap.to(card, {
          rotateX: -rotateX,
          rotateY: rotateY,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        })
      }
      
      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
      
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [filteredProjects])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Animated moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={el => { heroBgBlobsRef.current[0] = el }} className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div ref={el => { heroBgBlobsRef.current[1] = el }} className="absolute top-32 sm:top-40 right-4 sm:right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div ref={el => { heroBgBlobsRef.current[2] = el }} className="absolute bottom-10 sm:bottom-20 left-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        {/* Mouse-following glow (desktop only) */}
        <div ref={heroGlowRef} className="hidden md:block pointer-events-none absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-white/0 blur-3xl opacity-40 transition-transform duration-200 -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {heroHeadlineWords.map((word, i) => (
                <span
                  key={word}
                  ref={el => { heroWordRefs.current[i] = el }}
                  className="inline-block mx-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ))}
            </h1>
            <p ref={heroDescRef} className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of cutting-edge projects that showcase innovation, creativity, and technical excellence across multiple industries.
            </p>
            
            {/* Stats Section */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
<<<<<<< HEAD
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
=======
                <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length - 1}</div>
>>>>>>> 85d62573e593140960f1b13d2ceb70469a1f6cbf
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={el => { featuredBgBlobsRef.current[0] = el }} className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div ref={el => { featuredBgBlobsRef.current[1] = el }} className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>
        
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          {/* Filter Controls */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
              
              {/* Desktop Filter Pills - Hidden on mobile/tablet */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {categories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.value}
                      ref={el => { categoryRefs.current[index] = el }}
                      onClick={() => setActiveCategory(category.value)}
                      className={`group relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeCategory === category.value
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.value 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Mobile/Tablet Filter Dropdown */}
              <div className="lg:hidden relative w-full max-w-md" ref={filterDropdownRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    {(() => {
                      const activeFilter = categories.find(c => c.value === activeCategory)
                      const Icon = activeFilter?.icon || Grid3X3
                      return (
                        <>
                          <Icon className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900">{activeFilter?.name}</div>
                            <div className="text-sm text-gray-500">{activeFilter?.count} projects</div>
                          </div>
                        </>
                      )
                    })()}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Filter Dropdown Panel */}
                {isFilterOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
                    {/* Close button */}
                    <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 p-4 flex items-center justify-between">
                      <span className="font-medium text-gray-900">Filter Projects</span>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                    
                    {/* Filter Options */}
                    <div className="p-2">
                      {categories.map((category, index) => {
                        const Icon = category.icon
                        return (
                          <button
                            key={category.value}
                            ref={el => { categoryRefs.current[index] = el }}
                            onClick={() => {
                              setActiveCategory(category.value)
                              setIsFilterOpen(false)
                            }}
                            className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 flex items-center gap-3 mb-1 ${
                              activeCategory === category.value
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <div className="flex-1">
                              <div className="font-medium">{category.name}</div>
                              <div className={`text-sm ${
                                activeCategory === category.value ? 'text-white/80' : 'text-gray-500'
                              }`}>
                                {category.count} projects
                              </div>
                            </div>
                            {activeCategory === category.value && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-200 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm font-medium">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm font-medium">List</span>
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-6 sm:gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                ref={el => { cardsRef.current[idx] = el }}
                className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                } ${project.featured ? 'ring-2 ring-blue-500/20' : ''}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-100 text-green-800' 
                    : project.status === 'Beta'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </div>

                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'sm:w-80 flex-shrink-0' : ''
                }`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                    {/* Primary Tech Logo */}
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={80} 
                      height={80} 
                      className="rounded-2xl shadow-lg object-cover z-10"
                    />
                    
                    {/* Tech Stack Icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {project.techImages.slice(0, 4).map((img, i) => (
                          <Image 
                            key={i}
                            src={img} 
                            alt="" 
                            width={32} 
                            height={32} 
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-2">
                        <a href={project.demoUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Play className="w-4 h-4" />
                        </a>
                        <a href={project.github} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href={project.url} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 flex-1">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.team}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {project.rating}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={tech}
                        ref={el => {
                          if (!badgeRefs.current[idx]) badgeRefs.current[idx] = []
                          badgeRefs.current[idx][i] = el
                        }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-100 hover:border-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.url}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href={project.github}
                      className="px-4 py-2.5 rounded-xl font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button (if needed) */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">Try selecting a different category to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

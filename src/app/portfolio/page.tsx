'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Monitor, Smartphone, ShoppingCart, Globe, Zap, Palette, Code } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Mock portfolio data
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A scalable online store with seamless checkout, real-time inventory, and analytics dashboard.',
    image: '/tech_logos/next.png',
    tech: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB'],
    techImages: ['/tech_logos/next.png', '/tech_logos/Tailwind.png', '/tech_logos/Node.jpeg', '/tech_logos/MongoDB.png'],
    category: 'Web',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure, cross-platform mobile app for banking, with biometric login and instant transfers.',
    image: '/tech_logos/Flutter.png',
    tech: ['Flutter', 'Firebase', 'Android', 'iOS'],
    techImages: ['/tech_logos/Flutter.png', '/tech_logos/Firebase.jpg', '/tech_logos/Android.jpg', '/tech_logos/iOS.png'],
    category: 'Mobile',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered tool for generating marketing content, blog posts, and product descriptions.',
    image: '/tech_logos/Python.png',
    tech: ['Python', 'React', 'AWS'],
    techImages: ['/tech_logos/Python.png', '/tech_logos/react.jpeg', '/tech_logos/AWS.jpg'],
    category: 'AI/ML',
  },
  {
    title: 'SaaS Project Management',
    description: 'A collaborative SaaS platform for agile teams, with Kanban boards and real-time chat.',
    image: '/tech_logos/Vue.jpeg',
    tech: ['Vue', 'Node.js', 'PostgreSQL', 'Docker'],
    techImages: ['/tech_logos/Vue.jpeg', '/tech_logos/Node.jpeg', '/tech_logos/PostgreSQL.png', '/tech_logos/Docker.jpg'],
    category: 'Web',
  },
]

function useCard3DTilt(cardsRef: React.RefObject<(HTMLDivElement | null)[]>) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    cardsRef.current.forEach((card) => {
      if (!card) return
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * 10
        const rotateY = ((x - centerX) / centerX) * 16
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
      }
      const handleMouseLeave = () => {
        card.style.transform = ''
      }
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      // Clean up
      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [cardsRef])
}

export default function Portfolio() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const badgeRefs = useRef<(HTMLSpanElement | null)[][]>([])
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null)
  const heroDescRef = useRef<HTMLParagraphElement | null>(null)
  const heroBgBlobsRef = useRef<(HTMLDivElement | null)[]>([])
  const featuredTitleRef = useRef<HTMLHeadingElement | null>(null)
  const featuredDescRef = useRef<HTMLParagraphElement | null>(null)
  const featuredBlobRef = useRef<HTMLDivElement | null>(null)
  const featuredBgBlobsRef = useRef<(HTMLDivElement | null)[]>([])
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const heroGlowRef = useRef<HTMLDivElement | null>(null)
  const heroHeadlineWords = ["Our", "Portfolio"];
  const heroWordRefs = useRef<(HTMLSpanElement | null)[]>([])

  // Mouse-following glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroGlowRef.current) return
      const rect = heroGlowRef.current.parentElement?.getBoundingClientRect()
      if (!rect) return
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMouse({ x, y })
      heroGlowRef.current.style.left = `${x - 100}px`
      heroGlowRef.current.style.top = `${y - 100}px`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate hero headline words
  useEffect(() => {
    if (heroWordRefs.current.length) {
      gsap.fromTo(
        heroWordRefs.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out', stagger: 0.18, delay: 0.2 }
      )
    }
  }, [])

  // GSAP scroll and badge animations
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Hero section headline/desc
    if (heroTitleRef.current && heroDescRef.current) {
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out', delay: 0.1 }
      )
      gsap.fromTo(
        heroDescRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out', delay: 0.25 }
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
    // Featured Projects section title/desc
    if (featuredTitleRef.current && featuredDescRef.current) {
      gsap.fromTo(
        [featuredTitleRef.current, featuredDescRef.current],
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out', stagger: 0.15, delay: 0.1 }
      )
    }
    // Animate featured floating blob
    if (featuredBlobRef.current) {
      gsap.fromTo(
        featuredBlobRef.current,
        { opacity: 0, scale: 0.7, y: -30 },
        { opacity: 0.25, scale: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.2 }
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
    // Cards and badges (existing)
    cardsRef.current.forEach((card, idx) => {
      if (!card) return
      gsap.fromTo(
        card,
        {
          opacity: 0,
          rotateY: 40,
          rotateX: 10,
          scale: 0.85,
          y: 60,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            scrub: false,
          },
          delay: idx * 0.04,
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
          }
        )
      }
    })
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  useCard3DTilt(cardsRef)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden">
        {/* Animated moving gradient background */}
        <div className="absolute inset-0 -z-10 animate-hero-gradient" />
        {/* SVG sparkles/particles */}
        <svg className="absolute left-1/4 top-10 w-32 h-32 opacity-30 animate-sparkle-slow pointer-events-none -z-10" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="30" fill="url(#sparkle1)"/><defs><radialGradient id="sparkle1" cx="0.5" cy="0.5" r="0.5" gradientTransform="rotate(90 .5 .5) scale(1 1)"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient></defs></svg>
        <svg className="absolute right-1/4 bottom-10 w-24 h-24 opacity-20 animate-sparkle-fast pointer-events-none -z-10" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="20" fill="url(#sparkle2)"/><defs><radialGradient id="sparkle2" cx="0.5" cy="0.5" r="0.5" gradientTransform="rotate(90 .5 .5) scale(1 1)"><stop stopColor="#c4b5fd"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient></defs></svg>
        {/* Mouse-following glow (desktop only) */}
        <div ref={heroGlowRef} className="hidden md:block pointer-events-none absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-white/0 blur-3xl opacity-60 transition-transform duration-200 -z-10" style={{ left: mouse.x - 100, top: mouse.y - 100 }} />
        {/* Animated background blobs (existing) */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={el => { heroBgBlobsRef.current[0] = el || null; }} className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div ref={el => { heroBgBlobsRef.current[1] = el || null; }} className="absolute top-32 sm:top-40 right-4 sm:right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div ref={el => { heroBgBlobsRef.current[2] = el || null; }} className="absolute bottom-10 sm:bottom-20 left-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mt-10 sm:mt-16 md:mt-20 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ position: 'relative', display: 'inline-block' }}>
              {heroHeadlineWords.map((word, i) => (
                <span
                  key={word}
                  ref={el => { heroWordRefs.current[i] = el }}
                  className="inline-block mx-1 relative z-10"
                  style={{ willChange: 'opacity, transform' }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p ref={heroDescRef} className="text-xl text-gray-600 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Explore our latest projects and see the quality of work we deliver.
            </p>
          </div>
        </div>
        {/* Custom styles for animated gradient and sparkles */}
        <style jsx>{`
          .animate-hero-gradient {
            background: linear-gradient(120deg, #a5b4fc 0%, #c4b5fd 50%, #f0abfc 100%);
            background-size: 200% 200%;
            animation: hero-gradient-move 8s ease-in-out infinite alternate;
          }
          @keyframes hero-gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-sparkle-slow {
            animation: sparkle-move 7s ease-in-out infinite alternate;
          }
          .animate-sparkle-fast {
            animation: sparkle-move 4s ease-in-out infinite alternate;
          }
          @keyframes sparkle-move {
            0% { transform: translateY(0) scale(1); opacity: 0.3; }
            100% { transform: translateY(-20px) scale(1.15); opacity: 0.5; }
          }
        `}</style>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden border-t border-gray-100">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={el => (featuredBgBlobsRef.current[0] = el)} className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div ref={el => (featuredBgBlobsRef.current[1] = el)} className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 relative">
            {/* Floating animated gradient blob behind title */}
            <div ref={featuredBlobRef} className="absolute left-1/2 -translate-x-1/2 -top-8 w-60 h-24 bg-gradient-to-r from-blue-300 via-purple-200 to-blue-200 rounded-full blur-2xl opacity-20 z-0"></div>
            <h2 ref={featuredTitleRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up relative z-10">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p ref={featuredDescRef} className="text-base sm:text-lg text-gray-600 leading-relaxed animate-fade-in-up relative z-10" style={{ animationDelay: '0.1s' }}>
              Handpicked highlights from our portfolio, showcasing our expertise across web, mobile, and AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                ref={el => { cardsRef.current[idx] = el || null }}
                className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 relative will-change-transform animate-float"
                style={{ perspective: '1200px', boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.10), 0 1.5px 8px 0 rgba(120, 80, 255, 0.08)' }}
              >
                {/* Glowing border overlay */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow:'0 0 32px 4px #a5b4fc, 0 0 64px 8px #c4b5fd'}}></div>
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 overflow-hidden relative">
                    {/* Gradient overlay */}
                    <Image src={project.image} alt={project.title} width={48} height={48} className="rounded-xl object-cover z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl z-20 pointer-events-none"></div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techImages.map((img, i) => (
                        <Image key={img} src={img} alt={project.tech[i]} width={24} height={24} className="rounded shadow-sm border border-gray-100" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-base mb-4 min-h-[56px] relative z-10">{project.description}</p>
                <div className="flex gap-2 flex-wrap relative z-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      ref={el => {
                        if (!badgeRefs.current[idx]) badgeRefs.current[idx] = []
                        badgeRefs.current[idx][i] = el
                      }}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-100 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 transition-all shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

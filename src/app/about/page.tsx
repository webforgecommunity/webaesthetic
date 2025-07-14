'use client'

import React, { useEffect, useRef } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Users, Star, Heart, TrendingUp, ArrowRight, Linkedin, Github } from 'lucide-react'

// Dynamic GSAP import for SSR safety
let gsap: any = null
if (typeof window !== 'undefined') {
  try {
    gsap = require('gsap').gsap
  } catch (error) {
    console.warn('GSAP not loaded:', error)
  }
}

const heroHeadline = "About Webasthetic";
const highlights = [
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />, 
    title: 'Our Mission',
    desc: 'To empower businesses with innovative, beautiful, and high-performance digital solutions that drive real results.'
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />, 
    title: 'Our Values',
    desc: 'Creativity, integrity, and a relentless pursuit of excellence are at the heart of everything we do.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500" />, 
    title: 'Our Vision',
    desc: 'To be the leading digital agency known for transforming ideas into world-class digital experiences.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />, 
    title: 'Our Team',
    desc: 'A passionate group of designers, developers, and strategists dedicated to your success.'
  },
]

const team = [
  {
    name: 'Ava Smith',
    role: 'CEO & Founder',
    image: '/team-image.png',
    linkedin: '#',
    github: '#',
    bio: 'Visionary leader with 10+ years in digital innovation.'
  },
  {
    name: 'Liam Johnson',
    role: 'Lead Developer',
    image: '/tech_logos/Node.jpeg',
    linkedin: '#',
    github: '#',
    bio: 'Full-stack expert and open-source enthusiast.'
  },
  {
    name: 'Sophia Lee',
    role: 'UI/UX Designer',
    image: '/tech_logos/react.jpeg',
    linkedin: '#',
    github: '#',
    bio: 'Designs beautiful, user-centric digital experiences.'
  },
  {
    name: 'Noah Patel',
    role: 'Project Manager',
    image: '/tech_logos/next.png',
    linkedin: '#',
    github: '#',
    bio: 'Keeps projects on track and clients delighted.'
  },
]

export default function About() {
  // Hero headline split into letters for animation
  const heroLetterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const heroDescRef = useRef<HTMLParagraphElement | null>(null)
  const heroGlowRef = useRef<HTMLDivElement | null>(null)
  const heroBgBlobsRef = useRef<(HTMLDivElement | null)[]>([])
  const heroBlobRef = useRef<HTMLDivElement | null>(null)
  const highlightRefs = useRef<(HTMLDivElement | null)[]>([])
  const teamRefs = useRef<(HTMLDivElement | null)[]>([])

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

  // Animate hero headline letters
  useEffect(() => {
    if (!gsap || !heroLetterRefs.current.length) return
    gsap.fromTo(
      heroLetterRefs.current,
      { opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'expo.out', stagger: 0.06, delay: 0.2 }
    )
  }, [])

  // Animate hero description
  useEffect(() => {
    if (!gsap || !heroDescRef.current) return
    gsap.fromTo(
      heroDescRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out', delay: 0.7 }
    )
  }, [])

  // Animate background blobs and floating blob
  useEffect(() => {
    if (!gsap) return
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
    if (heroBlobRef.current) {
      gsap.fromTo(
        heroBlobRef.current,
        { opacity: 0, scale: 0.7, y: -30 },
        { opacity: 0.25, scale: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: 0.2 }
      )
      gsap.to(heroBlobRef.current, {
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
  }, [])

  // Animate highlight cards
  useEffect(() => {
    if (!gsap) return
    gsap.fromTo(
      highlightRefs.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'expo.out', stagger: 0.15, delay: 0.3 }
    )
  }, [])

  // 3D Card Tilt Effect for highlights
  useEffect(() => {
    if (!gsap) return
    highlightRefs.current.forEach((card) => {
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
          scale: 1.04,
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
  }, [])

  // Animate team cards
  useEffect(() => {
    if (!gsap) return
    gsap.fromTo(
      teamRefs.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'expo.out', stagger: 0.12, delay: 0.4 }
    )
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Animated moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        {/* Animated SVG sparkles/particles */}
        <svg className="absolute left-1/4 top-10 w-32 h-32 opacity-30 animate-sparkle-slow pointer-events-none -z-10" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="30" fill="url(#sparkle1)"/><defs><radialGradient id="sparkle1" cx="0.5" cy="0.5" r="0.5" gradientTransform="rotate(90 .5 .5) scale(1 1)"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient></defs></svg>
        <svg className="absolute right-1/4 bottom-10 w-24 h-24 opacity-20 animate-sparkle-fast pointer-events-none -z-10" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="20" fill="url(#sparkle2)"/><defs><radialGradient id="sparkle2" cx="0.5" cy="0.5" r="0.5" gradientTransform="rotate(90 .5 .5) scale(1 1)"><stop stopColor="#c4b5fd"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient></defs></svg>
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={el => { heroBgBlobsRef.current[0] = el }} className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div ref={el => { heroBgBlobsRef.current[1] = el }} className="absolute top-32 sm:top-40 right-4 sm:right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div ref={el => { heroBgBlobsRef.current[2] = el }} className="absolute bottom-10 sm:bottom-20 left-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>
        {/* Floating animated gradient blob behind headline */}
        <div ref={heroBlobRef} className="absolute left-1/2 -translate-x-1/2 -top-8 w-60 h-24 bg-gradient-to-r from-blue-300 via-purple-200 to-blue-200 rounded-full blur-2xl opacity-20 z-0"></div>
        {/* Mouse-following glow (desktop only) */}
        <div ref={heroGlowRef} className="hidden md:block pointer-events-none absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-white/0 blur-3xl opacity-40 transition-transform duration-200 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {heroHeadline.split('').map((letter, i) => (
                <span
                  key={i}
                  ref={el => { heroLetterRefs.current[i] = el }}
                  className={`inline-block ${letter === ' ' ? 'w-2' : 'mx-0.5'} bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p ref={heroDescRef} className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of creators, technologists, and strategists dedicated to building exceptional digital experiences for the world’s most ambitious brands.
            </p>
          </div>
        </div>
        {/* Custom styles for animated gradient and sparkles */}
        <style jsx>{`
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

      {/* Highlights Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                ref={el => { highlightRefs.current[idx] = el }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 flex flex-col items-center text-center will-change-transform animate-float"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Meet the Team
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={member.name}
                ref={el => { teamRefs.current[idx] = el }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 flex flex-col items-center text-center will-change-transform animate-float hover:scale-105 hover:ring-2 hover:ring-blue-400/30"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100 shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-sm text-blue-500 mb-2">{member.role}</div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a href={member.linkedin} className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a href={member.github} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to work with a passionate team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Let’s create something extraordinary together. Reach out to us and let’s turn your vision into reality.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

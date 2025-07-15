'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Star,
  Heart,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Globe,
  Rocket,
  Award,
  Users,
  Clock,
  Calendar,
  MessageCircle,
  Zap
} from 'lucide-react'
import Image from 'next/image'

// GSAP imports - using dynamic imports to avoid SSR issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let gsap: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ScrollTrigger: any = null

// Dynamic import for client-side only
if (typeof window !== 'undefined') {
  import('gsap').then((module) => {
    gsap = module.gsap
    return import('gsap/ScrollTrigger')
  }).then((module) => {
    ScrollTrigger = module.ScrollTrigger
    if (gsap) {
      gsap.registerPlugin(ScrollTrigger)
    }
  }).catch((error) => {
    console.warn('GSAP not loaded:', error)
  })
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return

    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }

    // Mission section animation
    if (missionRef.current) {
      gsap.fromTo(missionRef.current.children,
        { y: 60, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Values cards animation
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll('.value-card')
      gsap.fromTo(cards,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Stats animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item')
      gsap.fromTo(statItems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    })
  }, [])

  const values = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Excellence",
      description: "We strive for perfection in every pixel, every line of code, and every client interaction."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion",
      description: "Our love for creating beautiful digital experiences drives everything we do."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and integrity."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Results",
      description: "We measure our success by the tangible impact we create for our clients."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Collaboration",
      description: "Working closely with clients as partners to achieve extraordinary outcomes."
    }
  ]

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "10+", label: "Happy Clients", icon: <Heart className="w-6 h-6" /> },
    { number: "2+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "Proven Track Record",
      description: "Years of experience delivering successful projects across various industries."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Fast Delivery",
      description: "Efficient workflows and agile methodologies ensure timely project completion."
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: "Global Perspective",
      description: "Modern solutions built with international standards and best practices."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-purple-500" />,
      title: "Clear Communication",
      description: "Regular updates and transparent communication throughout the project lifecycle."
    }
  ]

  const technologies = [
    { name: "React", logo: "/tech_logos/react.jpeg" },
    { name: "Next.js", logo: "/tech_logos/next.png" },
    { name: "Node.js", logo: "/tech_logos/Node.jpeg" },
    { name: "Python", logo: "/tech_logos/Python.png" },
    { name: "MongoDB", logo: "/tech_logos/MongoDB.png" },
    { name: "PostgreSQL", logo: "/tech_logos/PostgreSQL.png" },
    { name: "AWS", logo: "/tech_logos/AWS.jpg" },
    { name: "Docker", logo: "/tech_logos/Docker.jpg" },
    { name: "Tailwind", logo: "/tech_logos/Tailwind.png" },
    { name: "Firebase", logo: "/tech_logos/Firebase.jpg" },
    { name: "Flutter", logo: "/tech_logos/Flutter.png" },
    { name: "Vue.js", logo: "/tech_logos/Vue.jpeg" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 overflow-hidden min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"></div>
          
          {/* Floating elements */}
          <div className="floating-element absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          <div className="floating-element absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          <div className="floating-element absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-48 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-blue-500 rounded-full opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={heroRef} className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center text-sm font-medium mb-6 sm:mb-8">
              
            </div>
            
            {/* Main heading - Optimized for all screen sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Crafting Digital{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  Excellence
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
              </span>
            </h1>
            
            {/* Description */}
            <div className="mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light">
                We&apos;re a creative digital agency specializing in innovative web solutions, stunning designs, and powerful applications that drive business growth.
              </p>
              
              {/* Key highlights */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm md:text-base text-gray-500 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span>Elite Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  <span>10+ Successful Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <span>Global Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                  <span>Cutting-Edge Technology</span>
                </div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link 
                href="/portfolio"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 inline-flex items-center gap-3 overflow-hidden w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10 text-sm sm:text-base lg:text-lg">View Our Work</span>
              </Link>
              
              <Link 
                href="/contact"
                className="group relative border-2 border-blue-200 bg-white/80 backdrop-blur-sm text-blue-700 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <span className="text-sm sm:text-base lg:text-lg">Start Your Project</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={missionRef} className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-blue-100">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span>Our Mission & Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Driving Digital{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We believe in transforming businesses through innovative digital solutions that create lasting impact and drive sustainable growth.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Side - Mission & Vision Cards */}
              <div className="space-y-6 sm:space-y-8">
                {/* Mission Card */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-3xl border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Our Mission</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in the digital landscape through cutting-edge technology and creative excellence.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-3xl border border-purple-200 hover:border-purple-300 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Our Vision</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      To be the leading digital agency recognized globally for transforming ideas into exceptional digital experiences that inspire, engage, and drive measurable business success across all industries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Interactive Feature Card */}
              <div className="relative">
                <div className="group relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-10 text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700/50 to-purple-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold">What Drives Us</h3>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {[
                        { icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />, text: "Client success is our top priority" },
                        { icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />, text: "Innovation in every solution we create" },
                        { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />, text: "Quality without compromise" },
                        { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />, text: "Building long-term partnerships" },
                        { icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />, text: "Pushing boundaries of possibility" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4 group/item">
                          <div className="text-blue-200 group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300">
                            {item.icon}
                          </div>
                          <span className="text-base sm:text-lg leading-relaxed group-hover/item:text-blue-100 transition-colors duration-300">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 sm:mt-10">
                      <Link 
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 group/btn border border-white/20 hover:border-white/40"
                      >
                        <span className="text-sm sm:text-base">Let&apos;s Work Together</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats/Metrics */}
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {[
                  { number: "100%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { number: "10+", label: "Projects Delivered", icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { number: "2+", label: "Years of Excellence", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> }
                ].map((stat, index) => (
                  <div key={index} className="group text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="text-blue-600 mb-2 sm:mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we create.
            </p>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="value-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group-hover:scale-105">
                  <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="group bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to build scalable and modern solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech) => (
              <div key={tech.name} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 aspect-square flex flex-col items-center justify-center group-hover:scale-110">
                  <Image 
                    src={tech.logo} 
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-blue-200" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              Ready to Start Your <span className="text-blue-200">Journey?</span>
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s collaborate to transform your ideas into exceptional digital experiences that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-3 group hover:bg-blue-50 text-lg"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/portfolio"
                className="border-2 border-blue-200 text-blue-100 px-10 py-5 rounded-2xl font-semibold hover:bg-blue-500/20 transition-all duration-300 inline-flex items-center gap-3 text-lg"
              >
                <span>View Our Portfolio</span>
                <Sparkles className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

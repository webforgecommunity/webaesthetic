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
      <section className="relative pt-20 pb-20 sm:pt-32 sm:pb-28 overflow-hidden min-h-[85vh] flex items-center">
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
            {/* <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-blue-100">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>About Webasthetic</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div> */}
            
            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-8 leading-tight">
              Crafting Digital{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  Excellence
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
              </span>
            </h1>
            
            {/* Description */}
            <div className="mb-12 max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 leading-relaxed font-light">
                We&apos;re a creative digital agency specializing in innovative web solutions, stunning designs, and powerful applications that drive business growth.
              </p>
              
              {/* Key highlights */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm sm:text-base text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Elite Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>10+ Successful Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span>Global Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-500" />
                  <span>Cutting-Edge Technology</span>
                </div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/portfolio"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 inline-flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10 text-lg">View Our Work</span>
              </Link>
              
              <Link 
                href="/contact"
                className="group relative border-3 border-blue-200 bg-white/80 backdrop-blur-sm text-blue-700 px-10 py-5 rounded-2xl font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              >
                <span className="text-lg">Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={missionRef} className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in the digital landscape.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl border border-purple-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be the leading digital agency recognized globally for transforming ideas into exceptional digital experiences that inspire and engage.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6">What Drives Us</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <span>Client success is our priority</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <span>Innovation in every solution</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <span>Quality without compromise</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <span>Long-term partnerships</span>
                      </li>
                    </ul>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>
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

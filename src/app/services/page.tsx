'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Smartphone, 
  ShoppingCart, 
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
  Award
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

// Services data with comprehensive information
const services = [
  {
    id: 1,
    title: 'Web Development',
    subtitle: 'Full-Stack Solutions',
    description: 'We create powerful, scalable web applications using cutting-edge technologies like React, Next.js, and Node.js. From concept to deployment, we handle everything.',
    slug: 'web-development',
    icon: Code,
    image: '/tech_logos/react.jpeg',
    features: ['Custom Web Applications', 'Progressive Web Apps', 'API Development', 'Database Design'],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    techImages: ['/tech_logos/react.jpeg', '/tech_logos/next.png', '/tech_logos/Node.jpeg'],
    price: 'Starting from $2,999',
    timeline: '4-8 weeks',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    category: 'Development'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    subtitle: 'Cross-Platform Excellence',
    description: 'Native-quality mobile apps for iOS and Android using React Native and Flutter. Reach your audience wherever they are with seamless user experiences.',
    slug: 'mobile-app-development',
    icon: Smartphone,
    image: '/tech_logos/Flutter.png',
    features: ['Cross-Platform Apps', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Swift'],
    techImages: ['/tech_logos/React Native.png', '/tech_logos/Flutter.png', '/tech_logos/Firebase.jpg'],
    price: 'Starting from $4,999',
    timeline: '6-12 weeks',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    category: 'Mobile'
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    subtitle: 'Online Store Excellence',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics. Turn your products into profit with our proven solutions.',
    slug: 'e-commerce-solutions',
    icon: ShoppingCart,
    image: '/tech_logos/next.png',
    features: ['Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Multi-vendor Support'],
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    techImages: ['/tech_logos/next.png', '/tech_logos/MongoDB.png', '/tech_logos/AWS.jpg'],
    price: 'Starting from $3,999',
    timeline: '6-10 weeks',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    category: 'E-commerce'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    subtitle: 'Beautiful & Functional',
    description: 'User-centered design that combines aesthetics with functionality. We create interfaces that users love and convert visitors into customers.',
    slug: 'ui-ux-design',
    icon: Palette,
    image: '/tech_logos/react.jpeg',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    techImages: ['/tech_logos/react.jpeg', '/tech_logos/next.png'],
    price: 'Starting from $1,999',
    timeline: '3-6 weeks',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    category: 'Design'
  },
  {
    id: 5,
    title: 'SEO Optimization',
    subtitle: 'Search Engine Mastery',
    description: 'Boost your online visibility with our proven SEO strategies. We optimize your website to rank higher and attract more qualified traffic.',
    slug: 'seo-optimization',
    icon: Search,
    image: '/tech_logos/Google Cloud.jpeg',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    techImages: ['/tech_logos/Google Cloud.jpeg'],
    price: 'Starting from $999/month',
    timeline: '3-6 months',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    category: 'Marketing'
  },
  {
    id: 6,
    title: 'Shopify Development',
    subtitle: 'E-commerce Excellence',
    description: 'Custom Shopify stores with advanced features, themes, and integrations. From setup to optimization, we create stores that convert.',
    slug: 'shopify-development',
    icon: ShoppingCart,
    image: '/tech_logos/next.png',
    features: ['Custom Shopify Themes', 'App Development', 'Payment Integration', 'Store Optimization'],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'React'],
    techImages: ['/tech_logos/next.png', '/tech_logos/react.jpeg'],
    price: 'Starting from $2,499',
    timeline: '3-6 weeks',
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-50 to-teal-50',
    category: 'E-commerce'
  },
  {
    id: 7,
    title: 'WordPress Development',
    subtitle: 'CMS Solutions',
    description: 'Professional WordPress websites with custom themes, plugins, and functionality. Secure, fast, and easy to manage.',
    slug: 'wordpress-development',
    icon: Code,
    image: '/tech_logos/PHP.png',
    features: ['Custom Themes', 'Plugin Development', 'SEO Optimization', 'Security Setup'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    techImages: ['/tech_logos/PHP.png', '/tech_logos/MySQL.jpeg'],
    price: 'Starting from $1,799',
    timeline: '2-5 weeks',
    gradient: 'from-blue-500 to-purple-500',
    bgGradient: 'from-blue-50 to-purple-50',
    category: 'CMS'
  },
  {
    id: 8,
    title: 'API Development',
    subtitle: 'Backend Excellence',
    description: 'Robust RESTful and GraphQL APIs that power your applications. Secure, scalable, and well-documented backend solutions for any platform.',
    slug: 'api-development',
    icon: Code,
    image: '/tech_logos/Node.jpeg',
    features: ['REST & GraphQL APIs', 'Database Integration', 'Authentication & Security', 'API Documentation'],
    technologies: ['Node.js', 'Express', 'GraphQL', 'MongoDB'],
    techImages: ['/tech_logos/Node.jpeg', '/tech_logos/MongoDB.png'],
    price: 'Starting from $2,499',
    timeline: '3-6 weeks',
    gradient: 'from-teal-500 to-green-500',
    bgGradient: 'from-teal-50 to-green-50',
    category: 'Backend'
  },
  {
    id: 9,
    title: 'DevOps & Automation',
    subtitle: 'Streamlined Operations',
    description: 'Automate your deployment pipelines, monitoring, and infrastructure. Increase productivity and reduce downtime with modern DevOps practices.',
    slug: 'devops-automation',
    icon: Rocket,
    image: '/tech_logos/Docker.jpg',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerts', 'Performance Optimization'],
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    techImages: ['/tech_logos/Docker.jpg', '/tech_logos/Kubernetes.jpg'],
    price: 'Starting from $1,999',
    timeline: '2-5 weeks',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    category: 'Operations'
  },
  {
    id: 10,
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Solutions',
    description: 'Leverage AI and ML to automate processes, gain insights, and create intelligent features. From chatbots to predictive analytics.',
    slug: 'ai-machine-learning',
    icon: Sparkles,
    image: '/tech_logos/Python.png',
    features: ['Chatbots & AI Assistants', 'Predictive Analytics', 'Computer Vision', 'Natural Language Processing'],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'Hugging Face'],
    techImages: ['/tech_logos/Python.png'],
    price: 'Starting from $4,999',
    timeline: '8-16 weeks',
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
    category: 'AI/ML'
  },
  {
    id: 11,
    title: 'CMS Development',
    subtitle: 'Content Management',
    description: 'Custom content management systems that give you full control over your content. Easy to use interfaces with powerful admin capabilities.',
    slug: 'cms-development',
    icon: Palette,
    image: '/tech_logos/next.png',
    features: ['Custom CMS', 'Content Workflow', 'Multi-user Access', 'Media Management'],
    technologies: ['Next.js', 'Sanity', 'Strapi', 'MongoDB'],
    techImages: ['/tech_logos/next.png', '/tech_logos/MongoDB.png'],
    price: 'Starting from $2,799',
    timeline: '4-8 weeks',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    category: 'Content'
  },
  {
    id: 12,
    title: 'Database Design',
    subtitle: 'Data Architecture',
    description: 'Optimize your data storage and retrieval with expertly designed databases. From SQL to NoSQL, we ensure performance and scalability.',
    slug: 'database-design',
    icon: Shield,
    image: '/tech_logos/PostgreSQL.png',
    features: ['Database Architecture', 'Performance Optimization', 'Data Migration', 'Backup Strategies'],
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    techImages: ['/tech_logos/PostgreSQL.png', '/tech_logos/MongoDB.png', '/tech_logos/MySQL.jpeg'],
    price: 'Starting from $1,799',
    timeline: '2-4 weeks',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    category: 'Database'
  }
]

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
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
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  ref={el => { serviceCardsRef.current[idx] = el }}
                  className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden ${
                    hoveredCard === idx ? 'z-10' : ''
                  }`}
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Service Icon & Header */}
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{service.category}</div>
                        <div className="flex items-center gap-1 mt-1">                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{service.subtitle}</p>

                    {/* Service Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Technologies</div>
                      <div className="flex items-center gap-2 mb-3">
                        {service.techImages.slice(0, 3).map((img, idx) => (
                          <Image 
                            key={idx}
                            src={img} 
                            alt="" 
                            width={24} 
                            height={24} 
                            className="rounded-lg shadow-sm"
                          />
                        ))}
                        {service.technologies.length > 3 && (
                          <div className="text-xs text-gray-500">+{service.technologies.length - 3}</div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-xs text-gray-500 mb-1">Category</div>
                        <div className="font-bold text-gray-900">{service.category}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-xs text-gray-500 mb-1">Timeline</div>
                        <div className="font-bold text-gray-900">{service.timeline}</div>
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Link href={`/services/${service.slug}`} className={`w-full bg-gradient-to-r ${service.gradient} text-white px-4 sm:px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm sm:text-base`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              )
            })}
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



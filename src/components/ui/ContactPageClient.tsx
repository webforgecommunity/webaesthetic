'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  Mail, 
  Phone, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Send,
  Star,
  Users,
  Clock,
  ChevronDown
} from 'lucide-react'

export default function ContactPageClient() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const formHeaderRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOtherService, setShowOtherService] = useState(false)
  const [countryCode, setCountryCode] = useState('+91')
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    otherService: '',
    budget: '',
    projectDetails: ''
  })

  const services = [
    'Website Development',
    'Mobile App Development',
    'E-commerce',
    'AI/ML Implementation',
    'Odoo Development',
    'WordPress Development',
    'Shopify Development',
    'Custom Software',
    'SEO Optimization',
    'UI/UX Design',
    'Digital Marketing',
    'API Development',
    'Database Design',
    'CMS Development',
    'DevOps Services',
    'Maintenance & Support',
    'Others'
  ]
  
  const budgetRanges = ['Under ₹10,000', '₹10,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹5,00,000', '₹5,00,000+']

  const countryCodes = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    { code: '+44', name: 'UK', flag: '🇬🇧' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+971', name: 'UAE', flag: '🇦🇪' }
  ]

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).gsap) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gsap = (window as any).gsap

      // Hero animations
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.children, 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        )
      }

      // Cards animation with scroll trigger
      if (cardsRef.current) {
        gsap.set(cardsRef.current.children, { y: 80, opacity: 0, scale: 0.8 })
        gsap.to(cardsRef.current.children, {
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Form header animation
      if (formHeaderRef.current) {
        gsap.set(formHeaderRef.current.children, { y: 50, opacity: 0 })
        gsap.to(formHeaderRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formHeaderRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Form animation - only run once
      if (formRef.current) {
        const formItems = formRef.current.querySelectorAll('.form-item')
        gsap.set(formItems, { y: 30, opacity: 0 })
        gsap.to(formItems, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
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
    }
  }, []) // Remove showCountryDropdown from dependencies

  // Separate useEffect for click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCountryDropdown) {
        const target = event.target as HTMLElement
        if (!target.closest('.country-dropdown')) {
          setShowCountryDropdown(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showCountryDropdown])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))

    if (service === 'Others') {
      setShowOtherService(!formData.services.includes(service))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      services: [],
      otherService: '',
      budget: '',
      projectDetails: ''
    })
    
    setIsSubmitting(false)
    setShowOtherService(false)
    alert('Thank you for your message! We&apos;ll get back to you soon.')
  }

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((window as any).gsap) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-explicit-any
            (window as any).gsap.registerPlugin((window as any).ScrollTrigger)
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 sm:pt-32 sm:pb-28 overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"></div>
          
          {/* Floating elements with better positioning */}
          <div className="floating-element absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          <div className="floating-element absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          <div className="floating-element absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-48 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-blue-500 rounded-full opacity-30 animate-pulse delay-2000"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={heroRef} className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3  mb-8 shadow-lg border border-blue-100 hover:scale-105 transition-transform duration-300">
              {/* <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Let&apos;s Start a Conversation</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> */}
            </div>
            
            {/* Main heading with enhanced typography */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-8 leading-tight">
              Get in{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  Touch
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl -z-10 blur-xl opacity-50"></div>
              </span>
            </h1>
            
            {/* Enhanced description */}
            <div className="mb-12 max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 leading-relaxed font-light">
                Ready to transform your digital presence? Let&apos;s discuss your project and bring your vision to life.
              </p>
              
              {/* Stats or trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm sm:text-base text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>10+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span>Quick Response</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="tel:+1234567890"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 inline-flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10 text-lg">Call Now</span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </Link>
              
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative border-3 border-blue-200 bg-white/80 backdrop-blur-sm text-blue-700 px-10 py-5 rounded-2xl font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
              >
                <span className="text-lg">Schedule Meeting</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Scroll indicator */}
            {/* Removed scroll indicator as requested */}
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%), 
                             linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, rgba(99, 102, 241, 0.1) 75%), 
                             linear-gradient(-45deg, transparent 75%, rgba(99, 102, 241, 0.1) 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred method to get in touch with our expert team.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Email Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Get a response within 48 hours from our team</p>
                <Link 
                  href="mailto:webasthetic.solutions@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 group/link transition-colors duration-300 break-all"
                >
                  <span className="break-all">webasthetic.solutions@gmail.com</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                </Link>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Monday to Friday, 9AM to 6PM IST</p>
                <Link 
                  href="tel:+1234567890" 
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 group/link transition-colors duration-300"
                >
                  +1 (234) 567-890
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Schedule Meeting Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Meeting</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Book a personalized consultation session</p>
                <Link 
                  href="https://calendly.com/webasthetic-meeting" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2 group/link transition-colors duration-300"
                >
                  Schedule Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          
          {/* Geometric patterns */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-blue-200/30 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 border border-purple-200/30 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Form Header */}
            <div ref={formHeaderRef} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Send Us a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Message</span>
              </h2>
              
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-xl sm:text-2xl text-gray-600 mb-6 leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed proposal.
                </p>
                
                {/* Process steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-lg">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fill the Form</h3>
                    <p className="text-sm text-gray-600 text-center">Share your project details with us</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-lg">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">We Analyze</h3>
                    <p className="text-sm text-gray-600 text-center">Our team reviews your requirements</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-lg">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Get Proposal</h3>
                    <p className="text-sm text-gray-600 text-center">Receive a detailed project proposal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Form Card */}
            <div ref={formRef} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              {/* Form card background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-item">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-gray-50 focus:bg-white text-lg"
                    />
                  </div>
                  
                  <div className="form-item">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-gray-50 focus:bg-white text-lg"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-item">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-gray-50 focus:bg-white text-lg"
                    />
                  </div>
                  
                  <div className="form-item">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <div className="relative flex">
                      {/* Country Code Dropdown */}
                      <div className="relative country-dropdown z-[1000]">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setShowCountryDropdown(!showCountryDropdown)
                          }}
                          className="flex items-center gap-2 px-4 py-4 border-2 border-gray-200 border-r-0 rounded-l-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px] relative z-[100]"
                        >
                          <span className="text-lg">
                            {countryCodes.find(c => c.code === countryCode)?.flag}
                          </span>
                          <span className="font-medium text-gray-700">{countryCode}</span>
                          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${showCountryDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown Menu with Portal-like positioning */}
                        {showCountryDropdown && (
                          <>
                            {/* Backdrop to prevent scroll */}
                            <div className="fixed inset-0 z-[9998]" onClick={() => setShowCountryDropdown(false)}></div>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-200 rounded-2xl shadow-2xl z-[9999] max-h-60 overflow-y-auto overscroll-contain">
                              {countryCodes.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setCountryCode(country.code)
                                    setShowCountryDropdown(false)
                                  }}
                                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200 text-left border-b border-gray-100 last:border-b-0 first:rounded-t-2xl last:rounded-b-2xl"
                                >
                                  <span className="text-lg">{country.flag}</span>
                                  <span className="font-medium text-gray-700">{country.code}</span>
                                  <span className="text-sm text-gray-500 truncate">{country.name}</span>
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Phone Input */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-r-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-gray-50 focus:bg-white text-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name */}
                <div className="form-item">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-gray-50 focus:bg-white text-lg"
                  />
                </div>

                {/* Services Interested In */}
                <div className="form-item">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceChange(service)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border-2 ${
                          formData.services.includes(service)
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  
                  {/* Other Service Input */}
                  {showOtherService && (
                    <div className="mt-4">
                      <input
                        type="text"
                        name="otherService"
                        value={formData.otherService}
                        onChange={handleInputChange}
                        placeholder="Please specify the service you need..."
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-gray-50 focus:bg-white text-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Budget */}
                <div className="form-item">
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Budget
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-gray-50 focus:bg-white text-lg appearance-none cursor-pointer"
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="py-2 px-4 text-gray-700 bg-white hover:bg-blue-50">
                          {range}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-item">
                  <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements. The more details you provide, the better we can help you..."
                    rows={6}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 resize-none bg-gray-50 focus:bg-white text-lg"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-item">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 inline-flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed text-xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                        <span className="relative z-10">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Notice */}
                <div className="form-item">
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                      privacy policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 underline font-medium">
                      terms of service
                    </Link>
                    . We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}
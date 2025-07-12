import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Zap, CheckCircle, Star, Users, Smartphone, Globe, ShoppingCart, Bot, Cloud, Search, Settings, Cpu, Database, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AnimatedHero from '@/components/ui/AnimatedHero'
import AnimatedImage from '@/components/ui/AnimatedImage'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated background elements - Responsive */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-32 sm:top-40 right-4 sm:right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-4 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[500px] sm:min-h-[580px] lg:min-h-[620px]">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <AnimatedHero />

              {/* Reviews Section */}
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">50+</span>
                  </div>
                </div>
                <div className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
                  <span className="font-semibold text-gray-900">500+ Projects Delivered</span>
                </div>
              </div>

              {/* Image Placeholder - Mobile Only */}
              <div className="relative flex justify-center items-center lg:hidden my-8">
                <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
                  {/* Main Image Container */}
                  <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl transform hover:scale-105 transition-all duration-300 animate-float">
                    <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/team-image.png" 
                        alt="Professional development team collaborating on innovative projects"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating Elements - Mobile */}
                  <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-bounce-slow flex items-center justify-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full animate-bounce-slow delay-1000 flex items-center justify-center">
                    <Palette className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-4 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1/4 -right-3 sm:-right-4 w-2 h-2 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping delay-500"></div>
                </div>
              </div>

              {/* Trust Logos */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 uppercase tracking-wide font-medium text-center lg:text-left">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  <div className="text-sm sm:text-base font-bold text-gray-400 hover:text-gray-600 transition-colors">TECHCORP</div>
                  <div className="text-sm sm:text-base font-bold text-gray-400 hover:text-gray-600 transition-colors">INNOVATE</div>
                  <div className="text-sm sm:text-base font-bold text-gray-400 hover:text-gray-600 transition-colors">DIGITEX</div>
                  <div className="text-sm sm:text-base font-bold text-gray-400 hover:text-gray-600 transition-colors">WEBFLOW</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Placeholder - Desktop Only */}
            <AnimatedImage />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-0.5 sm:px-1 lg:px-1.5">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Partner With 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Webasthetic</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We're your strategic partners in digital transformation with expertise that delivers results.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Code className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-blue-600" />
                </div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Expert Development</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Full-stack development with cutting-edge technologies. From React & Next.js to Node.js & Python, 
                we build scalable, high-performance applications that grow with your business.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Palette className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-purple-600" />
                </div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Beautiful Design</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                UI/UX design that converts. We create intuitive, engaging interfaces that reflect your brand 
                and deliver exceptional user experiences across all devices and platforms.
              </p>
            </div>
            
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Zap className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-green-600" />
                </div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Lightning Fast</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Optimized for speed and performance. Our applications load instantly, rank higher in search engines, 
                and provide smooth experiences that keep users engaged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden border-t border-gray-100">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-0.5 sm:px-1 lg:px-1.5 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Solutions</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From mobile apps to AI automation, we offer comprehensive digital services to transform your business and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Website Development */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <Monitor className="h-8 w-8 sm:h-9 sm:w-9 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">Website Development</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Modern, responsive websites built with cutting-edge technologies
                </p>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <Smartphone className="h-8 w-8 sm:h-9 sm:w-9 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">Mobile App Development</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Native iOS & Android apps with stunning UI and performance
                </p>
              </div>
            </div>

            {/* E-commerce */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <ShoppingCart className="h-8 w-8 sm:h-9 sm:w-9 text-orange-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">E-commerce</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Powerful online stores with secure payments and management
                </p>
              </div>
            </div>

            {/* AI/ML Implementation */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <Cpu className="h-8 w-8 sm:h-9 sm:w-9 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">AI/ML Implementation</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Advanced machine learning solutions for data-driven insights
                </p>
              </div>
            </div>

            {/* Odoo Development */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <Database className="h-8 w-8 sm:h-9 sm:w-9 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">Odoo Development</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Complete ERP solutions with custom modules and integrations
                </p>
              </div>
            </div>

            {/* WordPress Development */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <Globe className="h-8 w-8 sm:h-9 sm:w-9 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">WordPress Development</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Custom WordPress themes and plugins for your business needs
                </p>
              </div>
            </div>

            {/* Custom Software Development */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <Settings className="h-8 w-8 sm:h-9 sm:w-9 text-orange-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">Custom Software</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Software solutions designed for your requirements
                </p>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="group relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <Search className="h-8 w-8 sm:h-9 sm:w-9 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">SEO Optimization</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Complete SEO strategies to boost your online visibility
                </p>
              </div>
            </div>
          </div>

          {/* View All Services */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Explore our complete range of digital services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Link href="/services" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Our Execution Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-0.5 sm:px-1 lg:px-1.5 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 sm:mb-8">
              <span className="text-sm sm:text-base font-medium text-blue-800">How We Work</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Execution Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A systematic approach to deliver exceptional results, from initial consultation to ongoing support and maintenance.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative max-w-7xl mx-auto">
            {/* Animated Progress Line - Desktop */}
            <div className="hidden xl:block absolute top-20 h-2 bg-gray-200 rounded-full overflow-hidden" style={{ left: '8.33%', right: '8.33%' }}>
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-progress-line-enhanced shadow-lg"></div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 sm:gap-6 lg:gap-4">
              {/* Step 1 - Research */}
              <div className="text-center group animate-step-appear" style={{ animationDelay: '0.5s' }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-xl border-4 border-white z-10 relative">
                    <Search className="h-10 w-10 sm:h-11 sm:w-11 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">01</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Research</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    Consultation and Requirements gathering
                  </p>
                </div>
              </div>

              {/* Step 2 - Design */}
              <div className="text-center group animate-step-appear" style={{ animationDelay: '1s' }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 shadow-xl border-4 border-white z-10 relative">
                    <Palette className="h-10 w-10 sm:h-11 sm:w-11 text-purple-600" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">02</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Design</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    Product Architecture, Design, & Prototype
                  </p>
                </div>
              </div>

              {/* Step 3 - Development */}
              <div className="text-center group animate-step-appear" style={{ animationDelay: '1.5s' }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-xl border-4 border-white z-10 relative">
                    <Code className="h-10 w-10 sm:h-11 sm:w-11 text-green-600" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">03</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Development</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    Software Coding & Optimization
                  </p>
                </div>
              </div>

              {/* Step 4 - Testing */}
              <div className="text-center group animate-step-appear" style={{ animationDelay: '2s' }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 shadow-xl border-4 border-white z-10 relative">
                    <CheckCircle className="h-10 w-10 sm:h-11 sm:w-11 text-orange-600" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">04</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Testing</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    Quality Assurance & Trouble-shooting
                  </p>
                </div>
              </div>

              {/* Step 5 - Deployment */}
              <div className="text-center group animate-step-appear" style={{ animationDelay: '2.5s' }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-xl border-4 border-white z-10 relative">
                    <Zap className="h-10 w-10 sm:h-11 sm:w-11 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">05</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Deployment</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    Launch, Beta Live, & Live
                  </p>
                </div>
              </div>

              {/* Step 6 - Maintenance */}
              <div className="text-center group animate-step-appear" style={{ animationDelay: '3s' }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 shadow-xl border-4 border-white z-10 relative">
                    <Settings className="h-10 w-10 sm:h-11 sm:w-11 text-purple-600" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">06</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Maintenance</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    Monitoring, Analysis, & Complete Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-3000"></div>
        </div>

        <div className="container mx-auto px-0.5 sm:px-1 lg:px-1.5 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span> We Master
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools to build scalable, secure, and high-performance solutions.
            </p>
          </div>

          {/* Technology Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Front-end */}
            <div className="group animate-step-appear" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Front-end</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#61DAFB"/>
                        <circle cx="12" cy="12" r="4" fill="#000"/>
                        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none"/>
                        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none" transform="rotate(-60 12 12)"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">React</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#DD0031" d="M12 2L2 6l1.5 13L12 22l8.5-3L22 6L12 2z"/>
                        <path fill="#C3002F" d="M12 2v20l8.5-3L22 6L12 2z"/>
                        <path fill="#FFFFFF" d="M12 4.5L8 17.5h1.5l1-2.5h3l1 2.5H16L12 4.5z"/>
                        <path fill="#FFFFFF" d="M10.5 12.5L12 8.5l1.5 4h-3z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Angular</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#4FC08D" d="M4 3l8 13 8-13h-3L12 9 7 3H4z"/>
                        <path fill="#35495E" d="M7 3l5 8 5-8h-2L12 7 9 3H7z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Vue.js</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#000"/>
                        <path fill="#FFF" d="M13.5 6.5V12l4.5-3.5h-4.5z"/>
                        <path fill="#FFF" d="M6 6.5h4.5V12L6 8.5v-2z"/>
                        <path fill="#FFF" d="M13.5 13v5.5l4.5-2.75V13h-4.5z"/>
                        <path fill="#FFF" d="M6 13v2.75L10.5 18.5V13H6z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Next.js</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#06B6D4" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Tailwind</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#02569B" d="M14.314 0L12 2.314 9.686 0 8.372 1.314l1.314 1.314L8.372 4L9.686 5.314 12 3l2.314 2.314L15.628 4l-1.314-1.372L15.628 1.314z"/>
                        <path fill="#40C4FF" d="M12 6.857L6.857 12 12 17.143 17.143 12z"/>
                        <path fill="#40C4FF" d="M12 19.457L6.543 24H17.457z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Flutter</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back-end */}
            <div className="group animate-step-appear" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-200 hover:border-purple-300 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Back-end</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#339933" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-1.21 5.417c-.527-.126-1.1-.126-1.627 0-.574.138-.886.138-1.46 0-.527-.126-1.1-.126-1.627 0C5.09 5.91 4.34 7.417 4.34 9.167c0 1.75.75 3.257 1.746 3.75.527.264 1.1.264 1.627 0 .574-.138.886-.138 1.46 0 .527.264 1.1.264 1.627 0 .996-.493 1.746-2 1.746-3.75 0-1.75-.75-3.257-1.746-3.75z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Node.js</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#3776AB" d="M12 0c-1.3 0-2.4.2-3.4.7L11.3 4c.4-.1.9-.1 1.4 0L15.4.7C14.4.2 13.3 0 12 0zm7.7 3.3c-.8-.7-1.8-1.2-2.9-1.6L14.2 5c.5.2.9.5 1.3.9l3.7-2.6c-.2-.3-.4-.7-.6-1zm1.6 2.9c-.4-1.1-.9-2.1-1.6-2.9l-2.6 3.7c.4.4.7.8.9 1.3l3.3-2.1zM24 12c0-1.3-.2-2.4-.7-3.4L20 11.3c.1.4.1.9 0 1.4l3.3 2.7c.5-1 .7-2.1.7-3.4zM20.7 8.6c-.2-.5-.5-.9-.9-1.3l2.6-3.7c-.8-.7-1.8-1.2-2.9-1.6l-2.1 3.3c.5.2.9.5 1.3.9l2-1.6z"/>
                        <circle cx="12" cy="12" r="4" fill="#FFD43B"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Python</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#ED8B00" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z"/>
                        <path fill="#FFF" d="M8.5 7h7v2h-7z"/>
                        <path fill="#FFF" d="M8.5 10h7v2h-7z"/>
                        <path fill="#FFF" d="M8.5 13h5v2h-5z"/>
                        <path fill="#FFF" d="M8.5 16h3v1h-3z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Java</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#239120" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z"/>
                        <path fill="#FFF" d="M7 8h10v2H7z"/>
                        <path fill="#FFF" d="M7 11h6v2H7z"/>
                        <path fill="#FFF" d="M7 14h8v2H7z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">C#</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4"/>
                        <ellipse cx="12" cy="12" rx="8" ry="5" fill="#FFF"/>
                        <text x="12" y="15" textAnchor="middle" fontSize="8" fill="#777BB4" fontWeight="bold">PHP</text>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">PHP</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#CE422B" d="M23.8 8.5c-.2-1.4-.9-2.7-2-3.7l-6.5-6.5c-1-1.1-2.3-1.8-3.7-2h-.8c-1.4.2-2.7.9-3.7 2L.6 4.8c-1.1 1-1.8 2.3-2 3.7v.8c.2 1.4.9 2.7 2 3.7l6.5 6.5c1 1.1 2.3 1.8 3.7 2h.8c1.4-.2 2.7-.9 3.7-2l6.5-6.5c1.1-1 1.8-2.3 2-3.7v-.8z"/>
                        <path fill="#FFF" d="M8 12l3-3 3 3"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Rust</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="group animate-step-appear" style={{ animationDelay: '0.6s' }}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-green-200 hover:border-green-300 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Project Management</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="3" fill="#0052CC"/>
                        <path fill="#FFF" d="M6 8h12v2H6z"/>
                        <path fill="#FFF" d="M6 11h8v2H6z"/>
                        <path fill="#FFF" d="M6 14h10v2H6z"/>
                        <circle cx="18" cy="9" r="2" fill="#36B37E"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Jira</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="3" fill="#0079BF"/>
                        <rect x="4" y="6" width="16" height="2" rx="1" fill="#FFF"/>
                        <rect x="4" y="10" width="12" height="2" rx="1" fill="#FFF"/>
                        <rect x="4" y="14" width="8" height="2" rx="1" fill="#FFF"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Trello</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11" fill="#F06A6A"/>
                        <path fill="#FFF" d="M8 7l3 3-3 3m4-6h6"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Asana</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="5" fill="#FF3D57"/>
                        <circle cx="8" cy="12" r="2" fill="#FFF"/>
                        <circle cx="16" cy="12" r="2" fill="#FFF"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Monday</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="6" fill="#7B68EE"/>
                        <path fill="#FFF" d="M6 8h12v1.5H6z"/>
                        <path fill="#FFF" d="M6 11h8v1.5H6z"/>
                        <path fill="#FFF" d="M6 14h10v1.5H6z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">ClickUp</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="3" fill="#000"/>
                        <path fill="#FFF" d="M4 6h16v2H4z"/>
                        <path fill="#FFF" d="M4 10h12v2H4z"/>
                        <path fill="#FFF" d="M4 14h8v2H4z"/>
                        <path fill="#FFF" d="M4 18h6v2H4z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Notion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="group animate-step-appear" style={{ animationDelay: '1.0s' }}>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-indigo-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Mobile Development</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#A6B1B7" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">iOS</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#A4C639" d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6718 0 18.761h24c-.3435-4.0892-2.6892-7.5743-6.1185-9.4396"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Android</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#02569B" d="M14.314 0L12 2.314 9.686 0 8.372 1.314l1.314 1.314L8.372 4l1.314 1.314L12 3l2.314 2.314L15.628 4l-1.314-1.372L15.628 1.314z"/>
                        <path fill="#40C4FF" d="M12 6.857L6.857 12 12 17.143 17.143 12z"/>
                        <path fill="#40C4FF" d="M12 19.457L6.543 24H17.457z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Flutter</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#61DAFB"/>
                        <circle cx="12" cy="12" r="4" fill="#000"/>
                        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none"/>
                        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#000" strokeWidth="1" fill="none" transform="rotate(-60 12 12)"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">React Native</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11" fill="#4E8EF7"/>
                        <path fill="#FFF" d="M6.5 8.5h11v7h-11z"/>
                        <path fill="#4E8EF7" d="M8 10h8v3H8z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Ionic</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="3" fill="#3498DB"/>
                        <path fill="#FFF" d="M6 8h12v2H6z"/>
                        <path fill="#FFF" d="M6 11h8v2H6z"/>
                        <path fill="#FFF" d="M6 14h10v2H6z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Xamarin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="group animate-step-appear" style={{ animationDelay: '1.2s' }}>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-teal-200 hover:border-teal-300 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Database</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791"/>
                        <path fill="#336791" d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/>
                        <path fill="#336791" d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#00758F" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.152z"/>
                        <path fill="#CE8B2C" d="M18.79 15.29l-1.115-1.773c-.042-.064-.09-.125-.145-.18-.14-.133-.303-.24-.456-.36-.24-.19-.473-.4-.688-.633-.17-.184-.3-.397-.454-.580-.206-.244-.385-.518-.514-.809-.108-.24-.16-.505-.154-.777 0-.297.061-.593.154-.877.096-.284.24-.556.415-.777.35-.442.831-.719 1.344-.834.513-.115 1.06-.047 1.542.193.964.479 1.517 1.458 1.435 2.456-.04.497-.206.973-.475 1.379-.135.203-.296.388-.475.548-.179.16-.385.282-.606.36-.442.156-.924.110-1.35-.125-.085-.047-.17-.109-.256-.125-.042-.008-.085-.017-.128-.008-.043.009-.085.043-.128.125-.021.040-.043.086-.043.125.021.105.088.184.154.25.132.132.298.24.475.313.35.144.731.167 1.094.071.182-.048.357-.137.513-.274.312-.274.536-.67.668-1.094.065-.212.1-.43.115-.648.015-.218.015-.437-.014-.656-.058-.437-.207-.86-.417-1.234-.105-.187-.23-.360-.38-.507-.074-.073-.148-.14-.23-.2-.041-.03-.085-.057-.135-.08-.05-.024-.105-.044-.154-.044-.049 0-.095.02-.14.044-.09.048-.165.12-.214.207-.098.174-.143.375-.128.578.015.203.06.404.14.578.160.348.406.628.668.838.131.105.27.195.415.27.29.15.596.24.91.27.157.015.315.015.475-.015.32-.06.634-.195.9-.375.133-.09.257-.195.37-.313.226-.236.39-.516.48-.829.045-.156.06-.32.06-.484.015-.328-.075-.652-.255-.93-.09-.139-.195-.258-.315-.36-.24-.204-.534-.360-.82-.405-.145-.023-.29-.023-.435-.008-.29.03-.57.15-.82.313-.125.081-.24.18-.36.274-.24.188-.42.452-.518.72-.049.134-.06.274-.039.41.020.135.074.26.145.36.071.1.16.18.26.24.2.12.43.14.65.04.11-.05.2-.14.26-.24.06-.1.08-.22.04-.33-.04-.22-.2-.38-.42-.4-.11-.01-.22.04-.29.13-.07.09-.09.21-.04.32.05.11.15.18.27.18.12 0 .22-.09.22-.21 0-.12-.1-.22-.22-.22s-.22.1-.22.22c0 .06.02.11.06.15.04.04.09.06.15.06s.11-.02.15-.06.06-.09.06-.15c0-.12-.1-.22-.22-.22s-.22.1-.22.22.1.22.22.22.22-.1.22-.22-.1-.22-.22-.22-.22.1-.22.22.1.22.22.22z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">MySQL</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#4DB33D" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">MongoDB</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#DC382D" d="M10.5 2.661l.54.997-1.797.644-2.409.898A.527.527 0 007.5 6.021v11.958c0 .174.082.333.224.433l2.409.898 1.797.644-.54.997-1.82-.652-2.409-.898A1.66 1.66 0 016 17.979V6.021c0-.69.42-1.31 1.061-1.572l2.409-.898L10.5 2.661z"/>
                        <path fill="#DC382D" d="M13.5 2.661l1.82.652 2.409.898A1.66 1.66 0 0119 5.633v11.958c0 .69-.42 1.31-1.061 1.572l-2.409.898-1.82.652-.54-.997 1.797-.644 2.409-.898a.527.527 0 00.224-.433V6.021a.527.527 0 00-.224-.433l-2.409-.898L13.96 3.658l.54-.997z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Redis</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#FFA000" d="M3.89 15.672L6.255 7.41h4.792l2.365 8.262z"/>
                        <path fill="#F57C00" d="M14.723 7.41l2.374 8.26-.002.002H9.738l2.374-8.262z"/>
                        <path fill="#FF5722" d="M6.255 7.41L3.89 15.67h7.848z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Firebase</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#1287B1" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 17l-5-5 1.5-1.5L10 14l7-7L18.5 8.5 10 17z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Cassandra</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Servers */}
            <div className="group animate-step-appear" style={{ animationDelay: '1.4s' }}>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-red-200 hover:border-red-300 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Servers</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#FF9900" d="M13.527 1.026c-2.318 0-4.199 1.881-4.199 4.199s1.881 4.199 4.199 4.199 4.199-1.881 4.199-4.199-1.881-4.199-4.199-4.199z"/>
                        <path fill="#FF9900" d="M13.527 14.576c-2.318 0-4.199 1.881-4.199 4.199s1.881 4.199 4.199 4.199 4.199-1.881 4.199-4.199-1.881-4.199-4.199-4.199z"/>
                        <path fill="#FF9900" d="M0.329 7.801c-2.318 0-4.199 1.881-4.199 4.199s1.881 4.199 4.199 4.199 4.199-1.881 4.199-4.199-1.881-4.199-4.199-4.199z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">AWS</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#0078D4" d="M0 0h24v24H0z"/>
                        <path fill="#FFF" d="M8.5 8.64L12 5.14l3.5 3.5-1 1-2.5-2.5-2.5 2.5z"/>
                        <path fill="#FFF" d="M15.36 8.5L18.86 12l-3.5 3.5-1-1 2.5-2.5-2.5-2.5z"/>
                        <path fill="#FFF" d="M8.64 15.5L5.14 12l3.5-3.5 1 1-2.5 2.5 2.5 2.5z"/>
                        <path fill="#FFF" d="M15.5 15.36L12 18.86l-3.5-3.5 1-1 2.5 2.5 2.5-2.5z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Azure</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Google Cloud</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M24 0H0v24h24V0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Docker</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#326CE5" d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 002.075-2.746l-1.081.323zm-5.357-6.35l.96-.206-.164-.764c-.129-.613.063-1.086.36-1.315.295-.226.706-.242 1.121.1l.455.378.485-.539c.293-.322.653-.4.922-.267.271.134.438.476.359.943l-.153.716.952-.216c.518-.117.914.028 1.058.354.147.33-.006.8-.425 1.273l-.436.491.677.362c.46.248.637.585.51.86-.13.278-.525.414-1.069.307l-.748-.161-.21.929c-.114.504-.362.795-.644.789-.284-.01-.555-.32-.678-.816l-.217-.888-.902.218c-.529.13-.924.024-1.079-.279-.156-.307.035-.737.464-1.162l.442-.439-.708-.402c-.474-.27-.666-.607-.541-.888.128-.286.537-.438 1.096-.307l.766.179.203-.917c.117-.527.381-.832.679-.821.297.013.571.338.692.846l.213.838.888-.228c.532-.135.928-.035 1.092.268.164.302-.015.713-.423 1.132l-.448.465.719.384c.487.261.694.604.571.888-.123.284-.513.448-1.053.364l-.779-.159-.22.977c-.127.553-.397.882-.721.876-.326-.007-.629-.345-.772-.897l-.233-.956-.956.272c-.541.154-.974.034-1.15-.297-.18-.334.039-.784.506-1.225l.485-.458-.768-.344c-.51-.229-.73-.565-.619-.857.113-.296.507-.47 1.05-.39l.791.118.161-.914c.094-.533.34-.85.64-.864.302-.015.603.283.752.785l.26.874.96-.177c.543-.1.963.024 1.135.33.171.304-.02.73-.431 1.142l-.504.506.81.32c.536.210.789.548.7.854-.09.306-.45.484-.96.430l-.821-.088-.135.959c-.08.569-.336.911-.664.928-.327.018-.656-.299-.821-.883l-.28-.982-.994.13c-.564.073-1.022-.09-1.225-.437-.203-.348.058-.817.592-1.266l.555-.466-.854-.28c-.568-.186-.859-.52-.802-.84.056-.318.41-.524.94-.492l.853.052.084-.959c.057-.547.282-.884.583-.925.3-.04.62.255.799.777l.309.899.842-.433c.501-.256.9-.174 1.012.156.113.327-.103.744-.52 1.098l-.632.536.959.107c.589.066.98.334 1.04.677.061.344-.231.671-.781.821l-.949.221-.021 1.018c-.01.594-.251.968-.607 1.03-.357.062-.732-.226-.938-.860l-.365-.982-1.08.017c-.613.01-1.108-.217-1.227-.594-.12-.378.19-.836.791-1.225l.654-.423-.974-.014c-.606-.01-1.072-.26-1.15-.628-.077-.366.2-.779.738-1.088l.672-.388-1.062-.125c-.59-.07-.973-.35-1.023-.697-.05-.348.25-.685.804-.857l.832-.258-.16-1.078c-.091-.608.058-1.091.361-1.31.304-.22.723-.211 1.129.116l.597.48.508-.854c.284-.479.67-.658.98-.526.31.132.511.532.466 1.073l-.089.92.803-.347c.522-.226.95-.15 1.099.176.149.325-.035.783-.472 1.218l-.524.52.953.275c.573.163.864.502.787.831-.077.327-.425.524-.941.485l-.88-.067-.206.94c-.12.544-.385.846-.703.826-.317-.019-.612-.361-.723-.901l-.255-.899-.849.506c-.485.288-.9.242-1.092-.087-.191-.33.006-.813.507-1.295l.562-.544-.943-.378c-.535-.215-.774-.565-.655-.883.118-.319.502-.509 1.034-.458l.848.082.303-.907c.177-.531.472-.8.802-.77.33.031.636.35.766.899l.308.918.802-.597c.459-.343.87-.334 1.098-.044.227.291.13.764-.229 1.244l-.445.598.911.491c.525.285.742.65.599.97-.144.319-.543.475-1.076.355l-.847-.19-.406.887c-.233.509-.563.741-.897.681-.334-.06-.65-.412-.781-.981l-.361-.978-.726.71c-.416.404-.817.49-1.097.25-.281-.24-.283-.695.011-1.208l.381-.666-.849-.6c-.472-.337-.651-.705-.472-1.021.179-.316.6-.434 1.142-.251l.83.281.52-.84c.3-.483.662-.692 1.006-.609.344.082.668.446.81 1.034l.346.89.625-.786c.359-.449.742-.607 1.047-.459.306.147.517.557.532 1.112l.036.944.708-.911c.33-.426.712-.628 1.021-.551.31.076.556.415.639.966l.191.997.827-.915c.377-.417.776-.586 1.084-.483.309.103.533.479.571 1.026l.089.997.931-.812c.427-.371.862-.52 1.185-.404.323.117.555.457.615.998l.15 1.067 1.006-.673c.482-.326.94-.42 1.26-.266.322.153.54.508.564 1.049l.059 1.082 1.063-.506c.522-.252.99-.279 1.28-.096.291.183.466.571.439 1.136l-.067 1.046 1.1-.3c.541-.149.998-.109 1.258.099.261.207.352.616.245 1.183l-.188.997 1.113-.083c.547-.04.983.03 1.205.256.222.226.244.644.067 1.199l-.315.936 1.111.145c.547.071.954.204 1.139.461.185.258.161.656-.069 1.147l-.445.836 1.088.384c.535.187.89.361 1.028.647.138.286.078.663-.174 1.08l-.57.697.999.654c.492.324.8.541.884.856.084.315-.026.664-.331.983l-.69.516.871.878c.429.436.68.696.697 1.018.017.322-.182.635-.596.873l-.795.296.707 1.048c.348.513.548.831.514 1.132-.034.301-.284.571-.751.761l-.857.146.513 1.161c.253.573.385.936.301 1.22-.084.285-.354.521-.813.667l-.884-.023.295 1.225c.145.603.211.999.077 1.267-.134.268-.437.451-.916.514l-.875-.178.067 1.253c.033.617.025 1.033-.154 1.275-.179.242-.513.366-1.011.329l-.837-.318-.157 1.236c-.077.608-.203.998-.414 1.199-.211.2-.561.271-1.067.179l-.766-.458-.384 1.17c-.189.581-.363.939-.598 1.1-.235.161-.591.187-1.08.067l-.664-.584-.603 1.053c-.297.517-.516.827-.744.962-.228.134-.589.132-1.064-.023l-.52-.695-.807.888c-.397.437-.669.695-.911.78-.242.085-.565.047-1.014-.133l-.35-.782-.99.678c-.486.339-.8.536-1.025.585-.225.049-.519-.002-.936-.182l-.152-.853-1.138.42c-.56.208-.918.296-1.105.254-.187-.042-.447-.18-.812-.381l.044-.914-1.246.134c-.612.067-1.01.069-1.221-.069-.211-.138-.353-.426-.434-.899l.245-.895-1.305-.167c-.642-.083-1.044-.211-1.234-.417-.19-.206-.274-.555-.252-1.084l.441-.815-1.31-.46c-.644-.232-1.037-.427-1.187-.662-.15-.235-.174-.591-.077-1.121l.625-.662-1.248-.743c-.614-.378-.973-.649-1.07-.927-.097-.278-.056-.643.128-1.124l.787-.435-1.115-1.002c-.548-.508-.84-.847-.881-1.15-.041-.303.099-.645.422-1.073l.916-.146-.927-1.225c-.456-.597-.686-.991-.676-1.323.01-.332.197-.682.566-1.08l1.004.184-.697-1.404C.646 18.623.47 18.19.53 17.899c.06-.29.264-.608.611-.973l1.06.44-.433-1.526C1.48 15.236 1.375 14.79 1.485 14.507c.11-.283.342-.57.698-.883l1.076.683-.14-1.582c-.069-.618-.052-1.055.124-1.316.176-.261.498-.5.968-.717l1.044.913.167-1.572c.082-.612.232-1.033.437-1.265.205-.232.537-.411 1.003-.537l.962 1.127.472-1.491c.231-.577.439-.954.677-1.132.238-.178.568-.294 1.001-.349l.831 1.309.768-1.342c.377-.535.646-.864.93-987.268-.147.598-.188 1.022-.123l.654 1.45 1.033-1.127c.507-.467.828-.731 1.12-.819.292-.088.627-.081 1.015.02l.431 1.545 1.258-.87c.618-.427.999-.632 1.315-.654.316-.022.681.068 1.094.282l.173 1.594 1.426-.567c.7-.282 1.123-.416 1.459-.366.336.05.72.227 1.15.549l-.112 1.578 1.539-.223c.756-.112 1.2-.138 1.556-.022.356.116.742.362 1.158.75l-.436 1.491 1.583.145c.778.072 1.216.21 1.555.456.339.246.707.636 1.104 1.184l-.747 1.329 1.554.507c.764.248 1.169.452 1.456.743.287.291.577.735.87 1.34l-1.024 1.08 1.448.844c.711.415 1.07.682 1.282 1.009.212.327.365.803.459 1.43l-1.249.745 1.265 1.139c.621.573.914.904 1.018 1.25.104.346.125.826.063 1.442l-1.425.329 1.018 1.388c.5.69.733 1.094.754 1.456.021.362-.066.826-.261 1.39l-1.544-.156.72 1.578c.354.77.512 1.224.456 1.566-.056.342-.248.764-.576 1.266l-1.602-.641.376 1.712c.185.814.235 1.309.113 1.621-.122.312-.416.671-.883 1.078l-1.59-1.108-.01 1.777c.005.83-.046 1.36-.205 1.626-.159.266-.48.564-1.013.767l-1.504-1.544-.375 1.77c-.185.808-.333 1.31-.508 1.562-.175.252-.505.464-.989.635l-1.35-1.948-.731 1.695c-.361.763-.588 1.206-.825 1.389-.237.183-.59.286-1.058.31l-1.12-2.317-1.056 1.553c-.522.686-.821 1.067-1.115 1.176-.294.109-.671.095-1.131-.04l-.824-2.615-1.335 1.34c-.659.547-1.015.8-1.366.82-.351.02-.734-.132-1.149-.457l-.456-2.829-1.563 1.066c-.77.415-1.153.573-1.549.505-.396-.068-.793-.349-1.191-.845l-.028-2.957-1.733.729c-.853.275-1.251.358-1.678.227-.427-.131-.825-.508-1.194-1.131l.442-2.993-1.833.35c-.9.13-1.309.129-1.747-.055-.438-.184-.83-.621-1.175-1.309l.89-2.929-1.867-.047c-.918-.03-1.33-.108-1.771-.334-.441-.226-.83-.687-1.166-1.383l1.314-2.758-1.827-.434c-.898-.213-1.307-.378-1.712-.673-.405-.295-.773-.771-1.104-1.428l1.707-2.48-1.714-.803c-.843-.412-1.217-.696-1.574-.006-.357-.375-.678-.88-.963-1.517l2.051-2.077-1.526-1.14c-.75-.564-1.075-.913-1.35-1.322-.275-.409-.537-.95-.786-1.623L4.91 7.406 3.638 6.025c-.624-.677-.884-1.06-1.069-1.518-.185-.458-.356-1.029-.513-1.713l2.568-.944L3.281 1.179C2.775.457 2.555.014 2.6-.49c.045-.504.288-1.12.728-1.848l2.598.266z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Kubernetes</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24">
                        <path fill="#009639" d="M12 0L1.26 6v12L12 24l10.74-6V6L12 0zm0 4.29l7.45 4.29-3.71 2.14L12 8.57 8.26 10.7 4.55 8.57 12 4.29zm-8 6.18L7.71 12 4 13.53v-3.06zm8 9.28l-7.45-4.28 3.72-2.15L12 15.43l3.73-2.15 3.72 2.15L12 19.75zm8-6.22L16.29 12 20 10.47v3.06z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Nginx</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-0.5 sm:px-1 lg:px-1.5">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mb-1 sm:mb-2">Projects Delivered</div>
              <div className="text-xs sm:text-sm text-gray-500">Across web, mobile & e-commerce</div>
            </div>
            
            <div className="text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mb-1 sm:mb-2">Client Satisfaction</div>
              <div className="text-xs sm:text-sm text-gray-500">Based on project reviews</div>
            </div>
            
            <div className="text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mb-1 sm:mb-2">Support Available</div>
              <div className="text-xs sm:text-sm text-gray-500">Always here when you need us</div>
            </div>
            
            <div className="text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mb-1 sm:mb-2">Years Experience</div>
              <div className="text-xs sm:text-sm text-gray-500">Building digital solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-0.5 sm:px-1 lg:px-1.5 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your 
              <span className="block">Digital Presence?</span>
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Join 500+ successful businesses who chose Webasthetic. 
              Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Link href="/contact" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </button>
              
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:bg-white hover:text-blue-600">
                <div className="relative">
                  <Link href="/portfolio" className="flex items-center justify-center">
                    View Our Portfolio
                  </Link>
                </div>
              </button>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-blue-100 text-xs sm:text-sm">🚀 Free consultation • 💰 No upfront costs • ⚡ Fast delivery</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

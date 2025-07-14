import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Zap, CheckCircle, Smartphone, Globe, ShoppingCart, Search, Settings, Database, Monitor } from 'lucide-react'
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
<<<<<<< HEAD
                    <span className="text-white text-xs sm:text-sm font-bold">10+</span>
                  </div>
                </div>
                <div className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
                  <span className="font-semibold text-gray-900">10+ Projects Delivered</span>
=======
                    <span className="text-white text-xs sm:text-sm font-bold">50+</span>
                  </div>
                </div>
                <div className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
                  <span className="font-semibold text-gray-900">500+ Projects Delivered</span>
>>>>>>> 85d62573e593140960f1b13d2ceb70469a1f6cbf
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
              We&apos;re your strategic partners in digital transformation with expertise that delivers results.
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
                    <Zap className="h-8 w-8 sm:h-9 sm:w-9 text-purple-600" />
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">Shopify Development</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Custom Shopify stores with advanced features, themes, and integrations.
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
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-progress-line shadow-lg"></div>
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
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Maintenance</h3>
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
                      <Image 
                        src="/tech_logos/react.jpeg" 
                        alt="React" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">React</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/angular.png" 
                        alt="Angular" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Angular</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Vue.jpeg" 
                        alt="Vue.js" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Vue.js</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/next.png" 
                        alt="Next.js" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Next.js</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Tailwind.png" 
                        alt="Tailwind CSS" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Tailwind</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Flutter.png" 
                        alt="Flutter" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
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
                      <Image 
                        src="/tech_logos/Node.jpeg" 
                        alt="Node.js" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Node.js</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Python.png" 
                        alt="Python" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Python</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Java.png" 
                        alt="Java" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Java</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/C.jpeg" 
                        alt="C#" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">C#</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/PHP.png" 
                        alt="PHP" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">PHP</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Rust.png" 
                        alt="Rust" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
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
                      <Image 
                        src="/tech_logos/Jira.png" 
                        alt="Jira" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Jira</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Trello.jpeg" 
                        alt="Trello" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Trello</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Asana.jpeg" 
                        alt="Asana" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Asana</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Monday.avif" 
                        alt="Monday" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Monday</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/ClickUp.png" 
                        alt="ClickUp" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">ClickUp</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Notion.jpg" 
                        alt="Notion" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
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
                      <Image 
                        src="/tech_logos/iOS.png" 
                        alt="iOS" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">iOS</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Android.jpg" 
                        alt="Android" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Android</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Flutter.png" 
                        alt="Flutter" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Flutter</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/React Native.png" 
                        alt="React Native" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">React Native</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Ionic.jpeg" 
                        alt="Ionic" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Ionic</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Xamarin.jpeg" 
                        alt="Xamarin" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
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
                      <Image 
                        src="/tech_logos/PostgreSQL.png" 
                        alt="PostgreSQL" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/MySQL.jpeg" 
                        alt="MySQL" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">MySQL</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/MongoDB.png" 
                        alt="MongoDB" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">MongoDB</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Redis.png" 
                        alt="Redis" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Redis</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Firebase.jpg" 
                        alt="Firebase" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Firebase</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Cassandra.jpeg" 
                        alt="Cassandra" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
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
                      <Image 
                        src="/tech_logos/AWS.jpg" 
                        alt="AWS" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">AWS</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Azure.png" 
                        alt="Azure" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Azure</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Google Cloud.jpeg" 
                        alt="Google Cloud" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Google Cloud</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Docker.jpg" 
                        alt="Docker" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Docker</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Kubernetes.jpg" 
                        alt="Kubernetes" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Kubernetes</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 group/tech hover:-translate-y-1">
                    <div className="mb-3 group-hover/tech:scale-110 transition-transform duration-500">
                      <Image 
                        src="/tech_logos/Nginx.png" 
                        alt="Nginx" 
                        width={40} 
                        height={40} 
                        className="mx-auto rounded-lg object-cover"
                      />
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
<<<<<<< HEAD
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">10+</div>
=======
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
>>>>>>> 85d62573e593140960f1b13d2ceb70469a1f6cbf
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
<<<<<<< HEAD
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">2+</div>
=======
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">5+</div>
>>>>>>> 85d62573e593140960f1b13d2ceb70469a1f6cbf
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
<<<<<<< HEAD
              Join 10+ successful businesses who chose Webasthetic. 
=======
              Join 500+ successful businesses who chose Webasthetic. 
>>>>>>> 85d62573e593140960f1b13d2ceb70469a1f6cbf
              Let&apos;s create something amazing together.
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

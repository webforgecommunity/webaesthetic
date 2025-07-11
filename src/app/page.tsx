import React from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Zap, CheckCircle, Star, Users } from 'lucide-react'
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

        <div className="container mx-auto px-0.5 sm:px-1 lg:px-1.5 relative z-10">
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
                    <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                          <Code className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          <h3 className="text-sm sm:text-base font-bold text-gray-800">
                            Professional Developer Team
                          </h3>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Confident development team collaborating on innovative projects
                          </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-xs text-gray-500">
                          <p className="font-semibold mb-1">Suggested Image:</p>
                          <p className="text-xs leading-tight">
                            • Modern development team (3-4 people)<br />
                            • Working on laptops with code on screens<br />
                            • Clean, bright office environment<br />
                            • Diverse, professional, collaborative
                          </p>
                        </div>
                      </div>
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

          {/* Additional Services */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Complete Service Suite</h3>
              <p className="text-base sm:text-lg text-gray-600">Everything you need to succeed in the digital world</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                  <Code className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Web Development</h4>
                <p className="text-xs sm:text-sm text-gray-600">Custom websites & web applications</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-600" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Mobile Apps</h4>
                <p className="text-xs sm:text-sm text-gray-600">iOS & Android applications</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                  <Palette className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">UI/UX Design</h4>
                <p className="text-xs sm:text-sm text-gray-600">User-centered design solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-orange-600" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">E-commerce</h4>
                <p className="text-xs sm:text-sm text-gray-600">Online stores & marketplaces</p>
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

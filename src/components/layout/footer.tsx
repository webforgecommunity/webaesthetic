import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center -rotate-3">
                    <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">W</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-2xl text-gray-900">
                  We love <span className="text-blue-600">designing</span>
                </h2>
                <p className="text-gray-600 text-sm">
                  and the <span className="text-purple-600 font-semibold">experts</span> who make it <span className="font-semibold">possible.</span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Crafting beautiful digital experiences with modern design principles, cutting-edge technology, 
              and a passion for innovation. We transform ideas into stunning web realities.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Community */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">Community</h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  About the team
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Explore the blog
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Code of Conduct
                </Link>
              </nav>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">Support</h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Get Help
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm hover:translate-x-1 transform"
                >
                  Contact us
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex-1 md:pr-8">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Get Your Project Started</h3>
              <p className="text-gray-600 text-sm max-w-md mb-4">
                Ready to transform your ideas into stunning web experiences? Let's discuss your project 
                and create something amazing together.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Get Inquiry
                </button>
              </form>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-blue-600 hover:scale-105"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-purple-600 hover:scale-105"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-blue-600 hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-purple-600 hover:scale-105"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-blue-600 hover:scale-105"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-purple-600 hover:scale-105"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Web Aesthetic Community. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="/contact" className="hover:text-gray-700 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-gray-700 transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-gray-700 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

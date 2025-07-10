import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-poppins font-bold text-xl">
                Webasthetic
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming digital experiences with cutting-edge web solutions and stunning designs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Web Development
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                UI/UX Design
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                E-commerce
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                SEO Optimization
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400 text-sm">hello@webasthetic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400 text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Webasthetic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

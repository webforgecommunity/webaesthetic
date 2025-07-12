import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Webasthetic
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are a passionate team of developers and designers dedicated to creating exceptional digital experiences.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600">
                This page is under construction. We&apos;re building something amazing here!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'About Us - Webasthetic',
  description: 'Learn about our team, mission, and values at Webasthetic development agency.',
}

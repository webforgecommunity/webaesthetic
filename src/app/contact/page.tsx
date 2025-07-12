import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Webasthetic
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start your project? Get in touch with our team of experts.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                Email: hello@webasthetic.com
              </p>
              <p className="text-gray-600 mb-4">
                Phone: +1-234-567-890
              </p>
              <p className="text-gray-600">
                We&apos;ll get back to you within 24 hours!
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
  title: 'Contact Us - Webasthetic',
  description: 'Get in touch with Webasthetic for your web development needs. Contact our expert team today.',
}

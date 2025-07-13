import Link from 'next/link'
import { ArrowRight, AlertCircle, Home } from 'lucide-react'

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The service you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/services"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-3 group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <div>
            <Link 
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - WebAesthetic',
  description: 'Comprehensive web development and digital solutions. From web apps to mobile development, UI/UX design, SEO optimization, and cloud solutions.',
  keywords: [
    'web development',
    'mobile app development', 
    'ui ux design',
    'seo optimization',
    'e-commerce solutions',
    'cloud services',
    'react development',
    'next.js',
    'digital solutions'
  ],
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

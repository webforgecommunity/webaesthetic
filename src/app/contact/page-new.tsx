import { Metadata } from 'next'
import ContactPageClient from '@/components/ui/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - Webasthetic',
  description: 'Get in touch with Webasthetic for your web development needs. Contact our expert team today.',
}

export default function ContactPage() {
  return <ContactPageClient />
}

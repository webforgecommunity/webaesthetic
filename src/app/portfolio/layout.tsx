import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Webasthetic | Our Featured Projects',
  description: 'Explore our diverse portfolio of cutting-edge web development, mobile apps, AI solutions, and e-commerce platforms. See the quality and innovation we deliver.',
  keywords: 'portfolio, web development, mobile apps, AI solutions, e-commerce, projects, case studies',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

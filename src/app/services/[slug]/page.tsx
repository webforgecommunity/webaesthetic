'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { 
  ArrowRight, 
  CheckCircle, 
  Clock,
  DollarSign,
  Users,
  Code,
  Palette,
  Cloud,
  Search,
  Smartphone,
  ShoppingCart,
  Sparkles,
  Rocket,
  Target,
  Award,
  ExternalLink,
  Quote,
  Globe,
  Settings,
  Shield,
  Monitor,
  Database,
  TrendingUp,
  BarChart3,
  Layers,
  GitBranch
} from 'lucide-react'

// Check if we're in the browser before using GSAP
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let gsap: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ScrollTrigger: any = null

if (typeof window !== 'undefined') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    gsap = require('gsap').gsap
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)
  } catch (error) {
    console.warn('GSAP not loaded:', error)
  }
}

// Extended services data with project portfolios
const servicesData = {
  'web-development': {
    id: 1,
    title: 'Web Development',
    subtitle: 'Full-Stack Solutions',
    description: 'We create powerful, scalable web applications using cutting-edge technologies like React, Next.js, and Node.js. From concept to deployment, we handle everything.',
    longDescription: 'Our web development services encompass the entire development lifecycle, from initial concept and design to deployment and maintenance. We specialize in building modern, responsive, and scalable web applications that deliver exceptional user experiences across all devices.',
    icon: Code,
    image: '/tech_logos/react.jpeg',
    features: [
      'Custom Web Applications',
      'Progressive Web Apps (PWAs)', 
      'API Development & Integration',
      'Database Design & Optimization',
      'E-commerce Solutions',
      'Content Management Systems',
      'Real-time Applications',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    techImages: ['/tech_logos/react.jpeg', '/tech_logos/next.png', '/tech_logos/Node.jpeg', '/tech_logos/MongoDB.png'],
    price: 'Starting from $2,999',
    timeline: '4-8 weeks',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    category: 'Development',
    projects: [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Modern online store with advanced filtering, payment integration, and admin dashboard',
        image: '/tech_logos/next.png',
        technologies: ['Next.js', 'Stripe', 'MongoDB'],
        link: '/portfolio?filter=E-commerce'
      },
      {
        id: 2,
        title: 'SaaS Dashboard',
        description: 'Analytics dashboard with real-time data visualization and user management',
        image: '/tech_logos/react.jpeg',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        link: '/portfolio?filter=Web'
      },
      {
        id: 3,
        title: 'Corporate Website',
        description: 'Professional business website with CMS and SEO optimization',
        image: '/tech_logos/next.png',
        technologies: ['Next.js', 'Sanity', 'Vercel'],
        link: '/portfolio?filter=Web'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Research & Analysis',
        description: 'Requirements gathering and technical architecture planning',
        icon: Search
      },
      {
        step: '02', 
        title: 'Design & Prototype',
        description: 'UI/UX design, wireframing and interactive prototypes',
        icon: Palette
      },
      {
        step: '03',
        title: 'Development',
        description: 'Coding with modern technologies and best practices',
        icon: Code
      },
      {
        step: '04',
        title: 'Testing & QA',
        description: 'Comprehensive testing and quality assurance',
        icon: CheckCircle
      },
      {
        step: '05',
        title: 'Deployment',
        description: 'Launch, optimization and go-live process',
        icon: Rocket
      },
      {
        step: '06',
        title: 'Support',
        description: 'Ongoing maintenance and technical support',
        icon: Award
      }
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart',
        content: 'The web application they built exceeded our expectations. The performance and user experience are outstanding.',
        avatar: '/tech_logos/react.jpeg'
      },
      {
        name: 'Mike Chen',
        role: 'CTO, DataFlow',
        content: 'Professional team with deep technical knowledge. They delivered our complex project on time and within budget.',
        avatar: '/tech_logos/next.png'
      }
    ]
  },
  'mobile-app-development': {
    id: 2,
    title: 'Mobile App Development',
    subtitle: 'Cross-Platform Excellence',
    description: 'Native-quality mobile apps for iOS and Android using React Native and Flutter. Reach your audience wherever they are with seamless user experiences.',
    longDescription: 'Our mobile app development expertise covers both native and cross-platform solutions. We create intuitive, high-performance mobile applications that provide seamless user experiences across iOS and Android platforms.',
    icon: Smartphone,
    image: '/tech_logos/Flutter.png',
    features: [
      'Cross-Platform Development',
      'Native iOS & Android Apps',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'In-App Purchases',
      'Social Media Integration',
      'Analytics & Tracking'
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Swift', 'Kotlin', 'Expo'],
    techImages: ['/tech_logos/React Native.png', '/tech_logos/Flutter.png', '/tech_logos/Firebase.jpg', '/tech_logos/iOS.png'],
    price: 'Starting from $4,999',
    timeline: '6-12 weeks',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    category: 'Mobile',
    projects: [
      {
        id: 1,
        title: 'Fitness Tracking App',
        description: 'Comprehensive fitness app with workout tracking, nutrition planning, and social features',
        image: '/tech_logos/React Native.png',
        technologies: ['React Native', 'Firebase', 'HealthKit'],
        link: '/portfolio?filter=Mobile'
      },
      {
        id: 2,
        title: 'Food Delivery App',
        description: 'Full-featured food delivery platform with real-time tracking and payment integration',
        image: '/tech_logos/Flutter.png',
        technologies: ['Flutter', 'Google Maps', 'Stripe'],
        link: '/portfolio?filter=Mobile'
      },
      {
        id: 3,
        title: 'Social Media App',
        description: 'Community-focused social platform with messaging, content sharing, and live features',
        image: '/tech_logos/React Native.png',
        technologies: ['React Native', 'WebRTC', 'AWS'],
        link: '/portfolio?filter=Mobile'
      }
    ],
    process: [
      {
        step: '01',
        title: 'App Strategy & Planning',
        description: 'Platform selection, audience analysis and feature roadmap',
        icon: Target
      },
      {
        step: '02',
        title: 'Mobile UI/UX Design',
        description: 'Native-first design patterns and intuitive user flows',
        icon: Smartphone
      },
      {
        step: '03',
        title: 'Cross-Platform Development',
        description: 'Building with React Native/Flutter for optimal performance',
        icon: Code
      },
      {
        step: '04',
        title: 'Testing & Optimization',
        description: 'Device testing, performance tuning and bug fixes',
        icon: Settings
      },
      {
        step: '05',
        title: 'App Store Deployment',
        description: 'Store optimization, submission and launch strategy',
        icon: Rocket
      },
      {
        step: '06',
        title: 'Analytics & Updates',
        description: 'Performance monitoring and feature enhancement',
        icon: TrendingUp
      }
    ],
    testimonials: [
      {
        name: 'Jennifer Liu',
        role: 'Founder, HealthTech',
        content: 'Our mobile app has over 100k downloads thanks to their excellent development and UX design.',
        avatar: '/tech_logos/Flutter.png'
      },
      {
        name: 'David Rodriguez',
        role: 'Product Manager, FoodCorp',
        content: 'They delivered a robust food delivery app that handles thousands of orders daily without issues.',
        avatar: '/tech_logos/React Native.png'
      }
    ]
  },
  'e-commerce-solutions': {
    id: 3,
    title: 'E-Commerce Solutions',
    subtitle: 'Online Store Excellence',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics. Turn your products into profit with our proven solutions.',
    longDescription: 'Our e-commerce solutions are designed to maximize your online sales potential. We build scalable, secure, and user-friendly online stores that provide seamless shopping experiences and robust backend management systems.',
    icon: ShoppingCart,
    image: '/tech_logos/next.png',
    features: [
      'Payment Gateway Integration',
      'Inventory Management System',
      'Order Tracking & Management',
      'Multi-vendor Support',
      'Advanced Search & Filtering',
      'Customer Account Management',
      'Analytics & Reporting',
      'Mobile-First Design'
    ],
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS', 'PayPal', 'WooCommerce'],
    techImages: ['/tech_logos/next.png', '/tech_logos/MongoDB.png', '/tech_logos/AWS.jpg'],
    price: 'Starting from $3,999',
    timeline: '6-10 weeks',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    category: 'E-commerce',
    projects: [
      {
        id: 1,
        title: 'Fashion E-Store',
        description: 'Modern fashion retail platform with advanced product filtering and AR try-on features',
        image: '/tech_logos/next.png',
        technologies: ['Next.js', 'Stripe', 'MongoDB'],
        link: '/portfolio?filter=E-commerce'
      },
      {
        id: 2,
        title: 'Multi-Vendor Marketplace',
        description: 'Comprehensive marketplace platform supporting multiple vendors and payment methods',
        image: '/tech_logos/MongoDB.png',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        link: '/portfolio?filter=E-commerce'
      },
      {
        id: 3,
        title: 'B2B Trading Platform',
        description: 'Enterprise-level trading platform with bulk ordering and custom pricing',
        image: '/tech_logos/AWS.jpg',
        technologies: ['Next.js', 'AWS', 'Stripe'],
        link: '/portfolio?filter=E-commerce'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Business Analysis',
        description: 'Market research, product analysis and conversion strategy',
        icon: BarChart3
      },
      {
        step: '02',
        title: 'Platform Architecture',
        description: 'Scalable system design and payment gateway integration',
        icon: Layers
      },
      {
        step: '03',
        title: 'Store Development',
        description: 'Building responsive storefront with admin dashboard',
        icon: ShoppingCart
      },
      {
        step: '04',
        title: 'Payment Integration',
        description: 'Secure payment processing and inventory management',
        icon: Shield
      },
      {
        step: '05',
        title: 'Testing & Launch',
        description: 'Comprehensive testing and store optimization',
        icon: Rocket
      },
      {
        step: '06',
        title: 'Growth & Analytics',
        description: 'Performance monitoring and conversion optimization',
        icon: TrendingUp
      }
    ],
    testimonials: [
      {
        name: 'Lisa Chang',
        role: 'CEO, FashionForward',
        content: 'Our online sales increased by 300% after launching the new e-commerce platform. The user experience is exceptional.',
        avatar: '/tech_logos/next.png'
      },
      {
        name: 'Robert Kim',
        role: 'Founder, MarketPlace Pro',
        content: 'The multi-vendor features and payment integration work flawlessly. Our vendors love the platform.',
        avatar: '/tech_logos/MongoDB.png'
      }
    ]
  },
  'ui-ux-design': {
    id: 4,
    title: 'UI/UX Design',
    subtitle: 'Beautiful & Functional',
    description: 'User-centered design that combines aesthetics with functionality. We create interfaces that users love and convert visitors into customers.',
    longDescription: 'Our UI/UX design process is centered around understanding your users and creating interfaces that are not only beautiful but also highly functional and intuitive. We combine research, creativity, and technical expertise to deliver designs that drive engagement and conversions.',
    icon: Palette,
    image: '/tech_logos/react.jpeg',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Responsive Design',
      'Accessibility Compliance',
      'Brand Identity Design',
      'Interaction Design',
      'Design System Creation'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer'],
    techImages: ['/tech_logos/react.jpeg', '/tech_logos/next.png'],
    price: 'Starting from $1,999',
    timeline: '3-6 weeks',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    category: 'Design',
    projects: [
      {
        id: 1,
        title: 'Banking App Redesign',
        description: 'Complete redesign of mobile banking app improving user engagement by 40%',
        image: '/tech_logos/react.jpeg',
        technologies: ['Figma', 'Principle', 'User Testing'],
        link: '/portfolio?filter=Design'
      },
      {
        id: 2,
        title: 'E-learning Platform',
        description: 'Educational platform design with focus on student engagement and learning outcomes',
        image: '/tech_logos/next.png',
        technologies: ['Adobe XD', 'Figma', 'Prototyping'],
        link: '/portfolio?filter=Design'
      },
      {
        id: 3,
        title: 'Healthcare Dashboard',
        description: 'Medical dashboard interface design for healthcare professionals',
        image: '/tech_logos/react.jpeg',
        technologies: ['Sketch', 'InVision', 'User Research'],
        link: '/portfolio?filter=Design'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Research & Discovery',
        description: 'User research, market analysis and design requirements gathering',
        icon: Search
      },
      {
        step: '02',
        title: 'Wireframing & Architecture',
        description: 'Information architecture and low-fidelity wireframe creation',
        icon: Layers
      },
      {
        step: '03',
        title: 'Visual Design System',
        description: 'High-fidelity designs with consistent brand elements',
        icon: Palette
      },
      {
        step: '04',
        title: 'Interactive Prototyping',
        description: 'Creating clickable prototypes for user testing',
        icon: Monitor
      },
      {
        step: '05',
        title: 'User Testing',
        description: 'Validation through user feedback and iteration',
        icon: Users
      },
      {
        step: '06',
        title: 'Design Handoff',
        description: 'Development-ready assets and design documentation',
        icon: GitBranch
      }
    ],
    testimonials: [
      {
        name: 'Emily Watson',
        role: 'VP Design, FinTech',
        content: 'Their design thinking approach transformed our user experience. Conversion rates increased by 60%.',
        avatar: '/tech_logos/react.jpeg'
      },
      {
        name: 'James Park',
        role: 'CEO, EduStart',
        content: 'Exceptional design work that perfectly captured our brand vision and user needs.',
        avatar: '/tech_logos/next.png'
      }
    ]
  },
  'seo-optimization': {
    id: 5,
    title: 'SEO Optimization',
    subtitle: 'Search Engine Mastery',
    description: 'Boost your online visibility with our proven SEO strategies. We optimize your website to rank higher and attract more qualified traffic.',
    longDescription: 'Our comprehensive SEO services help businesses improve their search engine rankings and drive organic traffic. We use data-driven strategies, technical optimization, and content marketing to ensure your website reaches its target audience effectively.',
    icon: Search,
    image: '/tech_logos/Google Cloud.jpeg',
    features: [
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Content Strategy & Creation',
      'Link Building Campaigns',
      'Local SEO Optimization',
      'Performance Tracking',
      'Competitor Analysis'
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog'],
    techImages: ['/tech_logos/Google Cloud.jpeg'],
    price: 'Starting from $999/month',
    timeline: '3-6 months',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    category: 'Marketing',
    projects: [
      {
        id: 1,
        title: 'E-commerce SEO Campaign',
        description: 'Increased organic traffic by 250% for online retail store through comprehensive SEO strategy',
        image: '/tech_logos/Google Cloud.jpeg',
        technologies: ['SEMrush', 'Google Analytics', 'Search Console'],
        link: '/portfolio?filter=Marketing'
      },
      {
        id: 2,
        title: 'Local Business SEO',
        description: 'Improved local search rankings for service-based business, increasing leads by 180%',
        image: '/tech_logos/Google Cloud.jpeg',
        technologies: ['Google My Business', 'Local SEO Tools', 'Analytics'],
        link: '/portfolio?filter=Marketing'
      },
      {
        id: 3,
        title: 'SaaS Company SEO',
        description: 'Comprehensive SEO strategy for B2B SaaS company resulting in 300% increase in qualified leads',
        image: '/tech_logos/Google Cloud.jpeg',
        technologies: ['Ahrefs', 'Content Marketing', 'Link Building'],
        link: '/portfolio?filter=Marketing'
      }
    ],
    process: [
      {
        step: '01',
        title: 'SEO Audit & Analysis',
        description: 'Comprehensive website analysis and competitor research',
        icon: Search
      },
      {
        step: '02',
        title: 'Keyword Strategy',
        description: 'Target keyword research and content gap analysis',
        icon: Target
      },
      {
        step: '03',
        title: 'Technical Optimization',
        description: 'Site speed, mobile-first and technical SEO improvements',
        icon: Settings
      },
      {
        step: '04',
        title: 'Content Creation',
        description: 'SEO-optimized content development and optimization',
        icon: Palette
      },
      {
        step: '05',
        title: 'Link Building',
        description: 'Authority building through strategic link acquisition',
        icon: Globe
      },
      {
        step: '06',
        title: 'Performance Tracking',
        description: 'Ranking monitoring and continuous optimization',
        icon: TrendingUp
      }
    ],
    testimonials: [
      {
        name: 'Mark Thompson',
        role: 'Marketing Director, GrowthCorp',
        content: 'Our organic traffic increased by 400% in 6 months. The SEO strategy was spot-on and results-driven.',
        avatar: '/tech_logos/Google Cloud.jpeg'
      },
      {
        name: 'Anna Martinez',
        role: 'CEO, LocalBiz',
        content: 'Local SEO optimization helped us dominate our market. We now rank #1 for all our target keywords.',
        avatar: '/tech_logos/Google Cloud.jpeg'
      }
    ]
  },
  'cloud-solutions': {
    id: 6,
    title: 'Cloud Solutions',
    subtitle: 'Scalable Infrastructure',
    description: 'Deploy and scale your applications with confidence using AWS, Azure, and Google Cloud. We handle the complexity so you can focus on growth.',
    longDescription: 'Our cloud solutions help businesses modernize their infrastructure, improve scalability, and reduce operational costs. We provide end-to-end cloud services from migration to ongoing management and optimization.',
    icon: Cloud,
    image: '/tech_logos/AWS.jpg',
    features: [
      'Cloud Migration Services',
      'Auto Scaling Configuration',
      'Security & Compliance Setup',
      'Cost Optimization',
      'Disaster Recovery Planning',
      'DevOps Integration',
      'Performance Monitoring',
      'Multi-Cloud Architecture'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    techImages: ['/tech_logos/AWS.jpg', '/tech_logos/Azure.png', '/tech_logos/Docker.jpg', '/tech_logos/Kubernetes.jpg'],
    price: 'Starting from $1,499',
    timeline: '2-4 weeks',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    category: 'Infrastructure',
    projects: [
      {
        id: 1,
        title: 'Enterprise Cloud Migration',
        description: 'Migrated large enterprise application to AWS with 99.9% uptime and 40% cost reduction',
        image: '/tech_logos/AWS.jpg',
        technologies: ['AWS', 'Docker', 'Kubernetes'],
        link: '/portfolio?filter=Infrastructure'
      },
      {
        id: 2,
        title: 'Multi-Cloud Architecture',
        description: 'Designed hybrid cloud solution using AWS and Azure for maximum reliability and performance',
        image: '/tech_logos/Azure.png',
        technologies: ['AWS', 'Azure', 'Terraform'],
        link: '/portfolio?filter=Infrastructure'
      },
      {
        id: 3,
        title: 'Serverless Application',
        description: 'Built scalable serverless application architecture reducing infrastructure costs by 60%',
        image: '/tech_logos/Google Cloud.jpeg',
        technologies: ['Google Cloud', 'Serverless', 'Firebase'],
        link: '/portfolio?filter=Infrastructure'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Infrastructure Assessment',
        description: 'Current infrastructure analysis and cloud readiness evaluation',
        icon: Search
      },
      {
        step: '02',
        title: 'Cloud Architecture Design',
        description: 'Scalable architecture planning and technology selection',
        icon: Cloud
      },
      {
        step: '03',
        title: 'Migration Strategy',
        description: 'Phased migration planning with minimal downtime approach',
        icon: Database
      },
      {
        step: '04',
        title: 'Deployment & Testing',
        description: 'Secure deployment with comprehensive testing protocols',
        icon: Shield
      },
      {
        step: '05',
        title: 'Go-Live & Monitoring',
        description: 'Production launch with real-time monitoring setup',
        icon: Rocket
      },
      {
        step: '06',
        title: 'Optimization',
        description: 'Performance tuning and cost optimization strategies',
        icon: TrendingUp
      }
    ],
    testimonials: [
      {
        name: 'Steven Roberts',
        role: 'CTO, ScaleTech',
        content: 'The cloud migration was seamless and our application performance improved dramatically. Costs reduced by 50%.',
        avatar: '/tech_logos/AWS.jpg'
      },
      {
        name: 'Rachel Green',
        role: 'IT Director, DataCorp',
        content: 'Professional cloud architecture design that scaled perfectly with our rapid business growth.',
        avatar: '/tech_logos/Azure.png'
      }
    ]
  }
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const [slug, setSlug] = useState<string>('')
  const [service, setService] = useState<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  
  // Animation refs
  const heroRef = useRef<HTMLDivElement | null>(null)
  const statsRef = useRef<HTMLDivElement | null>(null)
  const featuresRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const processRef = useRef<HTMLDivElement | null>(null)
  const testimonialRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)

  // Handle params loading
  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
      setService(servicesData[resolvedParams.slug as keyof typeof servicesData])
    }
    loadParams()
  }, [params])

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !ScrollTrigger || !service) return

    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.2,
          delay: 0.3
        }
      )
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Features animation
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll('.feature-item'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Projects animation
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.querySelectorAll('.project-card'),
        { opacity: 0, y: 50, rotateY: 10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          ease: 'expo.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Process animation
    if (processRef.current) {
      gsap.fromTo(
        processRef.current.querySelectorAll('.process-step'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      if (ScrollTrigger) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [service])

  if (!service) {
    if (slug && !servicesData[slug as keyof typeof servicesData]) {
      notFound()
    }
    return <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading service details...</p>
      </div>
    </div>
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-60`} />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={heroRef} className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className={`inline-flex items-center justify-center w-20 h-20 mb-8 rounded-3xl bg-gradient-to-br ${service.gradient} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  {service.title}
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-600 mb-6 leading-relaxed">
                  {service.subtitle}
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                  <Link 
                    href="/contact"
                    className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-3 group`}
                  >
                    <Rocket className="w-5 h-5" />
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <Link 
                    href="/portfolio"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-3 group"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Portfolio</span>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, idx) => (
                        <div key={idx} className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} border-2 border-white flex items-center justify-center`}>
                          <span className="text-xs text-white font-bold">★</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">500+ Happy Clients</span>
                  </div>
                  <div className="text-sm text-gray-500">|</div>
                  <div className="text-sm text-gray-600 font-medium">100% Success Rate</div>
                </div>
              </div>

              {/* Right Content - Visual Element */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-10 blur-3xl transform rotate-6`}></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{service.title}</div>
                          <div className="text-sm text-gray-500">{service.category}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-gray-900">{service.price.split(' ')[2]}</div>
                          <div className="text-xs text-gray-500">Starting Price</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-gray-900">{service.timeline.split(' ')[0]}</div>
                          <div className="text-xs text-gray-500">Timeline</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {service.features.slice(0, 3).map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        {service.techImages.slice(0, 4).map((img: string, idx: number) => (
                          <div key={idx} className="w-8 h-8 rounded-lg bg-gray-100 p-1">
                            <Image src={img} alt="" width={24} height={24} className="w-full h-full object-cover rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center animate-bounce-slow`}>
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center animate-pulse`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{service.price.split(' ')[2]}</div>
              <div className="text-sm text-gray-600 font-medium">Starting Price</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{service.timeline.split(' ')[0]}</div>
              <div className="text-sm text-gray-600 font-medium">Delivery Time</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Expert Support</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-32 right-16 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40 delay-500"></div>
          <div className="absolute bottom-32 left-24 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50 delay-1000"></div>
          <div className="absolute bottom-16 right-32 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-30 delay-1500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-200 font-medium">Premium Features</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">What We</span>
              <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}> Deliver</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Cutting-edge solutions engineered with precision, designed for performance, and built to exceed expectations.
            </p>
          </div>

          {/* Features Grid - New Design */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {service.features.map((feature: string, idx: number) => {
              const featureIcons = [
                <Code key="code" className="w-7 h-7" />,
                <Smartphone key="smartphone" className="w-7 h-7" />,
                <Settings key="settings" className="w-7 h-7" />,
                <Shield key="shield" className="w-7 h-7" />,
                <Globe key="globe" className="w-7 h-7" />,
                <Database key="database" className="w-7 h-7" />,
                <TrendingUp key="trending" className="w-7 h-7" />,
                <Award key="award" className="w-7 h-7" />
              ];
              
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-purple-500',
                'from-cyan-500 to-blue-500',
                'from-pink-500 to-purple-500',
                'from-emerald-500 to-green-500'
              ];

              const descriptions = [
                'Advanced development methodologies with cutting-edge technology stack and industry best practices.',
                'Native-quality applications optimized for performance across all major platforms and devices.',
                'Comprehensive optimization strategies to maximize visibility and conversion rates effectively.',
                'Real-time engagement systems with intelligent targeting and personalization capabilities.',
                'Seamless offline experiences with smart caching and synchronization technologies.',
                'Secure payment processing with fraud detection and seamless user experience design.',
                'Deep platform integrations with advanced sharing and community features built-in.',
                'Advanced analytics with AI-powered insights and comprehensive performance tracking.'
              ];
              
              return (
                <div 
                  key={idx} 
                  className="feature-item group relative"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transition-all duration-500 hover:border-gray-600/70 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:-translate-y-2">
                    
                    {/* Glowing Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradients[idx % gradients.length]} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <div className="text-white">
                          {featureIcons[idx % featureIcons.length]}
                        </div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse">
                        <CheckCircle className="w-4 h-4 text-white m-1" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                        {feature}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {descriptions[idx % descriptions.length]}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradients[idx % gradients.length]} rounded-b-3xl w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className={`w-8 h-8 bg-gradient-to-br ${gradients[idx % gradients.length]} rounded-full blur-sm`}></div>
                    </div>
                  </div>

                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 rounded-3xl -z-10 scale-110`}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-medium">All features included in every project</span>
                <Award className="w-5 h-5 text-yellow-400 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>Work</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore some of our recent projects in {service.title.toLowerCase()}.
            </p>
          </div>

          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.projects.map((project: any, idx: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <Link 
                key={idx}
                href={project.link}
                className="project-card group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href={`/portfolio?filter=${service.category}`}
              className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-3 group`}
            >
              <Globe className="w-5 h-5" />
              <span>View All {service.category} Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Our
              <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}> Execution Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A systematic approach to deliver exceptional {service.title.toLowerCase()} results, from initial consultation to ongoing support.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative max-w-7xl mx-auto">
            {/* Animated Progress Line - Desktop */}
            <div className="hidden xl:block absolute top-20 h-2 bg-gray-200 rounded-full overflow-hidden" style={{ left: '8.33%', right: '8.33%' }}>
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-progress-line shadow-lg"></div>
            </div>

            {/* Steps Grid */}
            <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 sm:gap-6 lg:gap-4">
              {service.process.map((step: any, idx: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                const IconComponent = step.icon
                const delays = ['0.5s', '1s', '1.5s', '2s', '2.5s', '3s']
                const stepColors = [
                  { bg: 'from-blue-100 to-blue-200', hover: 'group-hover:from-blue-200 group-hover:to-blue-300', badge: 'bg-blue-500', icon: 'text-blue-600' },
                  { bg: 'from-purple-100 to-purple-200', hover: 'group-hover:from-purple-200 group-hover:to-purple-300', badge: 'bg-purple-500', icon: 'text-purple-600' },
                  { bg: 'from-green-100 to-green-200', hover: 'group-hover:from-green-200 group-hover:to-green-300', badge: 'bg-green-500', icon: 'text-green-600' },
                  { bg: 'from-orange-100 to-orange-200', hover: 'group-hover:from-orange-200 group-hover:to-orange-300', badge: 'bg-orange-500', icon: 'text-orange-600' },
                  { bg: 'from-blue-100 to-blue-200', hover: 'group-hover:from-blue-200 group-hover:to-blue-300', badge: 'bg-blue-500', icon: 'text-blue-600' },
                  { bg: 'from-purple-100 to-purple-200', hover: 'group-hover:from-purple-200 group-hover:to-purple-300', badge: 'bg-purple-500', icon: 'text-purple-600' }
                ]
                const stepColor = stepColors[idx] || stepColors[0]
                
                return (
                  <div key={idx} className="text-center group animate-step-appear" style={{ animationDelay: delays[idx] || '0.5s' }}>
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br ${stepColor.bg} rounded-full flex items-center justify-center mx-auto ${stepColor.hover} transition-all duration-300 shadow-xl border-4 border-white z-10 relative`}>
                        <IconComponent className={`h-10 w-10 sm:h-11 sm:w-11 ${stepColor.icon}`} />
                      </div>
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${stepColor.badge} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                        {step.step}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>Success</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hear what our clients say about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div ref={testimonialRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.testimonials.map((testimonial: any, idx: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 relative">
                <Quote className="w-8 h-8 text-gray-300 mb-6" />
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>{service.title}</span> Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss your project requirements and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-3 group`}
              >
                <Target className="w-5 h-5" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/services"
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-3"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
                <span>Back to Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

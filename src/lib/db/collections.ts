import { getDb } from './client'
import type { Collection, ObjectId } from 'mongodb'

export type ServiceDoc = {
  _id?: ObjectId
  name: string
  slug: string
  description?: string
  icon?: string
  iconImageUrl?: string
  // Card fields
  subtitle?: string
  image?: string
  features?: string[]
  technologies?: string[]
  techImages?: string[]
  price?: string
  timeline?: string
  gradient?: string
  bgGradient?: string
  category?: string
  order?: number
  createdAt: Date
  updatedAt: Date
}

export type ProjectDoc = {
  _id?: ObjectId
  title: string
  slug: string
  description?: string
  imageUrl?: string
  serviceSlugs: string[]
  links?: { label: string; url: string }[]
  // Card fields
  featured?: boolean
  status?: string
  techImages?: string[]
  order?: number
  createdAt: Date
  updatedAt: Date
}

export async function servicesCollection(): Promise<Collection<ServiceDoc>> {
  const db = await getDb(process.env.MONGODB_DB || 'webaesthetic')
  const col = db.collection<ServiceDoc>('services')
  await col.createIndex({ slug: 1 }, { unique: true })
  await col.createIndex({ order: 1 })
  return col
}

export async function projectsCollection(): Promise<Collection<ProjectDoc>> {
  const db = await getDb(process.env.MONGODB_DB || 'webaesthetic')
  const col = db.collection<ProjectDoc>('projects')
  await col.createIndex({ slug: 1 }, { unique: true })
  await col.createIndex({ serviceSlugs: 1 })
  await col.createIndex({ order: 1 })
  return col
}

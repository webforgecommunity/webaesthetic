import { NextResponse } from 'next/server'
import { servicesCollection, type ServiceDoc } from '@/lib/db/collections'
import { isAdminRequest } from '@/lib/auth/admin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const col = await servicesCollection()
    const list = await col.aggregate<Partial<ServiceDoc> & { order?: number }>([
      { $project: { _id: 0, name: 1, slug: 1, description: 1, icon: 1, iconImageUrl: 1, subtitle: 1, image: 1, features: 1, technologies: 1, techImages: 1, price: 1, timeline: 1, gradient: 1, bgGradient: 1, category: 1, order: 1, createdAt: 1, updatedAt: 1 } },
      { $addFields: { __ord: { $ifNull: ['$order', 1000000000] } } },
      { $sort: { __ord: 1, name: 1 } },
      { $project: { __ord: 0 } },
    ]).toArray()
    return NextResponse.json({ ok: true, data: list })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch services'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!isAdminRequest(req)) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await req.json()
  const { name, slug, description, icon, iconImageUrl, subtitle, image, features, technologies, techImages, price, timeline, gradient, bgGradient, category, order } = body || {}
    if (!name || !slug) return NextResponse.json({ ok: false, error: 'name and slug are required' }, { status: 400 })

    const now = new Date()
    // default order to max+1 if not provided
    const col = await servicesCollection()
    let ord: number | undefined = undefined
    if (typeof order === 'number') ord = order
    else {
      const last = await col.find({}, { projection: { _id: 0, order: 1 } }).sort({ order: -1 }).limit(1).toArray()
      ord = (last[0]?.order ?? 0) + 1
    }
  const doc: ServiceDoc = { name, slug, description, icon, iconImageUrl, subtitle, image, features, technologies, techImages, price, timeline, gradient, bgGradient, category, order: ord, createdAt: now, updatedAt: now }
  await col.insertOne(doc)
  // respond without _id
  return NextResponse.json({ ok: true, data: { name: doc.name, slug: doc.slug, description: doc.description, icon: doc.icon, iconImageUrl: doc.iconImageUrl, subtitle: doc.subtitle, image: doc.image, features: doc.features, technologies: doc.technologies, techImages: doc.techImages, price: doc.price, timeline: doc.timeline, gradient: doc.gradient, bgGradient: doc.bgGradient, category: doc.category, order: doc.order, createdAt: doc.createdAt, updatedAt: doc.updatedAt } }, { status: 201 })
  } catch (err) {
    const dup = (err as { code?: number } | undefined)
    if (dup?.code === 11000) {
      return NextResponse.json({ ok: false, error: 'Service slug already exists' }, { status: 409 })
    }
    const message = err instanceof Error ? err.message : 'Failed to create service'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'
import { projectsCollection, servicesCollection, type ProjectDoc } from '@/lib/db/collections'
import { isAdminRequest } from '@/lib/auth/admin'

export const runtime = 'nodejs'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const byService = url.searchParams.getAll('service')
    const col = await projectsCollection()
    const match: Record<string, unknown> = {}
    if (byService.length) match.serviceSlugs = { $in: byService }
    const list = await col
      .aggregate([
        { $match: match },
        { $addFields: { orderExists: { $cond: [{ $ifNull: ['$order', false] }, 1, 0] } } },
        { $sort: { orderExists: -1, order: 1, createdAt: -1 } },
        { $project: { _id: 0, orderExists: 0 } }
      ])
      .toArray() as unknown as ProjectDoc[]
    return NextResponse.json({ ok: true, data: list })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch projects'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!isAdminRequest(req)) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  try {
  const body = await req.json()
  const { title, slug, description, imageUrl, serviceSlugs = [], links = [], featured, status, techImages = [] } = body || {}
    if (!title || !slug) return NextResponse.json({ ok: false, error: 'title and slug are required' }, { status: 400 })

    if (!Array.isArray(serviceSlugs)) return NextResponse.json({ ok: false, error: 'serviceSlugs must be an array' }, { status: 400 })

    if (serviceSlugs.length) {
      // validate referenced services exist
      const svc = await servicesCollection()
      const count = await svc.countDocuments({ slug: { $in: serviceSlugs } })
      if (count !== serviceSlugs.length) return NextResponse.json({ ok: false, error: 'One or more service slugs invalid' }, { status: 400 })
    }

    const now = new Date()
  const col = await projectsCollection()
    // default order = last + 1
    const maxOrderDoc = await col.find({}, { projection: { order: 1 } }).sort({ order: -1 }).limit(1).toArray()
    const nextOrder = (maxOrderDoc?.[0]?.order ?? 0) + 1
  const doc: ProjectDoc = { title, slug, description, imageUrl, serviceSlugs, links, featured, status, techImages: Array.isArray(techImages) ? techImages : [], order: nextOrder, createdAt: now, updatedAt: now }
  await col.insertOne(doc)
  return NextResponse.json({ ok: true, data: { title: doc.title, slug: doc.slug, description: doc.description, imageUrl: doc.imageUrl, serviceSlugs: doc.serviceSlugs, links: doc.links, featured: doc.featured, status: doc.status, techImages: doc.techImages, order: doc.order, createdAt: doc.createdAt, updatedAt: doc.updatedAt } }, { status: 201 })
  } catch (err) {
    const dup = (err as { code?: number } | undefined)
    if (dup?.code === 11000) {
      return NextResponse.json({ ok: false, error: 'Project slug already exists' }, { status: 409 })
    }
    const message = err instanceof Error ? err.message : 'Failed to create project'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

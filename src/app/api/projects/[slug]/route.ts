import { NextResponse } from 'next/server'
import { projectsCollection, servicesCollection, type ProjectDoc } from '@/lib/db/collections'
import { isAdminRequest } from '@/lib/auth/admin'

export const runtime = 'nodejs'

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
  const { slug } = await params
    const col = await projectsCollection()
  const doc = await col.findOne({ slug }, { projection: { _id: 0 } })
    if (!doc) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    return NextResponse.json({ ok: true, data: doc })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch project'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminRequest(req)) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  try {
  const { slug } = await params
    const body = await req.json()
  const input = body as Partial<ProjectDoc>
  const updates: Partial<ProjectDoc> = {}
  if (typeof input.title === 'string') updates.title = input.title
  if (typeof input.description === 'string') updates.description = input.description
  if (typeof input.imageUrl === 'string') updates.imageUrl = input.imageUrl
  if (typeof input.featured === 'boolean') updates.featured = input.featured
  if (typeof input.status === 'string') updates.status = input.status
  if (typeof input.order === 'number') updates.order = input.order

    if ('serviceSlugs' in body) {
      if (!Array.isArray(body.serviceSlugs)) return NextResponse.json({ ok: false, error: 'serviceSlugs must be an array' }, { status: 400 })
      const svc = await servicesCollection()
      const count = await svc.countDocuments({ slug: { $in: body.serviceSlugs } })
      if (count !== body.serviceSlugs.length) return NextResponse.json({ ok: false, error: 'One or more service slugs invalid' }, { status: 400 })
  updates.serviceSlugs = body.serviceSlugs as string[]
    }

  if ('links' in body && Array.isArray(input.links)) {
    updates.links = input.links.filter((l): l is { label: string; url: string } => !!l && typeof l.label === 'string' && typeof l.url === 'string')
  }

  if ('techImages' in body) {
    if (!Array.isArray(body.techImages)) return NextResponse.json({ ok: false, error: 'techImages must be an array of strings' }, { status: 400 })
    const valid = body.techImages.filter((x: unknown): x is string => typeof x === 'string' && x.length > 0)
    updates.techImages = valid
  }

    updates.updatedAt = new Date()

    const col = await projectsCollection()
  const res = await col.findOneAndUpdate({ slug }, { $set: updates }, { returnDocument: 'after', projection: { _id: 0 } })
    if (!res) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    return NextResponse.json({ ok: true, data: res })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update project'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminRequest(req)) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  try {
  const { slug } = await params
    const col = await projectsCollection()
  const res = await col.deleteOne({ slug })
    if (res.deletedCount === 0) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to delete project'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

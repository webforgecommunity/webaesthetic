import { NextResponse } from 'next/server'
import { servicesCollection, type ServiceDoc } from '@/lib/db/collections'
import { isAdminRequest } from '@/lib/auth/admin'

export const runtime = 'nodejs'

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
  const { slug } = await params
  const col = await servicesCollection()
  const doc = await col.findOne({ slug }, { projection: { _id: 0 } })
    if (!doc) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    return NextResponse.json({ ok: true, data: doc })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch service'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminRequest(req)) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  try {
  const { slug } = await params
    const body = await req.json()
  const input = body as Partial<ServiceDoc>
  const updates: Partial<ServiceDoc> = {}
  if (typeof input.name === 'string') updates.name = input.name
  if (typeof input.description === 'string') updates.description = input.description
  if (typeof input.icon === 'string') updates.icon = input.icon
  if (typeof input.iconImageUrl === 'string') updates.iconImageUrl = input.iconImageUrl
  if (typeof input.subtitle === 'string') updates.subtitle = input.subtitle
  if (typeof input.image === 'string') updates.image = input.image
  if (Array.isArray(input.features)) updates.features = input.features.filter((x): x is string => typeof x === 'string')
  if (Array.isArray(input.technologies)) updates.technologies = input.technologies.filter((x): x is string => typeof x === 'string')
  if (Array.isArray(input.techImages)) updates.techImages = input.techImages.filter((x): x is string => typeof x === 'string')
  if (typeof input.price === 'string') updates.price = input.price
  if (typeof input.timeline === 'string') updates.timeline = input.timeline
  if (typeof input.gradient === 'string') updates.gradient = input.gradient
  if (typeof input.bgGradient === 'string') updates.bgGradient = input.bgGradient
  if (typeof input.category === 'string') updates.category = input.category
  if (typeof input.order === 'number') updates.order = input.order
    updates.updatedAt = new Date()

    const col = await servicesCollection()
  const res = await col.findOneAndUpdate({ slug }, { $set: updates }, { returnDocument: 'after', projection: { _id: 0 } })
    if (!res) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    return NextResponse.json({ ok: true, data: res })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update service'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminRequest(req)) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  try {
  const { slug } = await params
  const col = await servicesCollection()
  const res = await col.deleteOne({ slug })
    if (res.deletedCount === 0) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to delete service'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

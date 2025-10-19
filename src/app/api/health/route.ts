import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db/client'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const envOk = Boolean(process.env.MONGODB_URI)
  try {
    const db = await getDb(process.env.MONGODB_DB || 'webaesthetic')
    await db.admin().ping()
    return NextResponse.json({ ok: true, envOk, db: 'ok' })
  } catch (err) {
    console.error('GET /api/health error:', err)
    return NextResponse.json({ ok: false, envOk, error: err instanceof Error ? err.message : 'health failed' }, { status: 500 })
  }
}

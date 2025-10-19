import React, { Suspense } from 'react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function fetchJSON(url: string) {
  const res = await fetch(url, { cache: 'no-store' })
  try {
    return await res.json()
  } catch {
    return { ok: false }
  }
}

async function Stats() {
  const [services, projects] = await Promise.all([
    fetchJSON(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/services`),
    fetchJSON(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/projects`),
  ])
  const svcCount = services?.data?.length || 0
  const projCount = projects?.data?.length || 0
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border p-4 bg-white shadow-sm">
        <div className="text-xs uppercase text-gray-500">Services</div>
        <div className="text-3xl font-semibold">{svcCount}</div>
        <div className="mt-3 text-xs text-gray-500">Manage what you offer</div>
      </div>
      <div className="rounded-2xl border p-4 bg-white shadow-sm">
        <div className="text-xs uppercase text-gray-500">Projects</div>
        <div className="text-3xl font-semibold">{projCount}</div>
        <div className="mt-3 text-xs text-gray-500">Your case studies</div>
      </div>
      <div className="rounded-2xl border p-4 bg-white shadow-sm">
        <div className="text-xs uppercase text-gray-500">Cloudinary</div>
        <div className="text-sm font-medium">{process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'Configured' : 'Not set'}</div>
        <div className="mt-3 text-xs text-gray-500">Uploads for icons/logos</div>
      </div>
      <div className="rounded-2xl border p-4 bg-white shadow-sm">
        <div className="text-xs uppercase text-gray-500">Analytics</div>
        <div className="text-sm font-medium">{process.env.NEXT_PUBLIC_ACKEE_SERVER ? 'Ackee Ready' : 'Not set'}</div>
        <div className="mt-3 text-xs text-gray-500">/admin/analytics</div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link className="rounded-md border px-3 py-1.5 hover:bg-gray-50" href="/admin/services">Manage Services</Link>
          <Link className="rounded-md border px-3 py-1.5 hover:bg-gray-50" href="/admin/projects">Manage Projects</Link>
          <Link className="rounded-md border px-3 py-1.5 hover:bg-gray-50" href="/admin/analytics">Analytics</Link>
        </div>
      </div>
      <Suspense fallback={<div className="text-sm text-gray-500">Loading...</div>}>
        <Stats />
      </Suspense>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <h2 className="mb-2 font-medium">Quick Start</h2>
          <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
            <li>Set ADMIN_SECRET in .env.local</li>
            <li>Create a service under Admin → Services</li>
            <li>Tag new projects with that service under Admin → Projects</li>
          </ol>
        </div>
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <h2 className="mb-2 font-medium">API Endpoints</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>GET/POST /api/services</li>
            <li>GET/PUT/DELETE /api/services/[slug]</li>
            <li>GET/POST /api/projects</li>
            <li>GET/PUT/DELETE /api/projects/[slug]</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border bg-white p-4 shadow-sm">
        <h2 className="mb-3 font-medium">Quick Actions</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link className="rounded-md border px-3 py-1.5 hover:bg-gray-50" href="/admin/services#new">Add Service</Link>
          <Link className="rounded-md border px-3 py-1.5 hover:bg-gray-50" href="/admin/projects#new">Add Project</Link>
          <Link className="rounded-md border px-3 py-1.5 hover:bg-gray-50" href="/services">View Public Services</Link>
          <Link className="rounded-md border px-3 py-1.5 hover:bg-gray-50" href="/portfolio">View Portfolio</Link>
        </div>
      </div>
    </div>
  )
}

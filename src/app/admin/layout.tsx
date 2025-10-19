import React from 'react'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col gap-2 border-r bg-white/90 backdrop-blur sticky top-0 h-screen p-4">
          <div className="px-2 py-3">
            <Link href="/admin" className="text-lg font-bold">Admin</Link>
          </div>
          <nav className="flex-1 space-y-1">
            <Link href="/admin" className="block rounded-md px-3 py-2 hover:bg-gray-100">Dashboard</Link>
            <Link href="/admin/services" className="block rounded-md px-3 py-2 hover:bg-gray-100">Services</Link>
            <Link href="/admin/projects" className="block rounded-md px-3 py-2 hover:bg-gray-100">Projects</Link>
            <Link href="/admin/analytics" className="block rounded-md px-3 py-2 hover:bg-gray-100">Analytics</Link>
          </nav>
          <div className="px-3 text-xs text-gray-500">v1</div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Topbar */}
          <div className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <div className="md:hidden">
                <Link href="/admin" className="font-semibold">Admin</Link>
              </div>
              <div className="text-sm text-gray-500">Manage your content</div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

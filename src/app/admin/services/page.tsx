"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

type Service = {
  name: string; slug: string; description?: string; icon?: string;
  subtitle?: string; image?: string; features?: string[]; technologies?: string[]; techImages?: string[];
  price?: string; timeline?: string; gradient?: string; bgGradient?: string; category?: string;
  iconImageUrl?: string;
  order?: number;
}

export default function AdminServicesPage() {
  const [secret, setSecret] = useState('')
  const [services, setServices] = useState<Service[]>([])
  const [form, setForm] = useState<Service>({ name: '', slug: '', description: '', icon: '', subtitle: '', image: '', features: [], technologies: [], techImages: [], price: '', timeline: '', gradient: '', bgGradient: '', category: '', iconImageUrl: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const unsignedPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET

  async function uploadToCloudinary(file: File): Promise<string> {
    if (!cloudName || !unsignedPreset) throw new Error('Cloudinary not configured')
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', unsignedPreset)
    data.append('folder', 'webaesthetic')
    const res = await fetch(url, { method: 'POST', body: data })
    const json = await res.json()
    if (!res.ok) throw new Error(json.error?.message || 'Upload failed')
    return json.secure_url as string
  }

  async function load() {
    setError(null)
    try {
      const res = await fetch('/api/services')
      const json: { ok: boolean; data: Service[]; error?: string } = await res.json()
      if (!json.ok) throw new Error(json.error || 'Failed')
      setServices(json.data)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    }
  }

  useEffect(() => { load() }, [])

  function onDragStart(e: React.DragEvent<HTMLLIElement>, slug: string) {
    e.dataTransfer.setData('text/plain', slug)
    e.currentTarget.classList.add('opacity-60')
  }
  function onDragEnd(e: React.DragEvent<HTMLLIElement>) {
    e.currentTarget.classList.remove('opacity-60')
  }
  async function onDrop(e: React.DragEvent<HTMLLIElement>, targetSlug: string) {
    e.preventDefault()
    const sourceSlug = e.dataTransfer.getData('text/plain')
    if (!sourceSlug || sourceSlug === targetSlug) return
    const list = [...services]
    const from = list.findIndex(s => s.slug === sourceSlug)
    const to = list.findIndex(s => s.slug === targetSlug)
    if (from === -1 || to === -1) return
    const [moved] = list.splice(from, 1)
    list.splice(to, 0, moved)
    // reassign order values based on new order (1-based)
    const updates = list.map((s, idx) => ({ ...s, order: idx + 1 }))
    setServices(updates)
    // persist orders sequentially
    for (const s of updates) {
      // best-effort; ignore failures in UI and show a single error if any
      try {
        await fetch(`/api/services/${encodeURIComponent(s.slug)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'x-admin-secret': secret },
          body: JSON.stringify({ order: s.order }),
        })
      } catch {
        // noop
      }
    }
  }
  function allowDrop(e: React.DragEvent) { e.preventDefault() }

  async function createService(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setOk(null)
    try {
      const isEditing = !!editingSlug && editingSlug === form.slug
      const url = isEditing ? `/api/services/${encodeURIComponent(editingSlug)}` : '/api/services'
      const method = isEditing ? 'PUT' : 'POST'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json', 'x-admin-secret': secret }, body: JSON.stringify(form) })
      const json: { ok: boolean; data?: Service; error?: string } = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed')
      setForm({ name: '', slug: '', description: '', icon: '', subtitle: '', image: '', features: [], technologies: [], techImages: [], price: '', timeline: '', gradient: '', bgGradient: '', category: '', iconImageUrl: '' })
      setEditingSlug(null)
      await load()
      setOk(isEditing ? 'Service updated' : 'Service created')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setLoading(false)
    }
  }

  async function deleteService(slug: string) {
    setError(null); setOk(null)
    try {
      const res = await fetch(`/api/services/${encodeURIComponent(slug)}`, { method: 'DELETE', headers: { 'x-admin-secret': secret } })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Delete failed')
      await load(); setOk('Deleted')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setConfirmDelete(null)
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <label className="text-sm">Admin Secret:</label>
        <input value={secret} onChange={(e) => setSecret(e.target.value)} className="rounded border px-2 py-1 text-sm" placeholder="x-admin-secret" />
        <div className="flex-1" />
        <input value={query} onChange={(e)=>setQuery(e.target.value)} className="rounded border px-2 py-1 text-sm" placeholder="Search services..." />
      </div>
      {ok && <div className="mb-3 rounded border border-green-300 bg-green-50 p-2 text-sm text-green-700">{ok}</div>}
      {(!cloudName || !unsignedPreset) && (
        <div className="mb-4 rounded border border-yellow-300 bg-yellow-50 p-3 text-xs text-yellow-800">
          Cloudinary env not configured. Upload buttons will error. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET in .env.local. You can still paste image URLs directly.
        </div>
      )}
      <form onSubmit={createService} className="mb-6 grid gap-3 rounded border p-4 bg-white">
        <h2 className="font-medium">{editingSlug ? 'Edit Service' : 'Create Service'}</h2>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Name</span>
          <input required placeholder="Mobile App Development" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="rounded border px-3 py-2" />
          <span className="text-xs text-gray-500">Service title shown on the card.</span>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Slug</span>
          <input required placeholder="mobile-app-development" value={form.slug} onChange={(e)=>setForm({ ...form, slug: e.target.value })} className="rounded border px-3 py-2" />
          <span className="text-xs text-gray-500">Used in the URL and as reference tag for projects.</span>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Subtitle</span>
          <input placeholder="Cross-Platform Excellence" value={form.subtitle || ''} onChange={(e)=>setForm({ ...form, subtitle: e.target.value })} className="rounded border px-3 py-2" />
          <span className="text-xs text-gray-500">Small line under the title.</span>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Category</span>
          <input placeholder="Mobile" value={form.category || ''} onChange={(e)=>setForm({ ...form, category: e.target.value })} className="rounded border px-3 py-2" />
          <span className="text-xs text-gray-500">Shown on the top-right (e.g., Mobile, Design, E-commerce).</span>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Description</span>
          <input placeholder="Short description" value={form.description} onChange={(e)=>setForm({ ...form, description: e.target.value })} className="rounded border px-3 py-2" />
          <span className="text-xs text-gray-500">Optional: used in details and features fallback.</span>
        </label>
        <div className="grid gap-2 rounded border p-3">
          <div className="text-sm font-medium">Icon</div>
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-xs text-gray-600">Icon name (Lucide)</span>
              <input placeholder="smartphone, shoppingcart, code" value={form.icon} onChange={(e)=>setForm({ ...form, icon: e.target.value })} className="rounded border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-xs text-gray-600">Or upload icon image</span>
              <input type="file" accept="image/*" onChange={async (e)=>{
                const f = e.target.files?.[0]
                if (!f) return
                try {
                  const url = await uploadToCloudinary(f)
                  setForm(prev => ({ ...prev, iconImageUrl: url }))
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'Upload failed')
                }
              }} />
            </label>
          </div>
          {form.iconImageUrl ? (
            <div className="flex items-center gap-2">
              <Image src={form.iconImageUrl} alt="icon preview" width={40} height={40} className="rounded" />
              <button type="button" onClick={()=>setForm(prev=>({ ...prev, iconImageUrl: '' }))} className="text-xs text-red-600 underline">Remove</button>
            </div>
          ) : null}
          <span className="text-xs text-gray-500">If both are provided, the uploaded icon image will be preferred in the card.</span>
        </div>
        <div className="grid gap-2 rounded border p-3">
          <div className="text-sm font-medium">Technologies</div>
          <label className="grid gap-1">
            <span className="text-xs text-gray-600">Names (comma-separated)</span>
            <input placeholder="React, Flutter, Next.js" value={(form.technologies || []).join(', ')} onChange={(e)=>setForm({ ...form, technologies: e.target.value.split(',').map(s=>s.trim()).filter(Boolean) })} className="rounded border px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-xs text-gray-600">Logos (upload one by one)</span>
            <input type="file" accept="image/*" multiple onChange={async (e)=>{
              const files = Array.from(e.target.files || [])
              if (!files.length) return
              try {
                const urls: string[] = []
                for (const f of files) {
                  const url = await uploadToCloudinary(f)
                  urls.push(url)
                }
                setForm(prev => ({ ...prev, techImages: [...(prev.techImages||[]), ...urls] }))
              } catch (err) {
                setError(err instanceof Error ? err.message : 'Upload failed')
              }
            }} />
            <span className="text-xs text-gray-500">You can also paste URLs directly below.</span>
          </label>
          <input placeholder="techImages (comma-separated urls)" value={(form.techImages || []).join(', ')} onChange={(e)=>setForm({ ...form, techImages: e.target.value.split(',').map(s=>s.trim()).filter(Boolean) })} className="rounded border px-3 py-2" />
          {(form.techImages?.length ?? 0) > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {(form.techImages||[]).map((u, i) => (
                <div key={i} className="relative">
                  <Image src={u} alt="tech" width={28} height={28} className="rounded" />
                </div>
              ))}
            </div>
          )}
        </div>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Features</span>
          <input placeholder="Cross-Platform Apps, Native Performance, ..." value={(form.features || []).join(', ')} onChange={(e)=>setForm({ ...form, features: e.target.value.split(',').map(s=>s.trim()).filter(Boolean) })} className="rounded border px-3 py-2" />
          <span className="text-xs text-gray-500">Comma-separated list. These become green tick items.</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span className="text-sm font-medium">Timeline</span>
            <input placeholder="6-12 weeks" value={form.timeline || ''} onChange={(e)=>setForm({ ...form, timeline: e.target.value })} className="rounded border px-3 py-2" />
            <span className="text-xs text-gray-500">Shown in the right info box.</span>
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Price</span>
            <input placeholder="Starting from $4,999" value={form.price || ''} onChange={(e)=>setForm({ ...form, price: e.target.value })} className="rounded border px-3 py-2" />
            <span className="text-xs text-gray-500">Optional. If present, shows instead of timeline in the second info box.</span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-1">
            <span className="text-sm font-medium">Gradient</span>
            <input placeholder="from-purple-500 to-pink-500" value={form.gradient || ''} onChange={(e)=>setForm({ ...form, gradient: e.target.value })} className="rounded border px-3 py-2" />
            <span className="text-xs text-gray-500">Button/icon gradient, e.g. from-blue-500 to-cyan-500.</span>
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Background Gradient</span>
            <input placeholder="from-purple-50 to-pink-50" value={form.bgGradient || ''} onChange={(e)=>setForm({ ...form, bgGradient: e.target.value })} className="rounded border px-3 py-2" />
            <span className="text-xs text-gray-500">Soft card background gradient.</span>
          </label>
        </div>
        <div className="flex gap-2">
          <button disabled={loading} className="w-fit rounded bg-black px-4 py-2 text-white disabled:opacity-50">{loading ? 'Saving...' : (editingSlug ? 'Update' : 'Save')}</button>
          {editingSlug && (
            <button type="button" className="rounded border px-4 py-2" onClick={()=>{ setForm({ name: '', slug: '', description: '', icon: '', subtitle: '', image: '', features: [], technologies: [], techImages: [], price: '', timeline: '', gradient: '', bgGradient: '', category: '', iconImageUrl: '' }); setEditingSlug(null) }}>Cancel</button>
          )}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>

      <h2 className="mb-2 font-medium">Services</h2>
      <ul className="grid gap-2">
        {services.filter(s => {
          const q = query.trim().toLowerCase();
          if (!q) return true
          return s.name.toLowerCase().includes(q) || s.slug.toLowerCase().includes(q) || (s.category||'').toLowerCase().includes(q)
        }).map((s) => (
          <li key={s.slug} className="rounded border bg-white p-3 text-sm" draggable onDragStart={(e)=>onDragStart(e, s.slug)} onDragEnd={onDragEnd} onDragOver={allowDrop} onDrop={(e)=>onDrop(e, s.slug)}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-gray-500">{s.slug}</div>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  {s.category && <span>{s.category}</span>}
                  {typeof s.order === 'number' && <span className="rounded bg-gray-100 px-1.5 py-0.5">#{s.order}</span>}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="rounded border px-2 py-1 hover:bg-gray-50" onClick={()=>{ setForm(s); setEditingSlug(s.slug) }}>Edit</button>
                <button className="rounded border px-2 py-1 hover:bg-gray-50" onClick={()=>setForm({ ...s, slug: `${s.slug}-copy`, name: `${s.name} (Copy)` })}>Duplicate</button>
                {confirmDelete === s.slug ? (
                  <div className="flex items-center gap-2">
                    <button className="rounded border border-red-600 px-2 py-1 text-red-600" onClick={()=>deleteService(s.slug)}>Confirm</button>
                    <button className="rounded border px-2 py-1" onClick={()=>setConfirmDelete(null)}>Cancel</button>
                  </div>
                ) : (
                  <button className="rounded border px-2 py-1 hover:bg-gray-50" onClick={()=>setConfirmDelete(s.slug)}>Delete</button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

type Project = { title: string; slug: string; description?: string; imageUrl?: string; serviceSlugs: string[]; featured?: boolean; status?: string; links?: {label: string; url: string}[]; techImages?: string[]; order?: number }
type Service = { name: string; slug: string }

export default function AdminProjectsPage() {
  const [secret, setSecret] = useState('')
  const [projects, setProjects] = useState<Project[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [form, setForm] = useState<Project>({ title: '', slug: '', description: '', imageUrl: '', serviceSlugs: [], featured: false, status: '', links: [], techImages: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [q, setQ] = useState('')
  // DnD state mirrors Admin Services implementation

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const unsignedPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET

  async function uploadToCloudinary(file: File): Promise<string> {
    if (!cloudName || !unsignedPreset) throw new Error('Cloudinary not configured')
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    const fd = new FormData()
    fd.append('file', file)
    fd.append('upload_preset', unsignedPreset)
    const res = await fetch(url, { method: 'POST', body: fd })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error?.message || 'Upload failed')
    return data.secure_url as string
  }

  async function load() {
    setError(null)
    try {
      const [pRes, sRes] = await Promise.all([fetch('/api/projects'), fetch('/api/services')])
      const pJson: { ok: boolean; data: Project[]; error?: string } = await pRes.json()
      const sJson: { ok: boolean; data: Service[]; error?: string } = await sRes.json()
      if (!pJson.ok) throw new Error(pJson.error || 'Failed projects')
      if (!sJson.ok) throw new Error(sJson.error || 'Failed services')
      setProjects(pJson.data)
      setServices(sJson.data)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    }
  }

  useEffect(() => { load() }, [])

  function toggleService(slug: string) {
    setForm((prev) => {
      const next = new Set(prev.serviceSlugs)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return { ...prev, serviceSlugs: Array.from(next) }
    })
  }

  async function createProject(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-secret': secret },
        body: JSON.stringify(form),
      })
      const json: { ok: boolean; data?: Project; error?: string } = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed')
  setForm({ title: '', slug: '', description: '', imageUrl: '', serviceSlugs: [], featured: false, status: '', links: [], techImages: [] })
      setSuccess('Project created')
      await load()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setLoading(false)
    }
  }

  async function updateProject(e: React.FormEvent) {
    e.preventDefault()
    if (!editingSlug) return
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const res = await fetch(`/api/projects/${encodeURIComponent(editingSlug)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-secret': secret },
        body: JSON.stringify(form),
      })
      const json: { ok: boolean; data?: Project; error?: string } = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed')
  setSuccess('Project updated')
      setEditingSlug(null)
  setForm({ title: '', slug: '', description: '', imageUrl: '', serviceSlugs: [], featured: false, status: '', links: [], techImages: [] })
      await load()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setLoading(false)
    }
  }

  async function deleteProject(slug: string) {
    if (!confirm(`Delete project ${slug}?`)) return
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const res = await fetch(`/api/projects/${encodeURIComponent(slug)}`, {
        method: 'DELETE',
        headers: { 'x-admin-secret': secret },
      })
      const json: { ok: boolean; error?: string } = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed')
      setSuccess('Project deleted')
      await load()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setLoading(false)
    }
  }

  const filtered = useMemo(() => {
    const query = q.toLowerCase()
    return projects.filter(p => !q || p.title.toLowerCase().includes(query) || p.slug.toLowerCase().includes(query))
  }, [projects, q])
  function onDragStart(e: React.DragEvent<HTMLLIElement>, slug: string) {
    e.dataTransfer.setData('text/plain', slug)
    e.currentTarget.classList.add('opacity-60')
  }
  function onDragEnd(e: React.DragEvent<HTMLLIElement>) {
    e.currentTarget.classList.remove('opacity-60')
  }
  function allowDrop(e: React.DragEvent) { e.preventDefault() }
  async function onDrop(e: React.DragEvent<HTMLLIElement>, targetSlug: string) {
    e.preventDefault()
    const sourceSlug = e.dataTransfer.getData('text/plain')
    if (!sourceSlug || sourceSlug === targetSlug) return
    const list = [...projects]
    const from = list.findIndex(p => p.slug === sourceSlug)
    const to = list.findIndex(p => p.slug === targetSlug)
    if (from === -1 || to === -1) return
    const [moved] = list.splice(from, 1)
    list.splice(to, 0, moved)
    // Reassign order values 1..n on the full list
    const updates = list.map((p, idx) => ({ ...p, order: idx + 1 }))
    setProjects(updates)
    // Persist sequentially (best-effort)
    for (const p of updates) {
      try {
        await fetch(`/api/projects/${encodeURIComponent(p.slug)}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'x-admin-secret': secret }, body: JSON.stringify({ order: p.order }) })
      } catch {
        // ignore individual failures; final load ensures consistency
      }
    }
    await load()
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <label className="text-sm">Admin Secret:</label>
        <input value={secret} onChange={(e) => setSecret(e.target.value)} className="rounded border px-2 py-1 text-sm" placeholder="x-admin-secret" />
      </div>
      <form onSubmit={editingSlug ? updateProject : createProject} className="mb-6 grid gap-3 rounded border p-4">
        <h2 className="font-medium">{editingSlug ? 'Edit Project' : 'Create Project'}</h2>
        {(error || success) && (
          <div className="-mt-1">
            {error && <div className="mb-2 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}
            {success && <div className="mb-2 rounded border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{success}</div>}
          </div>
        )}
        <input required placeholder="title" value={form.title} onChange={(e)=>setForm({ ...form, title: e.target.value })} className="rounded border px-3 py-2" />
        <input required placeholder="slug" value={form.slug} onChange={(e)=>setForm({ ...form, slug: e.target.value })} className="rounded border px-3 py-2" />
        <div>
          <div className="mb-1 text-sm font-medium">Banner Image URL</div>
          <div className="flex gap-2">
            <input placeholder="imageUrl" value={form.imageUrl || ''} onChange={(e)=>setForm({ ...form, imageUrl: e.target.value })} className="rounded border px-3 py-2 flex-1" />
            <input type="file" accept="image/*" onChange={async (e)=>{
              const f = e.target.files?.[0]
              if (!f) return
              try {
                const url = await uploadToCloudinary(f)
                setForm(prev => ({ ...prev, imageUrl: url }))
              } catch (err) {
                setError(err instanceof Error ? err.message : 'Upload failed')
              }
            }} className="rounded border px-3 py-2" />
          </div>
          {!cloudName || !unsignedPreset ? (
            <div className="mt-1 text-xs text-amber-700">Cloudinary env not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET to enable upload. You can paste URLs.</div>
          ) : null}
        </div>
        <textarea placeholder="description" value={form.description} onChange={(e)=>setForm({ ...form, description: e.target.value })} className="rounded border px-3 py-2" />
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="status (e.g., Live/Beta)" value={form.status || ''} onChange={(e)=>setForm({ ...form, status: e.target.value })} className="rounded border px-3 py-2" />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={!!form.featured} onChange={(e)=>setForm({ ...form, featured: e.target.checked })} /> Featured</label>
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Tech Logos (images)</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {(form.techImages || []).map((url, i) => (
              <div key={i} className="flex items-center gap-2 rounded border px-2 py-1">
                {url ? (
                  <Image src={url} alt="tech" width={32} height={32} className="rounded object-cover" />
                ) : (
                  <div className="h-8 w-8 rounded bg-gray-100 border" />
                )}
                <input value={url} onChange={(e)=>{
                  const next = [...(form.techImages||[])]
                  next[i] = e.target.value
                  setForm({ ...form, techImages: next })
                }} className="rounded border px-2 py-1 text-xs" />
                <button type="button" onClick={()=>{
                  const next = [...(form.techImages||[])]
                  next.splice(i,1)
                  setForm({ ...form, techImages: next })
                }} className="rounded border px-2 py-1 text-xs">Remove</button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={()=> setForm({ ...form, techImages: [...(form.techImages||[]), ''] })} className="rounded border px-3 py-1 text-sm">+ Add</button>
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
          </div>
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Links</div>
          {(form.links || []).map((l, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input placeholder="label" value={l.label} onChange={(e)=>{
                const next = [...(form.links||[])]
                next[i] = { ...next[i], label: e.target.value }
                setForm({ ...form, links: next })
              }} className="rounded border px-3 py-2 flex-1" />
              <input placeholder="url" value={l.url} onChange={(e)=>{
                const next = [...(form.links||[])]
                next[i] = { ...next[i], url: e.target.value }
                setForm({ ...form, links: next })
              }} className="rounded border px-3 py-2 flex-[2]" />
              <button type="button" onClick={()=>{
                const next = [...(form.links||[])]
                next.splice(i,1)
                setForm({ ...form, links: next })
              }} className="rounded border px-3 py-2">Remove</button>
            </div>
          ))}
          <button type="button" onClick={()=> setForm({ ...form, links: [...(form.links||[]), { label: '', url: '' }] })} className="rounded border px-3 py-1 text-sm">+ Add Link</button>
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Tag Services</div>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <label key={s.slug} className="inline-flex items-center gap-2 rounded border px-2 py-1 text-sm">
                <input type="checkbox" checked={form.serviceSlugs.includes(s.slug)} onChange={() => toggleService(s.slug)} />
                <span>{s.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button disabled={loading} className="w-fit rounded bg-black px-4 py-2 text-white disabled:opacity-50">{loading ? 'Saving...' : (editingSlug ? 'Update' : 'Save')}</button>
          {editingSlug && (
            <button type="button" onClick={()=>{ setEditingSlug(null); setForm({ title: '', slug: '', description: '', imageUrl: '', serviceSlugs: [], featured: false, status: '', links: [], techImages: [] }) }} className="rounded border px-3 py-2">Cancel</button>
          )}
        </div>
      </form>

      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-medium">Projects</h2>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search projects..." className="rounded border px-2 py-1 text-sm" />
      </div>
      <ul className="grid gap-2">
        {filtered.map((p) => (
          <li key={p.slug} className="rounded border p-3 text-sm cursor-move" draggable onDragStart={(e)=>onDragStart(e, p.slug)} onDragEnd={onDragEnd} onDragOver={allowDrop} onDrop={(e)=>onDrop(e, p.slug)}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium flex items-center gap-2">
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded bg-gray-100 px-1 text-[11px]">{typeof p.order === 'number' ? p.order : '-'}</span>
                  {p.title} {p.featured ? <span className="ml-1 rounded bg-yellow-100 px-2 py-0.5 text-xs">Featured</span> : null}
                </div>
                <div className="text-gray-500">{p.slug}</div>
                {p.status && (
                  <div className="text-xs text-gray-600">{p.status}</div>
                )}
                {p.serviceSlugs?.length ? (
                  <div className="mt-1 text-xs text-gray-600">Services: {p.serviceSlugs.join(', ')}</div>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={()=>{ setEditingSlug(p.slug); setForm({ ...p }) }} className="rounded border px-3 py-1">Edit</button>
                <button onClick={()=> deleteProject(p.slug)} className="rounded border px-3 py-1 text-red-600 border-red-200">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

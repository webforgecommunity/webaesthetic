import React from 'react'

export const dynamic = 'force-dynamic'

export default function AdminAnalyticsPage() {
  const server = process.env.NEXT_PUBLIC_ACKEE_SERVER
  const domainId = process.env.NEXT_PUBLIC_ACKEE_DOMAIN_ID
  const hasAckee = Boolean(server && domainId)

  return (
    <div className="mx-auto max-w-6xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <a href="/admin" className="text-sm rounded border px-3 py-1 hover:bg-gray-50">Back to Dashboard</a>
      </div>

      {hasAckee ? (
        <div className="space-y-4">
          <div className="rounded-xl border bg-white p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">Ackee</div>
              <div className="text-sm text-gray-500">Self-hosted privacy-first analytics</div>
            </div>
            <a
              className="text-sm rounded bg-gray-900 text-white px-3 py-1"
              href={`${server?.replace(/\/$/, '')}/#/${domainId}`}
              target="_blank"
              rel="noreferrer"
            >
              Open Dashboard
            </a>
          </div>
          <div className="rounded-xl border overflow-hidden bg-white">
            <div className="bg-gray-50 border-b px-4 py-2 text-sm text-gray-600">Live preview</div>
            <div className="aspect-video w-full">
              <iframe
                title="Ackee"
                src={`${server?.replace(/\/$/, '')}/#/${domainId}`}
                className="w-full h-[70vh]"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-lg font-medium mb-2">Analytics not configured</h2>
          <p className="text-sm text-gray-600">Set NEXT_PUBLIC_ACKEE_SERVER and NEXT_PUBLIC_ACKEE_DOMAIN_ID in your .env.local, or start the bundled Ackee service via Docker.</p>
          <ol className="list-decimal pl-5 mt-3 space-y-1 text-sm text-gray-700">
            <li>docker compose up -d (starts mongo, ackee, web)</li>
            <li>Open Ackee at http://localhost:3001 and create a domain</li>
            <li>Copy the domain id to NEXT_PUBLIC_ACKEE_DOMAIN_ID</li>
            <li>Set NEXT_PUBLIC_ACKEE_SERVER to http://localhost:3001</li>
            <li>Reload this page</li>
          </ol>
        </div>
      )}
    </div>
  )
}

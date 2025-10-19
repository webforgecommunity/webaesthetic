export function isAdminRequest(req: Request): boolean {
  const header = req.headers.get('x-admin-secret') || ''
  const secret = process.env.ADMIN_SECRET || ''
  if (!secret) {
    // If no secret configured, allow in development to avoid lock-out
    return process.env.NODE_ENV !== 'production'
  }
  return header === secret
}

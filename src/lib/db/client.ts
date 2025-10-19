import * as Mongo from 'mongodb'

const uri = process.env.MONGODB_URI || ''
if (!uri) {
  // Don't throw at import-time in Next.js; runtime guard in handlers
  console.warn('MONGODB_URI is not set. Set it in .env.local or compose envs.')
}

let client: Mongo.MongoClient | null = null
let promise: Promise<Mongo.MongoClient> | null = null

export async function getMongoClient(): Promise<Mongo.MongoClient> {
  if (client) return client
  if (!promise) {
  promise = new Mongo.MongoClient(uri).connect().then((c) => {
      client = c
      return c
    })
  }
  return promise
}

export async function getDb(dbName = 'webaesthetic'): Promise<Mongo.Db> {
  const c = await getMongoClient()
  return c.db(dbName)
}

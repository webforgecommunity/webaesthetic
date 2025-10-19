import * as Mongo from 'mongodb'

// Global cache to avoid multiple connections across hot reloads and serverless invocations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const g: any = globalThis as any

export async function getMongoClient(): Promise<Mongo.MongoClient> {
  if (g.__mongoClient) return g.__mongoClient as Mongo.MongoClient
  if (!g.__mongoClientPromise) {
    const uri = process.env.MONGODB_URI || ''
    if (!uri) {
      const msg = 'MONGODB_URI is not set. Configure it in Vercel Environment Variables.'
      console.error(msg)
      throw new Error(msg)
    }
    const client = new Mongo.MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    })
    g.__mongoClientPromise = client.connect().then((c: Mongo.MongoClient) => {
      g.__mongoClient = c
      return c
    }).catch((err: unknown) => {
      console.error('MongoClient connect error:', err)
      throw err
    })
  }
  return g.__mongoClientPromise as Promise<Mongo.MongoClient>
}

export async function getDb(dbName = 'webaesthetic'): Promise<Mongo.Db> {
  try {
    const c = await getMongoClient()
    return c.db(dbName)
  } catch (err) {
    console.error('getDb failed:', err)
    throw err
  }
}

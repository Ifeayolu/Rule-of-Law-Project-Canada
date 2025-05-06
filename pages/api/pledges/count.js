import clientPromise from '../../../lib/mongodb'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const client = await clientPromise
    const db = client.db('rule-of-law')

    const count = await db.collection('pledges').countDocuments()

    res.status(200).json({ count })
  } catch (error) {
    console.error('Error getting pledge count:', error)
    res.status(500).json({ message: 'Error getting pledge count' })
  }
}

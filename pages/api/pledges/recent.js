import clientPromise from '../../../lib/mongodb'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const client = await clientPromise
    const db = client.db('rule-of-law')

    const recentPledges = await db
      .collection('pledges')
      .find({}, { projection: { name: 1, companyName: 1, timestamp: 1 } })
      .sort({ timestamp: -1 })
      .limit(5)
      .toArray()

    res.status(200).json({ pledges: recentPledges })
  } catch (error) {
    console.error('Error getting recent pledges:', error)
    res.status(500).json({ message: 'Error getting recent pledges' })
  }
}

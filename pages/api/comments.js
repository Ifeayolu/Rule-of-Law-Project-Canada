import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise
      const db = client.db('pledge-website')

      const comments = await db
        .collection('pledges')
        .find({
          comment: { $exists: true, $ne: '' },
        })
        .sort({ createdAt: -1 })
        .toArray()

      res.status(200).json({ comments })
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error fetching comments', error: error.message })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

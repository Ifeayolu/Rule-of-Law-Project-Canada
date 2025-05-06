import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise
      const db = client.db('pledge-website')

      const { name, email, companyName, province, comment } = req.body

      const result = await db.collection('pledges').insertOne({
        name,
        email,
        companyName,
        province,
        comment,
        createdAt: new Date(),
      })

      res
        .status(201)
        .json({ message: 'Pledge created successfully', id: result.insertedId })
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error creating pledge', error: error.message })
    }
  } else if (req.method === 'GET') {
    try {
      const client = await clientPromise
      const db = client.db('pledge-website')

      const count = await db.collection('pledges').countDocuments()

      const commentsCount = await db.collection('pledges').countDocuments({
        comment: { $exists: true, $ne: '' },
      })

      res.status(200).json({ count, commentsCount })
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error fetching pledges', error: error.message })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

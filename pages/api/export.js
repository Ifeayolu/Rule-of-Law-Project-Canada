import clientPromise from '../../lib/mongodb'
import { Parser } from 'json2csv'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { password, format = 'csv' } = req.body
  const adminPassword = process.env.ADMIN_PASSWORD

  if (password !== adminPassword) {
    return res.status(401).json({ message: 'Invalid password' })
  }

  try {
    const client = await clientPromise
    const db = client.db('pledge-website')
    const pledges = await db.collection('pledges').find().toArray()

    if (format === 'json') {
      return res.status(200).json({ data: pledges })
    }

    const fields = [
      'name',
      'email',
      'companyName',
      'province',
      'comment',
      'createdAt',
    ]
    const parser = new Parser({ fields })
    const csv = parser.parse(pledges)

    res.setHeader('Content-Disposition', 'attachment; filename=pledges.csv')
    res.setHeader('Content-Type', 'text/csv')
    return res.status(200).send(csv)
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error exporting data', error: error.message })
  }
}

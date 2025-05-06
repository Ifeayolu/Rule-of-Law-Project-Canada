export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { password } = req.body
  const adminPassword = process.env.ADMIN_PASSWORD

  if (password === adminPassword) {
    return res.status(200).json({ success: true })
  } else {
    return res.status(401).json({ success: false, message: 'Invalid password' })
  }
}

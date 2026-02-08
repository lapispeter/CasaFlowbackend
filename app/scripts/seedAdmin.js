import bcrypt from 'bcryptjs'
import User from '../models/user.js'
import '../database/database.js'

async function main() {
  const name = process.env.ADMIN_NAME || 'Admin'
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    console.error('❌ Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env')
    process.exit(1)
  }

  const existing = await User.findOne({ where: { email } })
  if (existing) {
    console.log('ℹ️ Admin already exists:', email)
    process.exit(0)
  }

  const hashed = await bcrypt.hash(password, 10)

  const admin = await User.create({
    name,
    email,
    password: hashed,
    roleId: 1,          // 1 = admin
    isVerified: true,
    verificationToken: null,
    verificationTokenExpires: null,
  })

  console.log('✅ Admin created:', admin.email)
  process.exit(0)
}

main().catch((err) => {
  console.error('❌ Seed admin failed:', err)
  process.exit(1)
})

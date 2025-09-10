import React from 'react'
import Image from 'next/image'

const UserAvatar = ({ size = 'md', className = '' }) => {
  const sizeClass =
    {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    }[size] || 'w-10 h-10'

  return (
    <div
      className={`relative rounded-full overflow-hidden ${sizeClass} ${className}`}
    >
      <Image
        src='/images/default-avatar.png'
        alt='User Avatar'
        layout='fill'
        objectFit='cover'
        priority
      />
    </div>
  )
}

export default UserAvatar

export function formatPledgeCount(count) {
  if (count < 10_000) {
    return count.toLocaleString()
  }
  if (count < 1_000_000) {
    return (count / 1_000).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  if (count < 1_000_000_000) {
    return (count / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'
}

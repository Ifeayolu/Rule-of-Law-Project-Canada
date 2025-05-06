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

export const formatPledgeCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M Pledges'
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k Pledges'
  } else {
    return count + ' Pledges'
  }
}

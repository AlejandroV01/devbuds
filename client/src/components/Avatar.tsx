import React from 'react'

const Avatar = ({
  src,
  alt,
  size = 150,
  firstName,
  lastName,
}: {
  src?: string
  alt?: string
  size?: number
  firstName: string
  lastName: string
}) => {
  if (src) {
    return <img src={src} alt={alt} className={'rounded-full object-cover'} style={{ width: size, height: size }} />
  } else {
    return (
      <img
        src={`https://api.dicebear.com/8.x/initials/svg?seed=${firstName}+${lastName}`}
        alt={alt}
        className={'rounded-full object-cover'}
        style={{ width: size, height: size }}
      />
    )
  }
}

export default Avatar

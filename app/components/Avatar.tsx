'use client';

import Image from 'next/image';
import React from 'react'
import imgAvt from "../../public/images/placeholder.jpg"

const Avatar = () => {
  return (
    <Image className="rounded-full" height="30" width="30" alt="Avatar" src={imgAvt} />
  )
}

export default Avatar

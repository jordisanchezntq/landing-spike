'use client'

import Image from 'next/image'
import React from 'react'

const cover = () => {
  return (
    <div className='bg-brand flex justify-center items-start pt-48 px-2'>
        <Image
        src={"/img/target.png"}
        alt="cover"
        width={500}
        height={500}
        priority
        />
    </div>
  )
}

export default cover
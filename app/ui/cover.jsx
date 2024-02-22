'use client'

import Image from 'next/image'
import React from 'react'

const cover = () => {
  return (
    <div className='bg-brand flex justify-center items-center md:items-start py-8 md:pt-48 px-8'>
        <Image
        src={"/img/target.png"}
        alt="cover"
        width={520}
        height={500}
        priority
        />
    </div>
  )
}

export default cover
import Image from 'next/image'
import React from 'react'

const cover = () => {
  return (
    <div className='bg-brand flex-1'>
        <Image
        src={"/img/target.png"}
        alt="cover"
        width={620}
        height={500}
        />
    </div>
  )
}

export default cover
import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center pt-[100px]'>
      <Image src="/loading.svg" alt="loading img" width={100} height={100} className='animate-spin' priority/>
    </div>
  )
}

export default Loading

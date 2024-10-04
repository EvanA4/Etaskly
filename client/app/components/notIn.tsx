import Image from 'next/image'
import React from 'react'

const NotIn = () => {
  return (
    <>
        <div className='flex justify-center'>
            <Image src="/notin.png" alt="not logged in image" width={500} height={500}/>
        </div>
        <p className='text-center text-xl text-neutral-300 px-5'>
            <span className='text-3xl text-white'>Hmm,</span> I can't figure out who you are. Try <a href="/api/auth/login" className='text-blue-500'><u>logging in</u></a>!
        </p>
    </>
  )
}

export default NotIn

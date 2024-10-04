import React from 'react'


interface headerProps {
  isIn: boolean
}


const Header = (props: headerProps) => {
  return (
    <div className='w-[100%] flex justify-between bg-green-900'>
        <a href="/" className='py-3 px-4 hover:bg-green-800 transition-colors'>Home</a>
        <div className='flex'>
            {props.isIn ?
            <a href="/api/auth/logout" className='py-3 px-4 hover:bg-green-800 transition-colors'>Log Out</a> :
            <a href="/api/auth/login" className='py-3 px-4 hover:bg-green-800 transition-colors'>Log In</a>
            }
        </div>
    </div>
  )
}

export default Header

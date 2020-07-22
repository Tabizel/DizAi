import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='bg-gray-400'>
      <div className='text-center container p-4 mx-auto'>
        <div className='inline-block space-x-20 font-bold text-lg'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/sobre'>
            <a>Sobre nós</a>
          </Link>
          <Link href='/contato'>
            <a>Contato</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
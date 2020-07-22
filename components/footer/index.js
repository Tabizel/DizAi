import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-600 shadow-md'>
      <div className='mx-auto container py-6'>
        <div className='text-center mx-auto w-2/3'>
          <p>Desenvolvido por Gabriel Miranda</p>
          <p className='font-bold text-sm'><a target='_blank' href='https://www.linkedin.com/in/gabriel-miranda-63729038/'>LinkedIn</a> /
          <a target='_blank' href='https://github.com/Tabizel'> GitHub</a>
          </p>
          <a target='_blank' href='https://devpleno.com/'><img className='w-24 inline-block text-left' src='/images/logo_devpleno.png' alt='Dev Pleno' /></a>
        </div>
      </div>
    </div >
  )
}

export default Footer
import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
      <div className='bg-blue-600 py-4 shadow-md'>
        <div className='container mx-auto'>
          <img className='mx-auto w-3/12 lg:w-1/12 md:w-2/12 sm:3/12' src='/images/logo-dizai.png' alt='diz aí' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
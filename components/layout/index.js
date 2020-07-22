import React from 'react'
import Header from '../header'
import Nav from '../nav'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Nav />
      <div className='container mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
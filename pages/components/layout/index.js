import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  )
}
export default Layout

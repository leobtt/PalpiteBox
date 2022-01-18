import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="w-100 flex justify-center items-center">{children}</div>
      <Footer />
    </div>
  )
}
export default Layout

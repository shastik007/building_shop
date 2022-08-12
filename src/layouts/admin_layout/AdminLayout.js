import React from 'react'
import Header from '../admin_layout/Header'
import Footer from './Footer'

const AdminLayout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default AdminLayout
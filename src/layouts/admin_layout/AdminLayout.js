import React from 'react'
import Header from '../admin_layout/Header'
import Footer from '../user_layout/Footer'

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
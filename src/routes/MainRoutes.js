import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from '../layouts/user_layout/UserLayout'
import MainPage from '../containers/MainPage'
import SubCategoriesRoute from './SubCategoriesRoute'
import AdminLayout from '../layouts/admin_layout/AdminLayout'
import AdminPage from '../containers/AdminPage'
import AdminSubCategories from '../containers/AdminSubCategories'
import AdminProducts from '../containers/AdminProducts'
import DeliveryPage from '../containers/DeliveryPage'
import PaymentPage from '../containers/PaymentPage'
import AdminOrderPage from '../containers/AdminOrderPage'

const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<UserLayout>
             <MainPage/>
         </UserLayout>}/>
        <Route path='/:category/*' element={
        <UserLayout>
          <SubCategoriesRoute/>
        </UserLayout>}/>
        <Route path="/delivery/*" element={
        <UserLayout>
           <DeliveryPage/>
        </UserLayout>}/>
        <Route path="/payment/*" element={<UserLayout>
           <PaymentPage/>
        </UserLayout>}/>
         <Route path="admin" element={<AdminLayout><AdminPage/></AdminLayout>}/>
         <Route path="admin/:category/*" element={<AdminLayout>
            <AdminSubCategories/>
            </AdminLayout>}/>

         <Route path="admin/:category/:id/*" element={
         <AdminLayout>
            <AdminProducts/>
         </AdminLayout>}/>
         <Route path="admin/order/:orderId/*" element={
            <AdminLayout>
            <AdminOrderPage/>
         </AdminLayout>
         }/>
      </Routes>
   )
}

export default MainRoutes

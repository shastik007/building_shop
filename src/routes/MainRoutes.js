import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from '../layouts/user_layout/UserLayout'
import MainPage from '../containers/MainPage'
import SubCategoriesRoute from './SubCategoriesRoute'


const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<UserLayout>
             <MainPage/>
         </UserLayout>}/>
        <Route path='main/:category/*' element={
        <UserLayout>
          <SubCategoriesRoute/>
        </UserLayout>}/>
         <Route path="admin" element={<div>admin</div>}/>
      </Routes>
   )
}

export default MainRoutes

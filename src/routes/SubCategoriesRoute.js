import React from 'react'
import { Route, Routes, Navigate } from 'react-router'
import UserLayout from '../layouts/user_layout/UserLayout'
import SubCategories from '../containers/SubCategories'


const SubCategoriesRoute = () => {
   return (
      <Routes>
        <Route path="/" element={
        <UserLayout>
             <SubCategories/>
         </UserLayout>
        }/>
        <Route path='main/:category/*' element={
        <UserLayout>
          <div/>
        </UserLayout>}/>
         <Route path="admin" element={<div>admin</div>}/>
      </Routes>
   )
}

export default SubCategoriesRoute

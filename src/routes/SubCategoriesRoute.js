import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from '../layouts/user_layout/UserLayout'
import SubCategories from '../containers/SubCategories'
import Materials from '../containers/Materials'


const SubCategoriesRoute = () => {
   return (
      <Routes>
        <Route path="/" element={
        <UserLayout>
             <SubCategories/>
         </UserLayout>
        }/>
        <Route path=':id/*' element={
        <UserLayout>
          <Materials />
        </UserLayout>}/>
      </Routes>
   )
}

export default SubCategoriesRoute

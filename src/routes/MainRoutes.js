import React from 'react'
import { Route, Routes, Navigate } from 'react-router'
import UserLayout from '../layouts/user_layout/UserLayout'
import MainPage from '../containers/MainPage'


const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/main"/>}/>
         <Route path="main" element={
         <UserLayout>
             <MainPage/>
         </UserLayout>
        }/>
         <Route path="admin" element={<div>admin</div>}/>
      </Routes>
   )
}

export default MainRoutes

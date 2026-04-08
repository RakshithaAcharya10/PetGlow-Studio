import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import ViewUser from '../AComponents/ViewUser'

export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path='/AHome' element={<AHome/>}></Route>
        <Route path='/ViewUser' element={<ViewUser/>}></Route>
      </Routes>
    </div>
  )
}

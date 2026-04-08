import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Register from '../UComponents/Register'
import Login from '../UComponents/Login'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import UHome from '../UComponents/UHome'

function AppContent() {
  const location = useLocation()
  const hidetopbar = ["/"]
  return (
    <div>
      {!hidetopbar.includes(location.pathname)&&<TopBar/>}
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/UAbout' element={<UAbout />} />
        <Route path='/UHome' element={<UHome />} />
      </Routes>
    </div>
  )
}
export default function UserRoute() {
  return (
    <div>
<AppContent/>

    </div>
  )
}
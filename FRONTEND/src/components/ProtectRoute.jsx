import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const ProtectRoute = () => {
    const token = localStorage.getItem("TOKEN")
  return token? <Outlet/>: <Navigate to="/"/>
}

export default ProtectRoute
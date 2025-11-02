import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar.jsx'

export default function MasterLayout() {
  return (
    <div className="master-layout d-flex">
  <Sidebar />
  <div className="main-content flex-grow-1 bg-light p-0">
    <Outlet />
  </div>
</div>

  )
}

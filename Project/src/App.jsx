import './App.css'
import UserRoute from './router/UserRoute'
import Navbar from './components/layout/Navbar'
import { useState } from 'react'
import NavBarAdmin from './admin/components/layout/SideBar'
import AdminRout from './router/AdminRout'



function App() {

  const [admin]=useState(true)
  
  return (
    <>
    {admin ? 
   <> <NavBarAdmin/>
    <AdminRout/></>
    :
      <><Navbar/>
      <UserRoute/></>}
    </>
  )
}

export default App

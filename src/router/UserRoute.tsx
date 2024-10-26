
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Navbar from '../components/layout/Navbar'
import AllCategories from '../pages/AllCategories'
import ProductPage from '../pages/ProductPage'

const UserRoute = () => {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allCategories" element={<AllCategories/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
    </Routes>
   </>
  )
}

export default UserRoute

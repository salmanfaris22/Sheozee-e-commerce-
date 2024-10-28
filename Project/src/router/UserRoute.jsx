import { Route, Routes } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Home from "../pages/home"
import AllCategories from "../pages/AllCategories"
import ProductPage from "../pages/ProductPage"

import Footer from "../components/layout/footer"
import Brands from "../pages/Brand"

const UserRoute = () => {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allCategories" element={<AllCategories/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path="/brand" element={<Brands/>}/>

    </Routes>
    <Footer/>
   </>
  )
}

export default UserRoute

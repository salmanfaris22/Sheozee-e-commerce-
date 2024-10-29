import { Route, Routes } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Home from "../pages/home"
import AllCategories from "../pages/AllCategories"
import ProductPage from "../pages/ProductPage"
import Footer from "../components/layout/footer"
import Brands from "../pages/Brand"
import RegistrationPage from "../components/auth/Register"
import LoginPage from "../components/auth/Login"
import Cart from "../pages/Cart"

const UserRoute = () => {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allCategories" element={<AllCategories/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path="/brand" element={<Brands/>}/>
      <Route path="/register" element={<RegistrationPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
    <Footer/>
   </>
  )
}

export default UserRoute

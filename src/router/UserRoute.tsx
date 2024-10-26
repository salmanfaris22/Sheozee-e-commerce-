
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Navbar from '../components/layout/Navbar'
import AllCategories from '../pages/AllCategories'
import ProductPage from '../pages/ProductPage'
import Footer from '../components/layout/footer'
import Categories_list from '../pages/Categories_list'

const UserRoute = () => {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allCategories" element={<AllCategories/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path='/categories_list/:id' element={<Categories_list/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default UserRoute

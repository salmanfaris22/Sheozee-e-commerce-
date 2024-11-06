import { Route, Routes } from "react-router-dom"
import AddProduct from "../admin/page/product/AddProduct"
import Login from "../admin/auth/Login"
import AllProducts from "../admin/page/product/GetAllProduct"



const AdminRout = () => {
  return (
    <>
         <Routes>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/allPrudcut" element={<AllProducts />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
  )
}

export default AdminRout

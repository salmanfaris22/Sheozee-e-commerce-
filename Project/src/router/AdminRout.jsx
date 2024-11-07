import { Route, Routes } from "react-router-dom"
import AddProduct from "../admin/page/product/AddProduct"
import Login from "../admin/auth/Login"
import AllProducts from "../admin/page/product/GetAllProduct"
import GetAlluser from "../admin/page/user/GetAlluser"
import UserInfo from "../admin/page/user/UserInfo"
import UpdateUser from "../admin/page/user/UpdateUser"



const AdminRout = () => {
  return (
    <>
         <Routes>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/allPrudcut" element={<AllProducts />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<GetAlluser/>}/>
          <Route path="/userInfo/:id" element={<UserInfo/>}/>
          <Route path="/updateUser/:id" element={<UpdateUser/>}/>
          
        </Routes>
    </>
  )
}

export default AdminRout

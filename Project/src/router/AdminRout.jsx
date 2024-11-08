import { Route, Routes } from "react-router-dom"
import AddProduct from "../admin/page/product/AddProduct"
import Login from "../admin/auth/Login"
import AllProducts from "../admin/page/product/GetAllProduct"
import GetAlluser from "../admin/page/user/GetAlluser"
import UserInfo from "../admin/page/user/UserInfo"
import UpdateUser from "../admin/page/user/UpdateUser"
import EditProduct from "../admin/page/product/EditProduct"
import AllOrder from "../admin/page/order/AllOrder"
import EditOrder from "../admin/page/order/EditOrder"
import AdmindashBoard from "../admin/dashboard/AdmindashBoard"
import Default from "../pages/extra/Default"



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
          <Route path="/editProduct/:id" element={<EditProduct/>}/>
          <Route path="/" element={<AllOrder/>}/>
          <Route path="/:id" element={<EditOrder/>}/>
          <Route path="/DashBoard" element={<AdmindashBoard/>}/>
          <Route path='*' element={<Default />} />
        </Routes>
    </>
  )
}

export default AdminRout

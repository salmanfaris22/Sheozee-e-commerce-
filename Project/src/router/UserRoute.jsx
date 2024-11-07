import { Route, Routes } from "react-router-dom";
import  { Suspense, lazy } from "react";
import Footer from "../components/layout/footer";
import LoadingSpinner from "../components/common/Loading";
import ByProduct from "../pages/ByProduct";
import Order from "../pages/Order";
import UserInfo from "../pages/UserInfo";

// Use lazy loading for pages
const Home = lazy(() => import("../pages/home"));
const AllCategories = lazy(() => import("../pages/AllCategories"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const Brands = lazy(() => import("../pages/Brand"));
const RegistrationPage = lazy(() => import("../components/auth/Register"));
const LoginPage = lazy(() => import("../components/auth/Login"));
const Cart = lazy(() => import("../pages/Cart"));
const Wishlist = lazy(() => import("../pages/WishList"));

const UserRoute = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allCategories" element={<AllCategories />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/brand" element={<Brands />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/byproduct/:id/:qty/:price" element={<ByProduct />} />
          <Route path="/myOrder" element={<Order />} />
          <Route path="/profile" element={<UserInfo />} />
        </Routes>
        <Footer />
        
      </Suspense>
    </>
  );
};

export default UserRoute;

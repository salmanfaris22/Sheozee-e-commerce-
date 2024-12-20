import { LiaAdobe } from "react-icons/lia";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../common/SerchBar";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useGetWishlist } from "../../hooks/wishlist-Hook";
import { TotleCart } from "../../features/cart/cart-Slice";
import { useGetCartItem } from "../../hooks/Cart-hook";
import { useLogoutUser } from "../../hooks/AuthHook";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {data} =useGetWishlist()
  const cartTotel=useSelector((state)=>state)
  const {data:length} = useGetCartItem()
  const dispatch =useDispatch()
  const {mutate}= useLogoutUser()


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      setIsLoggedIn(true);
    }
    dispatch(TotleCart(length?.items?.length))
  }, [length,mutate,isUserMenuOpen,isOpen]);



  return (
    <div className="flex top-0 bg-white fixed z-[999] justify-between items-center w-[100%] m-auto py-4 text-black ">
      <div className="flex gap-2 items-center mr-3">
        <LiaAdobe className="text-5xl text-black" />
        <div className="font-bold text-3xl hidden md:flex">Shezee</div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link to={"/"}>
          <div className="cursor-pointer hover:text-gray-600 transition-colors duration-200">Home</div>
        </Link>
        <Link to={"/allCategories"}>
          <div className="cursor-pointer hover:text-gray-600 transition-colors duration-200">All Categories</div>
        </Link>
        <Link to={"/brand"}>
          <div className="cursor-pointer hover:text-gray-600 transition-colors duration-200">Brand</div>
        </Link>
        <div className="cursor-pointer hover:text-gray-600 transition-colors duration-200">More Categories</div>
      </div>

      <SearchComponent />

      <div className="flex items-center gap-5 mr-10">
        <Link to={"wishlist"}  className="relative flex items-center">     
        {data?.length>=1 &&
          <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/2 -translate-y-1/2">
          {data?.length}
        </div>
        }
           <MdOutlineShoppingBag className="text-2xl cursor-pointer text-black hover:text-gray-600 transition-colors duration-200"/>
           
        </Link>

        <Link to="/cart" className="relative flex items-center">
        {cartTotel?.cartItem?.cartTotel>=1 &&
          <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/2 -translate-y-1/2">
          {cartTotel?.cartItem?.cartTotel}
        </div>
        }
    
      <FaShoppingCart className="text-2xl cursor-pointer text-black hover:text-gray-600 transition-colors duration-200" />
    </Link>
        <div className="relative">
          <FaUser 
            className="text-2xl cursor-pointer text-black hover:text-gray-600 transition-colors duration-200"
            onClick={toggleUserMenu} 
          />
          {isUserMenuOpen && (
            <div className="absolute z-[99999999] right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">
                    <div onClick={toggleUserMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Login</div>
                  </Link>
                  <Link to="/register">
                    <div onClick={toggleUserMenu} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Register</div>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile">
                    <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</div>
                  </Link>
                  <Link to="/contact">
                    <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact</div>
                  </Link>
                  <Link to="/myOrder">
                    <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">My order</div>
                  </Link>
                  <div 
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={()=>mutate()}
                  >
                    Logout
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleSidebar} className="md:hidden p-2 text-black">
        <span className="text-2xl">☰</span>
      </button>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed right-0 top-0 z-[999999] w-[300px] h-[100vh] bg-white text-black">
          <div className="p-4 flex flex-col items-center gap-4">
            <button onClick={toggleSidebar} className="absolute top-2 right-2 text-xl">✖</button>
            <div className="cursor-pointer hover:text-gray-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>All Categories</div>
            <div className="cursor-pointer hover:text-gray-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>Brand</div>
            <div className="cursor-pointer hover:text-gray-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>More Categories</div>
            <FaUser className="flex md:hidden text-2xl cursor-pointer hover:text-gray-600 transition-colors duration-200" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

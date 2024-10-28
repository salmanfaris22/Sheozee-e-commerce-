import { LiaAdobe } from "react-icons/lia";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../common/SerchBar";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex top-0 bg-white fixed z-[99999] justify-between items-center w-[100%] m-auto py-4">
      <div className="flex gap-2 items-center mr-3">
        <LiaAdobe className="text-5xl" />
        <div className="font-bold text-3xl hidden md:flex ">Shezee</div>
      </div>

      <div className="hidden md:flex items-center gap-6">
      <Link to={"/"}>
        <div className="cursor-pointer">Home</div>
        </Link>
        <Link to={"/allCategories"}>
        <div className="cursor-pointer">All Categories</div>
        </Link>
        <Link to={"/categories_list/men"}> <div className="cursor-pointer">Men</div>
        </Link>
       
        <div className="cursor-pointer">Women</div>
        <div className="cursor-pointer">Brand</div>
        <div className="cursor-pointer">More Categories</div>
      </div>
     <SearchComponent/>
      <div className="flex items-center gap-3 mr-10">
       
        <FaShoppingCart className="text-2xl cursor-pointer" />
        <FaUser className="hidden md:flex text-2xl cursor-pointer " />
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleSidebar} className="md:hidden p-2">
        <span className="text-2xl">☰</span>
      </button>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed right-0 top-0 z-[999999] ">
          <div className="p-4 rounded-lg shadow-lg  w-[300px] h-[100vh] bg-white">
            <button onClick={toggleSidebar} className="absolute top-2 right-2 text-xl">✖</button>
            <div className="flex flex-col items-center gap-4">
              <div className="cursor-pointer" onClick={()=>setIsOpen(false)}>All Categories</div>
              <div className="cursor-pointer" onClick={()=>setIsOpen(false)}>Men</div>
              <div className="cursor-pointer" onClick={()=>setIsOpen(false)}>Women</div>
              <div className="cursor-pointer" onClick={()=>setIsOpen(false)}>Brand</div>
              <div className="cursor-pointer" onClick={()=>setIsOpen(false)}>More Categories</div>
              <FaUser className="flex md:hidden text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

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
    <div className="flex top-0 bg-black fixed z-[99999] justify-between items-center w-[100%] m-auto py-4 text-white shadow-md">
      <div className="flex gap-2 items-center mr-3">
        <LiaAdobe className="text-5xl text-white" />
        <div className="font-bold text-3xl hidden md:flex">Shezee</div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link to={"/"}>
          <div className="cursor-pointer hover:text-gray-300 transition-colors duration-200">Home</div>
        </Link>
        <Link to={"/allCategories"}>
          <div className="cursor-pointer hover:text-gray-300 transition-colors duration-200">All Categories</div>
        </Link>
        <Link to={"/brand"}>
        <div className="cursor-pointer hover:text-gray-300 transition-colors duration-200">Brand</div>
        </Link>
       
        <div className="cursor-pointer hover:text-gray-300 transition-colors duration-200">More Categories</div>
      </div>

      <SearchComponent />

      <div className="flex items-center gap-3 mr-10">
        <FaShoppingCart className="text-2xl cursor-pointer text-white hover:text-gray-300 transition-colors duration-200" />
        <FaUser className="hidden md:flex text-2xl cursor-pointer text-white hover:text-gray-300 transition-colors duration-200" />
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleSidebar} className="md:hidden p-2 text-white">
        <span className="text-2xl">☰</span>
      </button>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed right-0 top-0 z-[999999] w-[300px] h-[100vh] bg-black text-white">
          <div className="p-4 flex flex-col items-center gap-4">
            <button onClick={toggleSidebar} className="absolute top-2 right-2 text-xl">✖</button>
            <div className="cursor-pointer hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>All Categories</div>
            <div className="cursor-pointer hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>Brand</div>
            <div className="cursor-pointer hover:text-gray-300 transition-colors duration-200" onClick={() => setIsOpen(false)}>More Categories</div>
            <FaUser className="flex md:hidden text-2xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

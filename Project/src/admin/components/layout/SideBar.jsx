import { useState } from "react";
import { Si4Chan } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const NavBarAdmin = ({ setAdmin }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLockOut = () => {
    localStorage.clear("admin");
    navigate("/");
    window.location.reload()
    setAdmin(false);
  };

  return (
    <div
      className=" fixed top-0 z-[999999]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`${
          open ? "w-[200px]" : "w-[50px]"
        } transition-all duration-100 fixed flex   shadow-lg flex-col text-white bg-black items-center h-[100vh] z-[8888] px-4`}
      >
        <div className="flex mt-20 p-1  gap-4  items-center justify-center  font-bold ">
          <Si4Chan className="cursor-pointer  mt-3  z-[9999] text-3xl" />
          <div className={`${open ? "block" : "hidden"} text-4xl`}>shoezee</div>
        </div>
        <Link to={"/user"} className="flex mt-20 p-1  gap-4 ">
          <FaUsersBetweenLines className="text-3xl  block " />
          <li className={`${open ? "block" : "hidden"}`}>Users</li>
        </Link>

        <Link to={"/AddProduct"} className="flex mt-10 p-1  gap-4 ">
          <BiSolidCartAdd className="text-3xl  block " />
          <li className={`${open ? "block" : "hidden"}`}>AddProduct</li>
        </Link>
        <Link to={"/DeletProduct"} className="flex mt-10 p-1  gap-4 ">
          <MdOutlineProductionQuantityLimits className="text-3xl  block " />
          <li className={`${open ? "block" : "hidden"}`}> Edit/Remove</li>
        </Link>

        <Link to={"/"} className="flex mt-10 p-1  gap-4 ">
          <FaEye className="text-3xl  block " />
          <li className={`${open ? "block" : "hidden"}`}>Trak Orders</li>
        </Link>
        <Link to={"/DashBoard"} className="flex mt-10 p-1  gap-4 ">
          <BiSolidDashboard className="text-3xl  block " />
          <li className={`${open ? "block" : "hidden"}`}>DashBoard</li>
        </Link>

        <button onClick={handleLockOut} className="flex mt-10 p-1  gap-4 ">
          <FaUser className="text-3xl  block " />
          <li className={`${open ? "block" : "hidden"}`}>LogOut</li>
        </button>
      </div>
    </div>
  );
};

export default NavBarAdmin;
import { useDispatch, useSelector } from "react-redux";
import { useAdmindashBoard } from "../../hooks/admin-dashboard-hook";
import ProductStatus from "./chart/Status-Chart";
import { useEffect } from "react";
import { GetDetisls } from "../../features/dshboard/Dasboardslice";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { RiLuggageCartFill } from "react-icons/ri";
import BarChart from "./chart/BarChart";
import { MdCrisisAlert } from "react-icons/md";
const AdmindashBoard = () => {
  const { data } = useAdmindashBoard();
  const Dtls = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();
  dispatch(GetDetisls(data));
  useEffect(() => {
    dispatch(GetDetisls(data));
  }, [data]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 ml-[90px] lg:grid-cols-4 p-5 gap-6">

        <div className="flex items-center gap-5 p-5 bg-white shadow-lg rounded-lg border border-gray-300">
          <FaUsers className="text-6xl text-blue-500" />
          <div className="font-bold text-lg flex flex-col">
            Total Users:
            <span className="text-3xl text-blue-500">{Dtls?.total_users}</span>
          </div>
        </div>


        <div className="flex items-center gap-5 p-5 bg-white shadow-lg rounded-lg border border-gray-300">
          <AiFillProduct className="text-6xl text-green-500" />
          <div className="font-bold text-lg flex flex-col">
            Total Products:
            <span className="text-3xl text-green-500">{Dtls?.total_products}</span>
          </div>
        </div>


        <div className="flex items-center gap-5 p-5 bg-white shadow-lg rounded-lg border border-gray-300">
          <RiLuggageCartFill className="text-6xl text-orange-500" />
          <div className="font-bold text-lg flex flex-col">
            Total Orders:
            <span className="text-3xl text-orange-500">{Dtls?.total_orders}</span>
          </div>
        </div>


        <div className="flex items-center gap-5 p-5 bg-white shadow-lg rounded-lg border border-gray-300">
          <MdCrisisAlert className="text-6xl text-purple-500" />
          <div className="font-bold text-lg flex flex-col">
            Total Products Sold:
            <span className="text-3xl text-purple-500">{Dtls?.total_product_sold}</span>
          </div>
        </div>
        

        <div className="col-span-1 lg:col-span-3 p-5 bg-white shadow-lg rounded-lg border border-gray-300">
          <BarChart />
        </div>


        <div className="col-span-1 p-5 flex flex-col justify-between bg-white shadow-lg rounded-lg border border-gray-300">
          
          <div>
          <span className="text-lg font-bold text-blue-500">Order Status</span>
          <ProductStatus />
          </div>
          <div className="col-span-1 p-5 bg-red-500 text-white rounded-lg shadow-lg">
          <div className="text-3xl font-bold">Total Profit</div>
          <div className="text-4xl">{Dtls?.total_profit}</div>
        </div>
        </div>


        
      </div>
    </div>
  );
};

export default AdmindashBoard;

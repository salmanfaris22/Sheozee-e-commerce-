import { Link } from "react-router-dom";
import { useAdminOrderHook } from "../../../hooks/admin-order-hook";
import { FaEdit } from "react-icons/fa";


const getStatusColor = (status) => {
  return status === 'Pending' ? 'bg-yellow-300' :
         status === 'Delivered' ? 'bg-green-300' :
         status === 'Out for Delivery' ? 'bg-blue-300' :
         status === 'Cancelled' ? 'bg-red-300' :
         status === 'Returned' ? 'bg-gray-300' :
         'bg-white'; 
};

const AllOrder = () => {
  const { data } = useAdminOrderHook();

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        No orders available.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-8">
        {data?.map((order) => (
          <div
            key={order?.id}
            className="border rounded-xl shadow-lg p-6 grid grid-cols-2 hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <h3 className="text-xl font-bold mb-2">Order ID: {order?.id}</h3>
                <p className="mb-2">
                  Status: <span className="font-semibold">{order.status}</span>
                </p>
                <p className="text-gray-700 mb-4">
                  Total Price:{" "}
                  <span className="font-semibold">${order.total_Price?.toFixed(2)}</span>
                </p>
              </div>

              <h4 className="mt-4 font-medium text-lg">Address:</h4>
              <div className="pl-4 text-gray-700 mb-4">
                {order.addresses?.map((address) => (
                  <p key={address.id}>
                    {address.street}, {address.city}, {address.state}, {address.zip_code}, {address.country}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 mt-2 max-h-[400px] overflow-auto">
              {order.order_items?.length > 0 ? (
                order.order_items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition-all duration-200"
                  >
                    <p className="text-gray-800 font-medium">
                      Product Name: {item.product?.name}
                    </p>
                    <p>Quantity: <span className="font-semibold">{item.quantity}</span></p>
                    <p>Price per item: <span className="font-semibold">${item.price?.toFixed(2)}</span></p>
                    <p className="mt-3">
                      Order Status:{" "}
                      <span className={`font-semibold p-1 rounded-lg ${getStatusColor(item.order_status)}`}>
                        {item.order_status}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 mt-2">No items in this order.</p>
              )}
            </div>

            <div className="flex justify-end mt-3 items-center">
              <Link to={`/${order.id}`} className="flex bg-blue-500 text-white font-bold rounded-lg p-2">
                <FaEdit className="mr-2" />
                Edit Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrder;

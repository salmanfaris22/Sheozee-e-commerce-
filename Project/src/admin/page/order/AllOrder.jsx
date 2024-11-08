
import { useAdminOrderHook } from "../../../hooks/admin-order-hook";
import { FaEdit } from 'react-icons/fa';


const AllOrder = () => {
  const { data } = useAdminOrderHook();
  console.log(data);

  if (!data || data.length === 0) {
    return <div className="text-center text-gray-600 mt-10">No orders available.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-8">
        {data.map((order) => {


          return (
            <div 
              key={order.id} 
              className={`border rounded-xl grid grid-cols-2 shadow-lg p-6  hover:shadow-xl transition-shadow duration-300`}
            >
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Order ID: {order.id}</h3>
                    <p className={`mb-2 `}>Status: <span className="font-semibold">{order.status}</span></p>
                    <p className="text-gray-700 mb-4">Total Price: <span className="font-semibold">${order.total_Price.toFixed(2)}</span></p>
                  </div>
                </div>

                <h4 className="mt-4 font-medium text-lg">Address:</h4>
                <div className="pl-4 text-gray-700 mb-4">
                  {order.addresses.map((address) => (
                    <p key={address.id}>
                      {address.street}, {address.city}, {address.state}, {address.zip_code}, {address.country}
                    </p>
                  ))}
                </div>
              </div>

              {order.order_items.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 mt-2 max-h-[400px] overflow-auto">
                  {order.order_items.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-4 border border-gray-200 grid grid-cols-2 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition-all duration-200"
                    >
                      <div>
                        <p className="text-gray-800 font-medium">Product Name: {item.product.name}</p>
                        <p>Quantity: <span className="font-semibold">{item.quantity}</span></p>
                        <p>Price per item: <span className="font-semibold">${item.price.toFixed(2)}</span></p>
                        <p className="mt-3">Order Status: <span className="font-semibold bg-gray-500 text-white p-1  rounded-lg">{item.order_status}</span></p>
                      </div>
                      <button 
                        className="mt-3 h-[40px] bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-150"
                        onClick={() => handleUpdateOrder(item.id)}
                      >
                        <FaEdit className="mr-2" /> Change Order
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 mt-2">No items in this order.</p>
              )}


            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOrder;

const handleUpdateOrder = (orderId) => {
  // Logic for updating the order (e.g., showing a modal or redirecting)
  console.log(`Update order with ID: ${orderId}`);
};

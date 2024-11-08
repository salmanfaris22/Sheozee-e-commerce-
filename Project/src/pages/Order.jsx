import { useCancellOrder, useGetAllOrders } from "../hooks/order-itesm-hook";

const getStatusColor = (status) => {
  return status === 'Pending' ? 'bg-yellow-300' :
         status === 'Delivered' ? 'bg-green-300' :
         status === 'Out for Delivery' ? 'bg-blue-300' :
         status === 'Cancelled' ? 'bg-red-300' :
         status === 'Returned' ? 'bg-gray-300' :
         'bg-white'; 
};

const Order = () => {
  const { data } = useGetAllOrders();
  const { mutate } = useCancellOrder();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Orders</h1>
      {data && data?.length > 0 ? (
        data.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg mb-6 p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Order #{order.id}</h2>
            </div>

            <p className="text-gray-700 mb-2">
              <strong>User ID:</strong> {order.user_id}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Total Price:</strong> ${order.total_Price.toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Ordered on:</strong> {new Date(order.created_at).toLocaleDateString()}
            </p>

            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2">Shipping Address</h3>
              {order.addresses.map((address) => (
                <div
                  key={address.id}
                  className="bg-gray-50 p-3 rounded-lg mb-2 border"
                >
                  <p>{address.street}, {address.city}, {address.state}</p>
                  <p>{address.zip_code}, {address.country}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2">Order Items</h3>
              {order.order_items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 p-3 rounded-lg mb-2 border flex items-start"
                >
                  <div className="w-1/4">
                    <p className="text-sm font-bold">{item.product.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-3/4 ml-4">
                    <p className="text-gray-700">{item.product.description}</p>
                    <p className="text-xs text-gray-400">
                      Brand: {item.product.brand} | Category: {item.product.category}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm text-white ${getStatusColor(item.order_status)}`}>
                    {item.order_status}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
            {order?.status=="Cancelled" ? 
            <div className="bg-gray-600 p-3 text-white font-bold rounded-lg ">
              This Order Is Cancelled
            </div>
            :
            
            
            
              <button onClick={() => mutate(order?.id)} className="bg-blue-500 p-3 text-white font-bold rounded-lg hover:bg-blue-600">
                Cancel Order
              </button>}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default Order;

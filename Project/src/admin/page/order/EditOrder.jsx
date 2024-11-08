import { useParams } from 'react-router-dom';
import { useAdminOrderStatusChange, useGetOrderById } from '../../../hooks/admin-order-hook';
import { useEffect, useState } from 'react';

const EditOrder = () => {
  const { id } = useParams();
  const { data } = useGetOrderById(id);
  const [orderData, setOrderData] = useState(null);
  const { mutate } = useAdminOrderStatusChange();

  useEffect(() => {
    if (data) {
      setOrderData(data);
    }
  }, [data]);

  if (!orderData) return <div className="text-center mt-8 text-lg">Loading...</div>;

  const handleInputChange = (e, key) => {
    setOrderData(prev => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleAddressChange = (e, index, key) => {
    setOrderData(prev => {
      const updatedAddresses = prev.addresses.map((address, i) =>
        i === index ? { ...address, [key]: e.target.value } : address
      );
      return {
        ...prev,
        addresses: updatedAddresses,
      };
    });
  };

  const handleOrderItemStatusChange = (e, index) => {
    setOrderData(prev => {
      const updatedOrderItems = prev.order_items.map((item, i) =>
        i === index ? { ...item, order_status: e.target.value } : item
      );
      return {
        ...prev,
        order_items: updatedOrderItems,
      };
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Order {id}</h2>

      <div className="mb-6">
        <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Order Status:</label>
        <input
          type="text"
          id="status"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={orderData.status || ''}
          onChange={(e) => handleInputChange(e, 'status')}
        />
      </div>

      {orderData.addresses?.map((address, index) => (
        <div key={address.id || index} className="mb-4 border p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Address {index + 1}</h3>
          <label htmlFor={`street-${index}`} className="block text-gray-600 font-medium mb-1">Street:</label>
          <input
            type="text"
            id={`street-${index}`}
            className="w-full border border-gray-300 p-2 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={address.street || ''}
            onChange={(e) => handleAddressChange(e, index, 'street')}
          />
          <label htmlFor={`city-${index}`} className="block text-gray-600 font-medium mb-1">City:</label>
          <input
            type="text"
            id={`city-${index}`}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={address.city || ''}
            onChange={(e) => handleAddressChange(e, index, 'city')}
          />
        </div>
      ))}

      {orderData.order_items?.map((item, index) => (
        <div key={item.id || index} className="mb-4 border p-4 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Product: {item?.product?.name || 'N/A'}</h4>
          <label htmlFor={`order-status-${index}`} className="block text-gray-600 font-medium mb-1">Order Status:</label>
          <select
            id={`order-status-${index}`}
            className={`w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 ${
              item.order_status === 'Pending' ? 'bg-yellow-300' :
              item.order_status === 'Delivered' ? 'bg-green-300' :
              item.order_status === 'Out for Delivery' ? 'bg-blue-300' :
              item.order_status === 'Cancelled' ? 'bg-red-300' :
              item.order_status === 'Returned' ? 'bg-gray-300' : 'bg-white'
            }`}
            value={item.order_status || 'Pending'}
            onChange={(e) => handleOrderItemStatusChange(e, index)}
          >
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Returned">Returned</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
          </select>
        </div>
      ))}

      <button
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        onClick={() => mutate(orderData)}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditOrder;

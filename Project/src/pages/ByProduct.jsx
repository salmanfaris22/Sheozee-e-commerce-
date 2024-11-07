import {  useState } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useGetProduct } from '../hooks/Product-Hoosk';
import { useOrderSingleItem } from '../hooks/order-itesm-hook';

const ByProduct = () => {
  const { id } = useParams();
  const {price} =useParams()
  const { data } = useGetProduct(id);
  const [qty, setQty] = useState(1);
  const {mutate}=useOrderSingleItem()
  const [orderData, setOrderData] = useState({
    street: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    payment_method: '',
    order_items: [
      {
        product_id: Number(id),
        quantity: qty,
        price: Number(price)
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const increaseQty = () => {
    if (qty < data?.stock) {
      setQty(qty + 1);
    }
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const validateForm = () => {
    if (!orderData.street || !orderData.city || !orderData.state || !orderData.zip_code || !orderData.country || !orderData.payment_method) {
      toast.warn('Please fill out all fields.');
      return false;
    }
    if (qty > data?.stock) {
      toast.warn('Quantity exceeds available stock.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log(orderData);
        mutate(orderData)
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-lg">
      <h1 className="text-2xl font-bold mt-[80px]">Order Input Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-semibold">Street:</label>
          <input
            type="text"
            name="street"
            value={orderData.street}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">City:</label>
          <input
            type="text"
            name="city"
            value={orderData.city}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">State:</label>
          <input
            type="text"
            name="state"
            value={orderData.state}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Zip Code:</label>
          <input
            type="text"
            name="zip_code"
            value={orderData.zip_code}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Country:</label>
          <input
            type="text"
            name="country"
            value={orderData.country}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Payment Method:</label>
          <select
            name="payment_method"
            value={orderData.payment_method}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
            <option value="Online">Online</option>
          </select>
        </div>

        <h2 className="text-xl font-bold mt-4">Order Item Details</h2>
        <div className="flex flex-col">
          <label className="font-semibold">Product ID:</label>
          <input
            type="number"
            name="product_id"
            value={orderData.order_items[0].product_id}
            onChange={(e) => handleChange(e)}
            className="p-2 border border-gray-300 rounded"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Quantity:</label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decreaseQty}
              className="px-4 py-2 bg-gray-300 rounded-l"
            >
              -
            </button>
            <input
              type="number"
              name="quantity"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
              className="p-2 border border-gray-300 rounded-tl rounded-tr"
              min="1"
              max={data?.stock}
            />
            <button
              type="button"
              onClick={increaseQty}
              className="px-4 py-2 bg-gray-300 rounded-r"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Price:</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={orderData.order_items[0].price}
            onChange={(e) => handleChange(e)}
            className="p-2 border border-gray-300 rounded"
            readOnly
          />
        </div>

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit Order
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Order Summary</h2>
      <p><strong>Street:</strong> {orderData.street}</p>
      <p><strong>City:</strong> {orderData.city}</p>
      <p><strong>State:</strong> {orderData.state}</p>
      <p><strong>Zip Code:</strong> {orderData.zip_code}</p>
      <p><strong>Country:</strong> {orderData.country}</p>
      <p><strong>Payment Method:</strong> {orderData.payment_method}</p>

      <h3 className="text-lg font-bold">Order Item</h3>
      <p><strong>Product ID:</strong> {orderData.order_items[0].product_id}</p>
      <p><strong>Quantity:</strong> {orderData.order_items[0].quantity}</p>
      <p><strong>Price:</strong> ${parseFloat(orderData.order_items[0].price).toFixed(2)}</p>
    </div>
  );
};

export default ByProduct;

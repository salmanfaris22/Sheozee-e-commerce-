
import { useAddToCart, useGetCartItem } from "../hooks/Cart-hook";
import { useDispatch } from "react-redux";
import { TotleCart } from "../features/cart/cart-Slice";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon
import { useOrderitems } from "../hooks/order-itesm-hook";

const Cart = () => {
  const { data } = useGetCartItem();
  const dispatch = useDispatch();
  const {mutate:order} = useOrderitems()
  const { mutate } = useAddToCart();
  const [carts, setCarts] = useState([]);
  
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: ""
  });

  const handleIncreaseQuantity = (productId) => {
    mutate([productId, 1, "add"]);
  };

  const handleDecreaseQuantity = (productId) => {
    mutate([productId, -1, "add"]);
  };

  const handleRemoveItem = (productId) => {
    mutate([productId, -1, "remove"]);
  };

  const handleCheckout = () => {
    setShowAddressForm(true);
  };

  const handleCloseForm = () => {
    setShowAddressForm(false);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    order(address)
  
  };

  useEffect(() => {
    const cart = data?.items?.sort((a, b) => a.product_id - b.product_id) || [];
    setCarts(cart);
    dispatch(TotleCart(cart?.length));
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto p-6 font-bold min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {carts.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {carts?.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center border p-4 justify-between rounded-lg shadow-md bg-white"
            >
              <img
                src={
                  item?.product?.images?.filter((e) => e?.is_main === true)[0]?.url ||
                  item?.product?.images[0]?.url
                }
                alt={item.product_name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow pl-4">
                <h2 className="text-xl font-semibold">{item.product_name}</h2>
                <p className="text-gray-700">Price: ${item?.product?.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() => handleDecreaseQuantity(item.product_id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() => handleIncreaseQuantity(item.product_id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="mt-2 px-4 py-1 text-red-600 font-semibold hover:underline"
                  onClick={() => handleRemoveItem(item.product_id)}
                >
                  Remove
                </button>
              </div>
              <div>
                Total: <span className="text-blue-500">${item?.product?.price * item.quantity}</span>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <button
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {showAddressForm && (
        <div className="fixed z-[999] top-0 left-0 h-[100vh] w-[100%] bg-black bg-opacity-50 p-11">
          <div className="relative bg-gray-100 p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={handleCloseForm}
            >
              <AiOutlineClose size={24} />
            </button>
            <form className="mt-6 space-y-4" onSubmit={handleAddressSubmit}>
              <h2 className="text-2xl font-bold mb-4">Enter Your Address</h2>
              <div>
                <label className="block mb-1 font-medium">Street:</label>
                <input
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={handleAddressChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">City:</label>
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">State:</label>
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleAddressChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Zip Code:</label>
                <input
                  type="text"
                  name="zip_code"
                  value={address.zip_code}
                  onChange={handleAddressChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Country:</label>
                <input
                  type="text"
                  name="country"
                  value={address.country}
                  onChange={handleAddressChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <h3 className="mt-4 mb-2 font-bold">Payment Method:</h3>
                <select className="w-full p-2 border rounded-md">
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash_on_delivery">Cash on Delivery</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
              >
                 Submit Address and Proceed
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

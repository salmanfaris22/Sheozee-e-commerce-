
import { useNavigate } from "react-router-dom";

import { useAddToCart, useGetCartItem } from "../hooks/Cart-hook";
import { useDispatch } from "react-redux";
import { TotleCart } from "../features/cart/cart-Slice";


const Cart = () => {
  // Sample cart items (could come from Redux, Context API, or local state)
  const {data} = useGetCartItem()
    const dispath = useDispatch()
  const {mutate} =useAddToCart()
  
  const navigate = useNavigate();

  const handleIncreaseQuantity = (productId) => {
    mutate([productId,1,"add"])
   
  };

  const handleDecreaseQuantity = (productId) => {
    mutate([productId,-1,"add"])
  };

  const handleRemoveItem = (productId) => {
    mutate([productId,-1,"remove"])
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const cart = data?.items?.sort((a, b) => a.product_id - b.product_id) || [];
 
  dispath(TotleCart(cart?.length))
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {cart=== 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.product_id} className="flex items-center border p-4 rounded-lg shadow-md bg-white">
              <img
                // src={item.images[0]}
                alt={item.product_name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow pl-4">
                <h2 className="text-xl font-semibold">{item.product_name}</h2>
                <p className="text-gray-700">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() => handleDecreaseQuantity(item.product_id)}
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
            </div>
          ))}
          {/* <h2 className="text-2xl font-bold text-right mt-4">Total: ${totalAmount.toFixed(2)}</h2> */}
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
    </div>
  );
};

export default Cart;

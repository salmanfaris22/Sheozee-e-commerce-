import { Link, useParams } from "react-router-dom";
import { useGetAllProduct, useGetProduct } from "../hooks/Product-Hoosk";
import MyButton from "../components/common/Botton";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ProductPage = () => {
  const { id } = useParams();
  const productID = Number(id);
  const { data } = useGetProduct(productID);
  const { data: products } = useGetAllProduct();

  // State for quantity management
  const [quantity, setQuantity] = useState(0);

  // State for wishlist management
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Functions to manage quantity
  const increaseQuantity = () => {
    if (data?.stock !== undefined && quantity < data.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Function to add to cart
  const addToCart = () => {
    console.log(`Added ${quantity} of ${data?.name} to cart`);
  };

  // Function to handle Buy Now
  const buyNow = () => {
    if (quantity > 0) {
      console.log(`Buying ${quantity} of ${data?.name}`);
    } else {
      console.log("Select a quantity to buy");
    }
  };

  // Function for Notify Me
  const notifyMe = () => {
    console.log(`Notify me when ${data?.name} is back in stock`);
  };

  // Function to toggle wishlist
  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div className="min-h-screen mt-[80px] bg-black text-gray-200 w-full">
      <div className="w-full">
        <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 bg-black overflow-hidden p-4 gap-6 md:gap-10">

          <div className="grid grid-cols-3 gap-4 p-2">
            <img
              className="w-full col-span-3 bg-gray-900 h-[400px] object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
              src={data?.images[0]}
              alt={data?.name}
            />
            <div className="grid grid-cols-3 gap-2">
              {data?.images.slice(1, 4).map((image, index) => (
                <img
                  key={index}
                  className="w-full object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
                  src={image}
                  alt={`${data?.name} - Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-between p-6">
            <div className="flex justify-end p-2 ">
              <FaHeart
                className={`text-4xl cursor-pointer ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
                onClick={toggleWishlist}
              />
            </div>
            <div className="flex justify-between text-gray-500 font-bold">
              <span>{data?.category}</span>
              <span>{data?.company_name}</span>
            </div>
            <div>
              <h1 className="text-blue-400 font-bold text-3xl">{data?.name}</h1>
              <p className="text-gray-300 font-bold text-lg">{data?.description}</p>
            </div>
            <div className="text-gray-400 font-bold">Brand: {data?.brand}</div>
            <div className="flex gap-2 flex-wrap mt-2">
              {data?.size?.map((size, i) => (
                <div key={i} className="p-2 border border-blue-500 rounded-lg font-bold text-center">
                  {size}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="font-bold text-3xl">${data?.price.toFixed(2)}</div>
              <div className="flex justify-center items-center gap-2">
                <MyButton
                  label="+"
                  onClick={increaseQuantity}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl rounded-lg w-10"
                />
                <span className="text-lg">{quantity}</span>
                <MyButton
                  label="-"
                  onClick={decreaseQuantity}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl rounded-lg w-10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <MyButton
                type="button"
                label="Add to Cart"
                onClick={addToCart}
                className="bg-blue-500 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 text-white font-bold rounded-lg w-full"
              />
              {Number(data?.stock) > 0 ? (
                <MyButton
                  label="Buy Now"
                  onClick={buyNow}
                  className="bg-blue-500 hover:bg-blue-600 w-full text-white font-bold rounded-lg"
                />
              ) : (
                <MyButton
                  label="Notify Me"
                  onClick={notifyMe}
                  className="bg-blue-500 hover:bg-blue-600 w-full text-white font-bold rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Scrollable Section */}
      <div className="flex overflow-x-auto p-4 space-x-4 lg:w-[90%] lg:m-auto">
        {products?.map((e) => (
          <div key={e.id} className="flex-shrink-0 h-[300px] w-[250px] bg-black border border-gray-900 rounded-lg shadow-lg">
            <Link to={`/product/${e.id}`} >
              <img
                src={e.images[0]}
                className="w-full h-[230px] object-cover rounded-t-lg"
                alt={e.name}
              />
              <div className="p-2">
                <h2 className="font-semibold text-gray-300">{e.name}</h2>
                <div className="flex justify-between">
                  <p className="text-gray-400">${e.price.toFixed(2)}</p>
                  <p className="text-gray-400">{e.brand}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

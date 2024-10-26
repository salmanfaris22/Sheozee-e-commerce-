import { useParams } from "react-router-dom";
import { useGetAllProduct, useGetProduct } from "../hooks/Product-Hoosk";
import MyButton from "../components/common/Botton";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productID = Number(id);
  const { data } = useGetProduct(productID);
  const { data: products } = useGetAllProduct();
  
  // State for quantity management
  const [quantity, setQuantity] = useState(0);

  // Functions to manage quantity
  const increaseQuantity = () => {
    if (quantity < data?.stock) {
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

  return (
    <div className="min-h-screen mt-[100px] bg-gray-100 w-full">
      <div className="p-4 md:p-8 lg:p-12 grid gap-8 lg:w-[70%] lg:m-auto w-full">
        <div className="shadow-xl rounded-lg grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden p-4 gap-6 md:gap-10">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 gap-4">
            <img
              className="w-full h-[400px] object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
              src={data?.images[0]}
              alt={data?.name}
            />
            <div className="grid grid-cols-3 gap-2">
              {data?.images.slice(1, 5).map((image, index) => (
                <img
                  key={index}
                  className="object-cover h-[100px] transition-transform duration-300 transform hover:scale-105 rounded-lg"
                  src={image}
                  alt={`${data?.name} - Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2 justify-between p-6">
            <div className="flex justify-between text-gray-500 font-bold">
              <span>{data?.category}</span>
              <span>{data?.company_name}</span>
            </div>
            <div>
              <h1 className="text-blue-500 font-bold text-3xl">{data?.name}</h1>
              <p className="text-gray-700 font-bold text-lg">{data?.description}</p>
            </div>
            <div className="text-gray-600 font-bold">Brand: {data?.brand}</div>
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
        {products?.map((e) => {
          return (
            <div key={e.id} className="flex-shrink-0 h-[300px] w-[250px] bg-white rounded-lg shadow-lg">
              <img
                src={e.images[0]}
                className="w-full h-[230px] object-cover rounded-t-lg"
                alt={e.name} // Assuming you have a name property in your product
              />
              <div className="p-2">
                <h2 className="font-semibold text-gray-800">{e.name}</h2>
                <div className="flex justify-between">
                  <p className="text-gray-600">${e.price.toFixed(2)}</p>
                  <p className="text-gray-600">{e.brand}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;

import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAllProduct, useGetProduct } from "../hooks/Product-Hoosk";
import MyButton from "../components/common/Botton";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useAddToCart } from "../hooks/Cart-hook";
import { useAddRemoveWishList, useGetWishlist } from "../hooks/wishlist-Hook";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useAddReview, useDeeleteReview, useReviewEdit } from "../hooks/review-hook";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { id } = useParams();
  const productID = Number(id);
  const { data } = useGetProduct(productID);
  const { data: products } = useGetAllProduct();
  const { data: wislistss } = useGetWishlist();
  const { mutate: cart } = useAddToCart();
  const { mutate: wislist } = useAddRemoveWishList();
  const [quantity, setQuantity] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const {mutate:deleteReview}=useDeeleteReview()
  const { mutate: reviewAdd } = useAddReview(id); 
  const{mutate:updateReview} =    useReviewEdit(isEditing)
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

  const buyNow = (id, qty, price) => {
    navigate(`/byproduct/${id}/${qty}/${price}`);
  };

  const notifyMe = () => {
    console.log(`Notify me when ${data?.name} is back in stock`);
  };


  const [reviewData, setReviewData] = useState({
    comment: "",
    rating: null,
  });

  const handleRating = (value) => {
    setReviewData((prevState) => ({
      ...prevState,
      rating: value,
    }));
  };

  const handleReviewChange = (e) => {
    setReviewData((prevState) => ({
      ...prevState,
      comment: e.target.value,
    }));
  };


  const submitReview = () => {
    if (reviewData.comment && reviewData.rating) {
      if (isEditing) {
        console.log(isEditing);
        updateReview({ comment: reviewData.comment, rating: reviewData.rating, reviewID: isEditing },isEditing);
        setIsEditing(false); 
      } else {
        reviewAdd({ comment: reviewData.comment, rating: reviewData.rating });
      }
      setReviewData({ comment: "", rating: null, reviewID: null });
    } else {
      if (reviewData.comment === "") {
        toast.warn("Please enter a review.");
      } else if (reviewData.rating === null) {
        toast.warn("Please enter a rating.");
      }
    }
  };
  const handleEditReview = (review,id) => {

    setIsEditing(id);
    setReviewData({
      comment: review.comment,
      rating: review.rating,
      reviewID: review.id,
    });
  };

  const handleDeleteReview = (reviewID) => {
    deleteReview(reviewID);
  };
  return (
    <div className="min-h-screen mt-[80px] bg-white text-black w-full">
      <div className="w-[80%] m-auto">
        <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 shadow-md bg-white overflow-hidden p-4 gap-6 md:gap-10">
          <div className="grid grid-cols-3 gap-4 p-2">
            <img
              className="w-full col-span-3 bg-gray-200 h-[400px] object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
              src={data?.images?.filter((e) => e?.is_main === true)[0]?.url || data?.images[0]?.url}
              alt={data?.name}
            />
            <img
              className="w-full h-[100px] col-span-1 bg-gray-200 object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
              src={data?.images[0]?.url}
              alt={data?.name}
            />
            <img
              className="w-full h-[100px] col-span-1 bg-gray-200 object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
              src={data?.images[0]?.url}
              alt={data?.name}
            />
            <img
              className="w-full h-[100px] col-span-1 bg-gray-200 object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
              src={data?.images[0]?.url}
              alt={data?.name}
            />
          </div>

          <div className="flex flex-col gap-2 justify-between p-6">
            <div className="flex justify-end p-2">
              <FaHeart
                className={`text-3xl cursor-pointer ${wislistss?.find((e) => e?.id === data?.id) ? "text-red-600" : "text-gray-200"}`}
                onClick={() => wislist(data.id)}
              />
            </div>
            <div className="flex justify-between text-gray-600 font-bold">
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
                <div key={i} className="p-2 border border-blue-500 rounded-lg font-bold text-center text-black">
                  {size}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="font-bold text-3xl">${data?.price}</div>
              <div className="flex justify-center items-center gap-2">
                <MyButton
                  label="+"
                  onClick={increaseQuantity}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl rounded-lg w-10"
                />
                <span className="text-lg">{quantity}</span>
                <MyButton
                  label="-"
                  disabled={quantity <= 1}
                  onClick={decreaseQuantity}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl rounded-lg w-10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <MyButton
                type="button"
                label="Add to Cart"
                onClick={() => cart([data.id, 1, "add"])}
                className="bg-blue-500 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 text-white font-bold rounded-lg w-full"
              />
              {Number(data?.stock) > 0 ? (
                <MyButton
                  label="Buy Now"
                  onClick={() => buyNow(data?.id, quantity, data?.price)}
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


      <div className="flex overflow-x-auto p-4 space-x-4 lg:w-[90%] lg:m-auto">
        {products?.map((e) => (
          <div key={e.id} className="flex-shrink-0 h-[300px] w-[250px] bg-white border border-gray-300 rounded-lg shadow-lg">
            <Link to={`/product/${e.id}`}>
              <img
                src={e.images[0]}
                className="w-full h-[230px] object-cover rounded-t-lg"
                alt={e.name}
              />
              <div className="p-2">
                <h2 className="font-semibold text-gray-800">{e.name}</h2>
                <div className="flex justify-between">
                  <p className="text-gray-600">${e.price.toFixed(2)}</p>
                  <p className="text-gray-600">{e.brand}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>


       {/* Reviews Section */}
       <div className="p-4 flex flex-col gap-6">
        {data?.reviews?.map((e) => (
          <div key={e?.ID} className="border p-4 rounded-lg shadow-lg bg-white">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-lg">{e?.user_name}</div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>
                    {index < e?.rating ? (
                      <IoIosStar className="text-yellow-500" />
                    ) : (
                      <IoIosStarOutline className="text-gray-400" />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{e?.comment}</p>
            {localStorage.getItem("user_id") == e?.user_id &&
            <div className="flex justify-end gap-2">
            

              <MyButton
                label="Edit"
                onClick={() => handleEditReview(e,e.ID)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg"
              />
              <MyButton
                label="Delete"
                onClick={() => handleDeleteReview(e?.ID)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg"
              />
            </div>}
          </div>
        ))}

        {/* Add/Update Review Form */}
        <div className="p-4 border rounded-lg bg-white shadow-lg">
          <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Review" : "Add Review"}</h2>
          <textarea
            value={reviewData.comment}
            onChange={handleReviewChange}
            className="w-full h-24 border p-2 rounded-lg"
            placeholder="Write your review here"
          />
          <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRating(value)}
                className={`cursor-pointer text-2xl ${
                  reviewData.rating >= value ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                <IoIosStar />
              </span>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <MyButton
              label={isEditing ? "Update Review" : "Submit Review"}
              onClick={submitReview}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

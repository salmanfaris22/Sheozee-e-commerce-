import { useAddToCart } from "../hooks/Cart-hook";
import { useAddRemoveWishList, useGetWishlist } from "../hooks/wishlist-Hook";
import { FaHeart, FaRegHeart } from "react-icons/fa";


const Wishlist = () => {
    const { data } = useGetWishlist();
    const { mutate:cart } = useAddToCart();
    const { mutate } = useAddRemoveWishList();
   

    return (
        <div className="max-w-4xl mt-[100px] mx-auto p-6 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>
            {data?.length === 0 ? (
                <p className="text-center text-gray-600">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.map((item) => (
                        <div key={item.id} className="relative">
                            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="relative group">
                                    <img
                             src={item?.images?.filter((e)=>e?.is_main==true)[0]?.url || item?.images[0]?.url}
                                        alt={item.product_name}
                                        className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    />
                                    <button
                                        className="absolute top-2 right-2 text-red-500 text-xl"
                                    >
                                        {data?.some((wishItem) => wishItem.id === item.id) ? (
                                            <FaHeart onClick={()=>mutate(item.id)} />
                                        ) : (
                                            <FaRegHeart  onClick={()=>mutate(item.id)}/>
                                        )}
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.product_name}
                                    </h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                                <button onClick={()=>cart([item.id,1,"add"])} className="bg-blue-500 text-white w-full py-2 rounded-b-lg hover:bg-blue-600">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;

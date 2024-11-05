import { useSelector } from 'react-redux';
import MyButton from '../components/common/Botton';
import FilterBar from '../components/layout/FilterBar';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/common/Loading';
import { useEffect, useState } from 'react';
import { useAddToCart } from '../hooks/Cart-hook';
import { useAddRemoveWishList, useGetWishlist } from '../hooks/wishlist-Hook';
import { FaHeart } from "react-icons/fa";

const AllCategories = () => {
    const { data, loading } = useSelector(state => state.product);
    const {data:wislistss} =useGetWishlist()
    const { mutate: wishList } = useAddRemoveWishList();
    const [loadings, setLoading] = useState(!loading);
    const { mutate } = useAddToCart();
  
    useEffect(() => {
        setLoading(false);
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [loading]);


    const handleToggleWishlist = (itemId) => {
        console.log(itemId);
        wishList(itemId); 
    };

    if (loadings) {
        return (
            <div className='h-screen flex items-center justify-center bg-white'>
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className='mt-[130px] min-h-screen bg-gray-50 text-black'>
            <div className='flex justify-end p-4'>
                <FilterBar />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
                {data && data.map((item) => (
                    <div key={item.id} className="shadow-sm bg-white p-4 h-[350px] rounded-md relative">

                        <div className='absolute top-2 right-2 z-10'>
                   
                       
                            <FaHeart 
                      
                                className={`text-3xl cursor-pointer ${wislistss?.filter((e)=>e.id==item.id).length!=0 || null? 'text-red-600' : 'text-gray-200'}`} 
                                onClick={() => handleToggleWishlist(item.id)} 
                            />
                        </div>
                        <Link to={`/product/${item.id}`}>
                            <img
                                // src={item?.images[0]}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                        <div className="mt-2">
                            <div className="flex justify-between items-center text-gray-700">
                                <span className="font-semibold">{item.name}</span>
                                <span className="text-blue-600 font-bold">{item.price}$</span>
                            </div>

                            <MyButton
                                label="Buy Now"
                                onClick={() => console.log("Buy Now clicked")}
                                className="w-full mt-2 border text-black py-2 rounded-md transition duration-300 hover:bg-blue-500 hover:text-white"
                            />

                            <MyButton
                                label="Add to Cart"
                                onClick={() => mutate([item.id, 1, "add"])}
                                className="w-full mt-2 border bg-transparent text-gray-700 py-2 rounded-md transition duration-300 hover:bg-blue-500 hover:text-white"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCategories;

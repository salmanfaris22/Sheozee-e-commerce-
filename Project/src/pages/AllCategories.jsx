import { useSelector } from 'react-redux';
import MyButton from '../components/common/Botton';
import FilterBar from '../components/layout/FilterBar';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/common/Loading';
import { useEffect, useState } from 'react';

const AllCategories = () => {
    const { data, loading } = useSelector(state => state.product);
    const [loadings, setLoading] = useState(!loading);

    useEffect(() => {
        setLoading(false);
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [loading]);

    if (loadings) {
        return (
            <div className='h-screen flex items-center justify-center bg-black'>
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className='mt-[130px] min-h-screen bg-black text-gray-200'>
            <div className='flex justify-end p-4'>
                <FilterBar />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
                {data && data?.map((item) => (
                    <div key={item.id} className="shadow-lg p-4 h-[350px] rounded-md bg-black border  border-gray-900">
                        <Link to={`/product/${item.id}`}>
                            <img
                                src={item.images[0]}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                        <div className="mt-2">
                            <div className="flex justify-between items-center text-gray-300">
                                <span className="font-semibold">{item.name}</span>
                                <span className="text-blue-400 font-bold">{item.price}$</span>
                            </div>

                            <MyButton
                                label="Buy Now"
                                onClick={() => console.log("Buy Now clicked")}
                                className="w-full mt-2 border border-gray-600 bg-blue-600 text-white py-2 rounded-md transition duration-300 hover:bg-blue-500 hover:text-white"
                            />

                            <MyButton
                                label="Add to Cart"
                                onClick={() => console.log("Add to Cart clicked")}
                                className="w-full mt-2 border border-gray-600 bg-transparent text-gray-200 py-2 rounded-md transition duration-300 hover:bg-blue-500 hover:text-white"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCategories;

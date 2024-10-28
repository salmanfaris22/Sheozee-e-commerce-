
import { useSelector } from 'react-redux';
import MyButton from '../components/common/Botton';
import FilterBar from '../components/layout/FilterBar';

import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/common/Loading';
import { useEffect, useState } from 'react';




const AllCategories = () => {

    
     const {data,loading} = useSelector(state => state.product);
     const [loadings, setLoading] = useState(!loading);
     useEffect(() => {
        setLoading(false)
         if(loading){
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
         }
     }, [loading]);

     if (loadings) {
         return <div className='h-screen'><LoadingSpinner />;</div>
     }
    return (
      <div className='mt-[100px] min-h-screen'>
        <div className='flex justify-end'>
        <FilterBar/>
        </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
          
            {data && data?.map((item) => (
                <div key={item.id} className="shadow-lg p-4 h-[390px] rounded-md bg-white">
                    <Link to={`/product/${item.id}`}>
                        <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-md"
                        />
                    </Link>
                    <div className="mt-2">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">{item.name}</span>
                            <span className="text-blue-500 font-bold">{item.price}$</span>
                        </div>

                        <MyButton
                            label="Buy Now" 
                            onClick={() => console.log("g")}  
                            className="w-full hover:bg-blue-500 hover:text-white mt-2 border py-2 rounded-md transition duration-300" 
                        />
                         
                        <MyButton 
                            label="Add to Cart" 
                            onClick={() => console.log("g")}  
                            className="w-full hover:bg-blue-500 hover:text-white mt-2 border py-2 rounded-md transition duration-300" 
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
}

export default AllCategories;

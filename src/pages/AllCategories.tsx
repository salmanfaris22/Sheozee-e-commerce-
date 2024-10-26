
import MyButton from '../components/common/Botton';
import { useGetAllProduct } from '../hooks/Product-Hoosk';
import { Link } from 'react-router-dom';

const AllCategories = () => {
    const { data, isLoading, error } = useGetAllProduct();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products.</div>; 
  
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[100px] gap-5'>
            {data && data.map((item) => (
                <div key={item.id} className="shadow-lg p-4 h-[390px] rounded-md bg-white">
                    <Link to={`/byProducts/${item.id}`}>
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
    );
}

export default AllCategories;

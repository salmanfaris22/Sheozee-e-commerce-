import { useState } from "react";
import { useFilterProducts } from "../hooks/Product-Hoosk";
import MyButton from "../components/common/Botton";
import { Link } from "react-router-dom";
import { Filters } from "../types/products";


const Categories_list = () => {
    // const location = useLocation();



  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined); 
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined); 
  const [isAvailable, setIsAvailable] = useState<boolean | undefined>(undefined); 
  const [category, setCategory] = useState(""); 

// const updateQueryParams = (filterValue: string) => {

//     const searchParams = new URLSearchParams(location.search);
//     if (filterValue) {
//       searchParams.set('filter', filterValue); 
//       const filter = searchParams.get('filter');
//        console.log(filter);
//        setBrand(String(filter))
//     }
   
//     navigate(`${location.pathname}?${searchParams.toString()}`);
//   };
//   updateQueryParams("men")
  const { data: products, loading, error } = useFilterProducts({
    brand,
    min_price: minPrice,  
    max_price: maxPrice,  
    is_available: isAvailable,  
    category:category,
  } as Filters);




  return (
    <div className="mt-[100px]">
      {/* Filter Form */}
      <form  className="mb-4">
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice ?? ''}
          onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
          className="border p-2 rounded mx-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice ?? ''}
          onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
          className="border p-2 rounded mx-2"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isAvailable === true}
            onChange={(e) => setIsAvailable(e.target.checked ? true : undefined)}
          />
          <span className="ml-2">Available</span>
        </label>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded mx-2"
        />
        <MyButton
          label="Apply Filters"
            onClick={()=>console.log("nu")}
          className="bg-blue-500 text-white p-2 rounded"
        />
      </form>

      {/* Loading and Error Handling */}
      {loading && <div>Loading products...</div>}
      {error && <div className="text-red-500">{error}</div>}

      {/* Product List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[100px] gap-5'>
        {products && products.length > 0 ? (
          products.map((item) => (
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
                  onClick={() => console.log("Buy Now clicked")}  
                  className="w-full hover:bg-blue-500 hover:text-white mt-2 border py-2 rounded-md transition duration-300" 
                />
                 
                <MyButton 
                  label="Add to Cart" 
                  onClick={() => console.log("Add to Cart clicked")}  
                  className="w-full hover:bg-blue-500 hover:text-white mt-2 border py-2 rounded-md transition duration-300" 
                />
              </div>
            </div>
          ))
        ) : (
          !loading && <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default Categories_list;




import FilterComponent from "../components/layout/FilterBar";




const Categories_list = () => {





  return (
    <div className="mt-[100px]">
    
<FilterComponent/>
      {/* Loading and Error Handling */}
      {/* {loading && <div>Loading products...</div>}
      {error && <div className="text-red-500">{error}</div>} */}

      {/* Product List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[100px] gap-5'>
        {/* {products && products.length > 0 ? (
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
        )} */}
      </div>
    </div>
  );
};

export default Categories_list;

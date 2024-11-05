import { useState } from "react";
import { useSearchApi } from "../../hooks/Product-Hoosk";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useSearchApi(searchTerm); 

  
  return (
    <div className="search-container w-[300px] z-[999999] rounded-lg relative">
      <form className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search for products"
          className="border  rounded-lg p-2 flex-grow bg-white text-black"
        />
      </form>
      {loading && <div className="text-white">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {searchTerm !== "" && (
        <div className="results mt-4  absolute bg-white rounded-lg text-white w-[100%] p-2 left-0 overflow-auto max-h-[400px] ">
          {data?.length > 0 ? (
            data.map((product) => (
              <div key={product.id} onClick={() => setSearchTerm("")} className="border z-[999999] rounded p-4 mb-2 flex justify-between bg-white hover:bg-gray-100">
                <Link to={`/product/${product.id}`} className="flex justify-between w-[100%]">
                  <div>
                    <h2 className="font-bold text-black">{product.name}</h2>
                    <p className="text-gray-700">${product.price.toFixed(2)}</p>
                  </div>
                  <img src={product.images[0]} className="h-[50px]" alt="" />
                </Link>
              </div>
            ))
          ) : (
            <div>No products found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;

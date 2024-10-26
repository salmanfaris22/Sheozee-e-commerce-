import { useState } from "react";
import { useSearchApi } from "../../hooks/Product-Hoosk";



const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useSearchApi(searchTerm); // Automatically fetches when searchTerm changes
    console.log(data);
  return (
    <div className="search-container">
      <form className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Updates the search term on change
          placeholder="Search for products"
          className="border rounded p-2 flex-grow"
        />
        {/* Removed the button since we want to search on input change */}
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
     {searchTerm != "" &&
      <div className="results mt-4  absolute bg-white w-[100%] left-0  overflow-auto h-[400px] ">
      {data?.length > 0 ? (
        data.map((product) => (
          <div key={product.id} className="border rounded p-4 mb-2 flex justify-between">
          <div>
          <h2 className="font-bold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>

            <img src={product.images[0]}  className="h-[50px]" alt="" />

          </div>
        ))
      ) : (
        <div>No products found.</div>
      )}
    </div>
     } 
     
    </div>
  );
};

export default SearchComponent;

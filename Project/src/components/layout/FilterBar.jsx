import {  useState } from "react";

import { useFilterProducts } from "../../hooks/Product-Hoosk"; // Adjust the import based on your structure
import MyButton from "../common/Botton";
import { FaFilter, FaTimes } from 'react-icons/fa'; // Importing icons


const FilterComponent = () => {
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [isAvailable, setIsAvailable] = useState(undefined);
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false); 


    useFilterProducts({
    brand,
    min_price: minPrice,
    max_price: maxPrice,
    is_available: isAvailable,
    category: category,
  });

 

  const brands = ["nike", "puma", "adidas"];
  const categories = ["men", "women"];

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsOpen(false); // Close the filter panel after applying filters
  };

  return (
    <div className="fixed bg-white h-screen top-0 z-[9999999] p-2 rounded-lg">
      <button
        onClick={toggleFilter}
        className="absolute top-4 right-4 mt-[60px] bg-blue-500 text-white p-2 rounded-full flex items-center justify-center"
      >
        {isOpen ? <FaTimes /> : <FaFilter />} 
      </button>

      {isOpen && (
        <form className="mb-4 flex flex-col h-screen w-[400px] gap-4 p-4 mt-[100px]" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <h3 className="font-semibold">Brands</h3>
            <div className="flex space-x-2">
              {brands.map((b) => (
                <MyButton
                  key={b}
                  label={b}
                  onClick={() => setBrand(prev => prev === b ? undefined : b)} // Toggle brand selection
                  className={`border p-2 rounded ${brand === b ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <h3 className="font-semibold">Categories</h3>
            <div className="flex space-x-2">
              {categories.map((c) => (
                <MyButton
                  key={c}
                  label={c}
                  onClick={() => setCategory(prev => prev === c ? undefined : c)} // Toggle category selection
                  className={`border p-2 rounded ${category === c ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                />
              ))}
            </div>
          </div>

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
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isAvailable === true}
              onChange={(e) => setIsAvailable(e.target.checked ? true : undefined)}
            />
            <span className="ml-2">Available</span>
          </label>
          
          <MyButton
            label="Apply Filters"
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          />
        </form>
      )}
    </div>
  );
};

export default FilterComponent;

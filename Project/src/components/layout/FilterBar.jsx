import { useState } from "react";
import { useFilterProducts } from "../../hooks/Product-Hoosk"; 
import MyButton from "../common/Botton";

const FilterComponent = () => {
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [isAvailable, setIsAvailable] = useState(undefined);
  const [category, setCategory] = useState("");

  useFilterProducts({
    brand,
    min_price: minPrice,
    max_price: maxPrice,
    is_available: isAvailable,
    category: category,
  });

  const brands = ["nike", "puma", "adidas"];
  const categories = ["men", "women"];



  return (
    <div className="bg-white fixed mt-[80px] p-2 z-[99] flex justify-center items-center w-[100%] top-0 right-0">
      <form className="justify-between items-center  w-[100%] flex gap-4">

        <div className="flex justify-center items-center gap-2  rounded-lg">
          <h3 className="font-semibold text-black">Brands</h3>
          <div className="flex space-x-2">
            {brands.map((b) => (
              <MyButton
                key={b}
                label={b}
                onClick={() => setBrand((prev) => (prev === b ? undefined : b))} // Toggle brand selection
                className={` p-2 border rounded ${brand === b ? "bg-blue-500 text-white" : "bg-white text-black"}`}
              />
            ))}
          </div>
        </div>


        <div className="flex justify-center items-center gap-2 bg-white rounded-lg">
          <h3 className="font-semibold text-black">Categories</h3>
          <div className="flex space-x-2">
            {categories.map((c) => (
              <MyButton
                key={c}
                label={c}
                onClick={() => setCategory((prev) => (prev === c ? undefined : c))} // Toggle category selection
                 className={` p-2 border rounded ${categories === c? "bg-blue-500 text-white" : "bg-white text-black"}`}
              />
            ))}
          </div>
        </div>
      
        <div className="flex justify-center items-center gap-2 bg-white rounded-lg">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice ?? ''}
            onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
              className="border bg-white  rounded mx-2 p-1"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice ?? ''}
            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
             className="border bg-white  rounded mx-2 p-1"
          />
        </div>
        

        <label className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg">
          <input
            type="checkbox"
            checked={isAvailable === true}
            onChange={(e) => setIsAvailable(e.target.checked ? true : undefined)}
          />
          <span className="ml-2 text-black">Available</span>
        </label>
       
      </form>
    </div>
  );
};

export default FilterComponent;

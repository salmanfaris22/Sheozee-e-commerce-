import { useGetAllProduct } from "../../hooks/Product-Hoosk";
import MyButton from "../common/Botton";

const SellingList = () => {
  const { data, isLoading, error } = useGetAllProduct();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="bg-gray-100">
      <div className="text-blue-500 font-bold text-4xl p-5  flex text-center  mt-6   justify-center items-center">
        Best Sellerlkmlk
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-gray-100 gap-4 p-10">
        {data &&
        
          data?.map((item) => (
            <div

              data-aos="zoom-in-up"
              key={item.id}
              className="relative h-[400px] w-[300px] p-4 bg-white shadow-md rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={item.images[0]}
                alt={item.images[0]}
                data-aos="zoom-in-up"
                className="w-full object-cover h-[300px] rounded-md transition-transform duration-300 ease-in-out group-hover:blur-sm"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MyButton 
                  label={"Buy Now"} 
                  type={"button"} 
                  onClick={() => console.log("clicked")} 
                  className={"text-white text-lg hover:bg-white hover:text-blue-500 font-semibold bg-blue-600 py-2 px-4 rounded-lg"}
                />
              </button>

              <div className="flex flex-col mt-2">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-gray-800">{item.brand}</div>
                  <div className="text-blue-500 font-semibold">
                    {item.price}$
                  </div>
                </div>
                <div className="text-gray-600 font-medium">{item.category}</div>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center relative h-[400px] w-[300px] p-4 bg-white shadow-md rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105">
           
           <MyButton 
                  label={" More product"} 
                  type={"button"} 
                  onClick={() => console.log("clicked")} 
                  className={"text-white text-lg border border-blue-500 hover:bg-white hover:text-blue-500 font-semibold bg-blue-600 py-2 px-4 rounded-lg"}
                />
          </div>
      </div>
    </div>
  );
};

export default SellingList;

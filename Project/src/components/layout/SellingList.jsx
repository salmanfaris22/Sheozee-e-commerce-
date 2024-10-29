import { useGetAllProduct } from "../../hooks/Product-Hoosk";
import MyButton from "../common/Botton";

const SellingList = () => {
  const { data, isLoading, error } = useGetAllProduct();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="text-blue-600 font-bold text-4xl p-5 text-center mt-6">
        Best Seller
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-10">
        {data &&
          data.map((item) => (
            <div
              data-aos="zoom-in-up"
              key={item.id}
              className="relative h-[400px] w-[300px] p-4 bg-white  border-gray-300 shadow-md rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full object-cover h-[300px] rounded-md transition-transform duration-300 ease-in-out group-hover:blur-sm"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MyButton
                  label={"Buy Now"}
                  type={"button"}
                  onClick={() => console.log("clicked")}
                  className="text-lg bg-blue-600 text-white hover:bg-white hover:text-blue-500 font-semibold py-2 px-4 rounded-lg"
                />
              </button>
              <div className="flex flex-col mt-2 text-gray-800">
                <div className="flex justify-between items-center">
                  <div className="font-bold">{item.brand}</div>
                  <div className="text-blue-600 font-semibold">
                    {item.price}$
                  </div>
                </div>
                <div className="text-gray-600">{item.category}</div>
              </div>
            </div>
          ))}
        <div className="flex justify-center items-center h-[400px] w-[300px] p-4 bg-gray-100 shadow-md rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105">
          <MyButton
            label={"More Products"}
            type={"button"}
            onClick={() => console.log("clicked")}
            className="text-lg border border-blue-500 bg-blue-600 text-white hover:bg-white hover:text-blue-500 font-semibold py-2 px-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SellingList;

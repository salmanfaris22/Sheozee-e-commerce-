import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/Product-Hoosk";
import MyButton from "../components/common/Botton";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productID = Number(id);
  const { data } = useGetProduct(productID);

  console.log("====================================");
  console.log(data);
  console.log("====================================");

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="mt-[100px] p-4 grid gap-8 bg-white  w-full">
        <div className="shadow-xl  rounded-lg grid grid-cols-2 overflow-hidden p-4 gap-10">
          <div className="grid grid-cols-3">
            <img
              className="w-full h-[400px] col-span-3 object-cover transition-transform duration-300  transform hover:scale-105 p-4  
             rounded-lg
            "
              src={data?.images[0]}
              alt={data?.name}
            />

            <img
              className="object-cover transition-transform duration-300  transform hover:scale-105 p-4  
             rounded-lg
            "
              src={data?.images[0]}
              alt={data?.name}
            />
            <img
              className="object-cover transition-transform duration-300  transform hover:scale-105 p-4  
             rounded-lg
            "
              src={data?.images[0]}
              alt={data?.name}
            />
            <img
              className="object-cover transition-transform duration-300  transform hover:scale-105 p-4  
             rounded-lg
            "
              src={data?.images[0]}
              alt={data?.name}
            />
          </div>
          <div >
            <div className="flex justify-between text-gray-500 font-bold"><span>{data?.category}</span><span>{data?.company_name}</span></div>
            <div className=" text-blue-500 font-bold text-3xl">{data?.name}</div>
            <div className="text-gray-700 font-bold text-2xl">{data?.description}</div>
            <div className="flex gap-4">
              {data?.size?.map((e,i)=>{
                return(
                  <div key={i} className=" p-2 border border-blue-500 rounded-lg font-bold">
                      {e}
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between  items-center">
              <div className=" font-bold text-3xl">${data?.price}</div>
            <div className="gap-2 flex justify-center items-center">
             <MyButton label="+" onClick={()=>console.log("dd")} 
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold tex-2xl 
              rounded-lg
             "/>
             0
             <MyButton label="-" onClick={()=>console.log("dd")} 
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold tex-2xl 
              rounded-lg
             "/>
            </div>
          
            </div>
            <div className="flex justify-between">
            <MyButton label="Add to Cart" onClick={()=>console.log("dd")} 
             className="bg-blue-500 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 text-white font-bold tex-2xl 
              rounded-lg
             "/>
               <MyButton label="By Now" onClick={()=>console.log("dd")} 
             className="bg-blue-500 hover:bg-blue-600 text-white font-bold tex-2xl 
              rounded-lg
             "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

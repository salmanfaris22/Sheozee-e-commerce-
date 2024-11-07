import { Link } from "react-router-dom";
import { useGetAllProduct } from "../../../hooks/Product-Hoosk";
import { useDeleteProduct } from "../../../hooks/admin-product-add";



const AllProducts = () => {
    const { data } = useGetAllProduct();
   const {mutate}= useDeleteProduct()
  const handleDeleteProduct = (product_id) => {
    mutate(product_id)
  };

  return (
    <div className="ml-[80px] flex flex-col gap-2 ">
{data?.map((e)=>{
    return (
        <div key={e?.id} className="grid grid-cols-3 bg-white p-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 gap-4" >
            <div className="flex flex-col justify-between">
            <div className="text-blue-600 font-bold"><span className=" font-bold text-gray-500">Name:</span>{e?.name}</div>
            <div className="font-bold text-gray-700"><span className=" font-bold text-gray-500">Brand:</span>{e?.brand}</div>
            <div className="font-bold text-gray-700"><span className=" font-bold text-gray-500">Category:</span>{e?.category}</div>
            </div>
            <div className="flex flex-col justify-between">
            <div className="font-bold text-green-600"><span className=" font-bold text-gray-500">Price:</span> ${e?.price}</div>
            <div className={e?.stock > 10 ? "text-green-600 font-bold":"text-red-600 font-bold"}><span className=" font-bold text-gray-500">Stock:</span>{e?.stock}</div>
            <div className={e?.is_available ? "text-green-600 font-bold":"text-red-600 font-bold"}> <span className=" font-bold text-gray-500">Avalible:</span>{e?.is_available ? "true": "false"}</div>
            </div>
           <div className="flex justify-end">
           <img  className="h-[100px] rounded-lg w-[100px] object-cover" src={e?.images[0]?.url} alt="" />
           </div>
           <div className="flex items-center justify-between col-span-3 bg-gray-300 rounded-lg p-2" >
                <div className="flex gap-3 justify-between w-[40%]">
                <span>id:{e?.id}</span>
                <span>created_at:{new Date(e?.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex gap-2">
                    <Link to={`/editProduct/${e?.id}`}>
                  
                    <button className=" bg-green-500 hover:bg-green-600 font-bold text-white p-2 rounded-lg">Edit Product</button>  </Link>
                    <button onClick={()=>handleDeleteProduct(e?.id)} className=" bg-red-500 hover:bg-red-600 font-bold text-white p-2 rounded-lg">Remove Product</button>
                </div>

           </div>
        </div>
    )
})}
    </div>
  );
};

export default AllProducts;

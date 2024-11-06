import { useGetAllProduct } from "../../../hooks/Product-Hoosk";



const AllProducts = () => {
    const { data } = useGetAllProduct();

    console.log(data);
  return (
    <div className="">
  hjk
    </div>
  );
};

export default AllProducts;

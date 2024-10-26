import axios from "axios";
import { Product, ProductResponse } from "../types/products";





export const  fetchProducts =async():Promise<Product[]>=>{
    const res = await axios.get<ProductResponse>("http://localhost:8080/products/");
    return res?.data?.message
}

export const fetchProduct =async(id:number):Promise<Product>=>{
    const res =await axios.get<Product>(`http://localhost:8080/products/${id}`)
    return res.data
}




export const searchProducts = async (productName: string) => {
  const response = await axios.get(`http://localhost:8080/products/search`, {
    params: { product: productName },
  });
  return response.data; 
};
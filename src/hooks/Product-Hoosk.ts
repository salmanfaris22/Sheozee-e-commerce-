import { useQuery } from "@tanstack/react-query";

import { Product } from "../types/products";
import { fetchProduct, fetchProducts } from "../api/productAPI";



export const useGetAllProduct=()=>{
     return useQuery<Product[],Error>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })
}

export const useGetProduct=(id:number)=>{
    return useQuery<Product,Error>({
       queryKey: ['product'],
       queryFn: ()=>fetchProduct(id),
       enabled: !!id
   })
}
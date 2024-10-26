import { useQuery } from "@tanstack/react-query";

import { ApiError, Product } from "../types/products";
import { fetchProduct, fetchProducts, searchProducts } from "../api/productAPI";
import { useEffect, useState } from "react";



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

export const useSearchApi=(searchTerm:string)=>{
    const [data, setData] = useState<Product[]>([]); // Replace `any` with your product type
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
          if (!searchTerm) return; // Do not fetch if searchTerm is empty
    
          setLoading(true);
          setError(null); // Reset the error state before fetching
            
          try {
            const result = await searchProducts(searchTerm);
            setData(result); // Set the fetched data
          } catch (err) {
            const errorResponse = err as ApiError;
            setError(errorResponse.message || 'An error occurred while fetching data.');
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [searchTerm]);
    
      return { data, loading, error };
}
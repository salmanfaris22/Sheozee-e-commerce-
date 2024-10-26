import { useQuery } from "@tanstack/react-query";

import { ApiError, Filters, Product } from "../types/products";
import { fetchProduct, fetchProducts, filterProducts, searchProducts } from "../api/productAPI";
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
    const [data, setData] = useState<Product[]>([]); 
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
          if (!searchTerm) return; 
    
          setLoading(true);
          setError(null);
            
          try {
            const result = await searchProducts(searchTerm);
            setData(result); 
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



export const useFilterProducts = (filters:Filters)=>{
        const [data,setData]=useState<Product[]>([])
        const [loading, setLoading] = useState<boolean>(false);
        const [error, setError] = useState<string | null>(null);


        useEffect(()=>{
            const fetchData = async()=>{
                setLoading(true);
                setError(null);

                try{
                    const result = await filterProducts(filters)
                    setData(result)
                    setLoading(false)
                   
                }catch(err){
                    const erros   =err as ApiError
                    setError(  erros.message ||  'An error occurred while fetching filtered products.');
                }finally{
                    setLoading(false)
                }
            }

            fetchData()
        },[filters.brand,filters.category,filters.max_price,filters.min_price])


        return {data,loading,error}
}
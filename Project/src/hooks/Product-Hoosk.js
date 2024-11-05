import { useQuery } from "@tanstack/react-query";

import { fetchProduct, fetchProducts, filterProducts, searchProducts } from "../api/productAPI";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetProduct } from "../features/products/ProductSlice";




export const useGetAllProduct = () => {

    return useQuery({
        queryKey: ['products'],
        queryFn:fetchProducts,
    });
};


export const useGetProduct = (id) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProduct(id),
        enabled: !!id,
    });
};


export const useSearchApi = (searchTerm) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!searchTerm) return;

            setLoading(true);
            setError(null);

            try {
                const result = await searchProducts(searchTerm);

                setData(result);
            } catch (err) {
                setError(err.message || 'An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm]);
  
    return { data, loading, error };
};

// Hook for filtering products based on given filters
export const useFilterProducts = (filters) => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch =useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            dispatch(GetProduct({loading}));
            
            setError(null);
            try { 
                const result = await filterProducts(filters);
                setData(result);

                dispatch(GetProduct({result,loading,error}));
            } catch (err) {
                setError(err.message || 'An error occurred while fetching filtered products.');
            } finally {
                setLoading(false);
               
            }
        };

        fetchData();
    }, [filters.brand,filters.min_price,filters.max_price,filters.is_available,filters.category]);

    return { data, loading, error };
};

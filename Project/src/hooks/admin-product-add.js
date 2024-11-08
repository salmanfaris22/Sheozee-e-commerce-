import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




export const AdminProducrAdd = () => {
    const navigate =useNavigate()
    return useMutation({
        mutationFn: async (product) => {
            const res = await axios.post("http://localhost:8080/v1/auth/product/add", product,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            toast.success(data?.message)
            navigate("/allPrudcut")
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.message)
        },
    });
};
export const useEditsProduct = (id) => {
    const navigate =useNavigate()
    return useMutation({
        mutationFn: async (product) => {
            const updatedFormData = {
                ...product,
                price: parseFloat(product.price),
                stock: parseInt(product.stock, 10),
              };
            const res = await axios.put(`http://localhost:8080/v1/auth/product/update?product_id=${id}`, updatedFormData,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: () => {
            toast.success("product updated ")
            navigate("/allPrudcut")
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.message)
        },
    });
};
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product_id) => {
      const response = await axios.delete(`http://localhost:8080/v1/auth/product/delete?product_id=${product_id}`,
       { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["products"]
        })
        toast.success(data?.message); 
    },
    onError: (error) => {
      toast.warning(error?.response?.data?.message);
    },
  });
};
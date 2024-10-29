import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const useAddToCart = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product_id) => {

       const userId= localStorage.getItem("userid")
      const response = await axios.post(`http://localhost:8080/user/addCart/${userId}/item?product_id=${product_id[0]}&qty=${product_id[1]}&use=${product_id[2]}&`,
        {}, { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["cart"]
        })
        toast.success(data.message)

        

    },
    onError: (error) => {

      toast.warning(error?.response?.data?.message);
    },
  });
};

export const useGetCartItem = ()=>{
    return useQuery({ 
        queryKey: ["cart"],
         queryFn: async()=>{
            const userId= localStorage.getItem("userid")
            const res = await axios.get(`http://localhost:8080/user/cartItems/${userId}`, {
                withCredentials: true,
              });
            return res.data
         },
       
     })
}
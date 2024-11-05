import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { toast } from "react-toastify";




export const useAddRemoveWishList = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product_id) => {
 
      const response = await axios.post(`http://localhost:8080/v1/auth/wishlist/?productId=${product_id}`,
        {}, { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["wishlist"]
        })
       console.log(data.message)
    },
    onError: (error) => {

      toast.warning(error?.response?.data?.message);
    },
  });
};

export const useGetWishlist = ()=>{

    return useQuery({ 
        queryKey: ["wishlist"],
         queryFn: async()=>{
            
            const res = await axios.get(`http://localhost:8080/v1/auth/wishlist/`, {
                withCredentials: true,
              });

            return res?.data?.message
         },
       
     })
}
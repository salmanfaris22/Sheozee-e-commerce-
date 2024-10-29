import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";




export const useAddRemoveWishList = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product_id) => {

       const userId= localStorage.getItem("userid")
      const response = await axios.post(`http://localhost:8080/user/${userId}/wishlist?proId=${product_id[0]}`,
        {}, { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["wishlist"]
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
        queryKey: ["wishlist"],
         queryFn: async()=>{
            const userId= localStorage.getItem("userid")
            const res = await axios.get(`http://localhost:8080/user/cartItems/${userId}`, {
                withCredentials: true,
              });
            return res.data
         },
       
     })
}
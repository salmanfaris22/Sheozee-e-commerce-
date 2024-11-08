import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";




export const useAdminOrderHook = ()=>{
    return useQuery({
        queryKey:["order"],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:8080/v1/auth/order/all`, {
                withCredentials: true,
              });      
            return res?.data?.message
        }
    })
}
export const useGetOrderById = (id)=>{
    return useQuery({
        queryKey:["order"],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:8080/v1/auth/order/byid?order_id=${id}`, {
                withCredentials: true,
              });      
            return res?.data?.message
        }
    })
}

export const useAdminOrderStatusChange = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (order) => {
        console.log('Order payload:', order);
        const response = await axios.put(
          `http://localhost:8080/v1/auth/order/controll`,
          order,
          { withCredentials: true }
        );
        return response.data;
      },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["order"]
        })
        toast.success(data?.message); 
    },
    onError: (error) => {
      toast.warning(error?.response?.data?.message);
    },
  });
};

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useOrderitems = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (order) => {
            const res = await axios.post("http://localhost:8080/v1/auth/order/checkout", order,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey:["cart"]
            })
            queryClient.invalidateQueries({
                queryKey:["order"]
            })
            navigate("/")
            toast.success(data?.message)
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.error)
        },
    });
};


export const useOrderSingleItem = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (order) => {
            const res = await axios.post("http://localhost:8080/v1/auth/order/", order,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey:["cart"]
            })
            queryClient.invalidateQueries({
                queryKey:["order"]
            })
            navigate("/")
            toast.success(data?.message)
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.error)
        },
    });
};




export const useGetAllOrders = ()=>{
    return useQuery({ 
        queryKey: ["order"],
         queryFn: async()=>{
            
            const res = await axios.get(`http://localhost:8080/v1/auth/order/`, {
                withCredentials: true,
              });
              
            return res.data?.message
         },
       
     })
}


export const useCancellOrder = () => {

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (order_id) => {
            const res = await axios.put(`http://localhost:8080/v1/auth/order/?orderId=${order_id}`, {},{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey:["order"]
            })
            toast.success(data?.message)
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.error)
        },
    });
};

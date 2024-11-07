import { useMutation, useQueryClient } from "@tanstack/react-query";
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
            navigate("/")
            toast.success(data?.message)
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.error)
        },
    });
};
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useUserRegisterAuth = () => {
    const queryClient = useQueryClient();
    const navigate =useNavigate()
    return useMutation({
        mutationFn: async (user) => {
            console.log("Registering user:", user);
            const res = await axios.post("http://localhost:8080/v1/user/register", user,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("user_id", data.user_id);
            queryClient.invalidateQueries({
                queryKey:["cart"]
            }) ,
             queryClient.invalidateQueries({
                queryKey:["wishlist"]
            })
            toast.success(data?.message)
            navigate("/")
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.message)
        },
    });
};
export const useUserLogineAuth = () => {
    const queryClient = useQueryClient();
    const navigate =useNavigate()
    return useMutation({
        mutationFn: async (user) => {
            const res = await axios.post("http://localhost:8080/v1/user/login", user,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("user_id", data.user_id);
            queryClient.invalidateQueries({
                queryKey:["cart"]
            }) ,
             queryClient.invalidateQueries({
                queryKey:["wishlist"]
            })
            toast.success(data?.message)
            navigate("/")

        },
        onError: (error) => {

            toast.warning(error?.response?.data?.message)
        },
    });
};


export const useLogoutUser = () => {
    const queryClient = useQueryClient();
    const navigate =useNavigate()
    return useMutation({
        mutationFn: async () => {
            const res = await axios.post("http://localhost:8080/v1/user/logout", {},{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey:["cart"]
            }) ,
             queryClient.invalidateQueries({
                queryKey:["wishlist"]
            })
          
            localStorage.clear("user_id")
            localStorage.clear
            toast.success(data?.message)
            navigate("/")
            window.location.reload()

        },
        onError: (error) => {

            toast.warning(error?.response?.data?.message)
        },
    });
};
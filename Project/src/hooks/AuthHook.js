import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useUserRegisterAuth = () => {
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
            localStorage.setItem("userid", data.userID);
            localStorage.setItem("token", data.accesToken);
            toast.success(data?.message)
            navigate("/")
        },
        onError: (error) => {
            toast.warning(error?.response?.data?.message)
        },
    });
};
export const useUserLogineAuth = () => {
    const navigate =useNavigate()
    return useMutation({
        mutationFn: async (user) => {
            const res = await axios.post("http://localhost:8080/v1/user/login", user,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("userid", data.userID);
            localStorage.setItem("token", data.accesToken);

            toast.success(data?.message)
            navigate("/")

        },
        onError: (error) => {

            toast.warning(error?.response?.data?.message)
        },
    });
};

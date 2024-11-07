import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";





export const useAdminUserget = ()=>{
    return useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:8080/v1/auth/user/all`, {
                withCredentials: true,
              });
              
            return res?.data?.message
        }
    })
}

export const useGetUserById = (userId)=>{
    return useQuery({
        queryKey:["users_by_id"],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:8080/v1/auth/user/?user_id=${userId}`, {
                withCredentials: true,
              });
              
            return res?.data?.message
        }
    })
}

export const useUserBlockOrUnblock = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({userId,status}) => {
 
      const response = await axios.put(`http://localhost:8080/v1/auth/user/block?user_id=${userId}&status=${status}`,
      {}, { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["users"]
        })
            toast.success(data?.message);
      
    },
    onError: (error) => {
      toast.warning(error?.response?.data?.message);
    },
  });
};
export const useUpdateUserInfo = (userId) => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user_info) => {
 
      const response = await axios.put(`http://localhost:8080/v1/auth/user/update?user_id=${userId}`,
        user_info, { withCredentials: true });
      return response.data;
    },
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey:["users"]
        })
            toast.success("user Updated");
      
    },
    onError: (error) => {
      toast.warning(error?.response?.data?.message);
    },
  });
};

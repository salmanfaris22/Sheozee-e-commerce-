import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";




export const useAddReview = (product_id) => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      
      const response = await axios.post(`http://localhost:8080/v1/auth/review/add?productId=${product_id}`,
        data, { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["product"]
        })
        toast.success(data.message)     
    },
    onError: (error) => {

      toast.warning(error?.response?.data?.error);
    },
  });
};

export const useReviewEdit = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({comment, rating,reviewID},) => {

      console.log(reviewID);
      const response = await axios.put(`http://localhost:8080/v1/auth/review/update?review_id=${reviewID}`,
        {comment,rating}, { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["product"]
        })
        toast.success(data.message)     
    },
    onError: (error) => {
      toast.warning(error?.response?.data?.error);
    },
  });
};
export const useDeeleteReview = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (review_id) => {
        console.log(review_id);
      const response = await axios.delete(`http://localhost:8080/v1/auth/review/delete?review_id=${review_id}`,
         { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
            queryKey:["product"]
        })
        toast.success(data.message)     
    },
    onError: (error) => {
        
      toast.warning(error?.response?.data?.error);
    },
  });
};

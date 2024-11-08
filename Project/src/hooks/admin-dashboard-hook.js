import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useAdmindashBoard = ()=>{
    return useQuery({
        queryKey:["dashboard"],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:8080/v1/auth/dashboar/`, {
                withCredentials: true,
              });      
            return res?.data?.message
        }
    })
}
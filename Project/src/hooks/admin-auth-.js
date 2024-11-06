import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const useAdminLogineAuth = () => {

    return useMutation({
        mutationFn: async (user) => {
            const res = await axios.post("http://localhost:8080/v1/admin/login", user,{
                withCredentials: true,
              });
            return res.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("userid", data.userID);
            localStorage.setItem("token", data.accesToken);

            toast.success(data?.message)


        },
        onError: (error) => {

            toast.warning(error?.response?.data?.message)
        },
    });
};

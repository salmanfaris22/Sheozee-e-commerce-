import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";




export const AdminProducrAdd = () => {

    return useMutation({
        mutationFn: async (product) => {
            const res = await axios.post("http://localhost:8080/v1/auth/product/add", product,{
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

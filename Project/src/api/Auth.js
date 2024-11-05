import axios from "axios"



export const AuthRegister = async(user)=>{


        console.log("Registering user:", user);
        const res = await axios.post("http://localhost:8080/v1/user/register", user,{
            withCredentials: true,
          });
        return res.data;

}
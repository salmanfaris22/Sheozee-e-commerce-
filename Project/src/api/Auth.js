import axios from "axios"



export const AuthRegister = async(user)=>{


        console.log("Registering user:", user);
        const res = await axios.post("http://localhost:8080/auth/register", user,{
            withCredentials: true,
          });
        return res.data;

}
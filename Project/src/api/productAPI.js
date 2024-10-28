import axios from "axios";






export const  fetchProducts =async()=>{
    const res = await axios.get("http://localhost:8080/products/");
    return res?.data?.message
}

export const fetchProduct =async(id)=>{
    const res =await axios.get(`http://localhost:8080/products/${id}`)
    return res.data
}




export const searchProducts = async (productName) => {
  const response = await axios.get(`http://localhost:8080/products/search`, {
    params: { product: productName },
  });
  return response.data.message; 
};

export const  filterProducts =async(filters)=>{
    const queryParams = new URLSearchParams();
    if (filters.brand)queryParams.append('brand', filters.brand);
    if (filters.min_price !== undefined) queryParams.append('min_price', filters.min_price.toString());
    if (filters.max_price !== undefined) queryParams.append('max_price', filters.max_price.toString());
    if (filters.is_available !== undefined) queryParams.append('is_available', filters.is_available.toString());
    if (filters.category) queryParams.append('category', filters.category);
    const response = await axios.get(`http://localhost:8080/products/filter?${queryParams.toString()}`);
    return response.data;
}
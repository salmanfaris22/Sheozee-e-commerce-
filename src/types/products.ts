// types.ts
export interface Product {
    id: number;
    user_id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    is_available: boolean;
    company_name: string;
    brand: string;
    size: string[];
    images: string[];
    category: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface ProductResponse {
    message: Product[];
}

export interface ApiError {
  message: string;
  status?: number; // Optional if your API provides status codes
}


export interface Filters{
  brand: string;
  min_price: number;
  max_price: number;
  is_available: boolean;
  category: string;
}



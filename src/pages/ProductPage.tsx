import { useParams } from "react-router-dom"
import { useGetProduct } from "../hooks/Product-Hoosk"


const ProductPage = () => {
    const {id}=useParams<{id :string}>()
    const productID = Number(id)
     const {data}=   useGetProduct(productID)
     console.log('====================================');
     console.log(data);
     console.log('====================================');
  return (
    <div>
      
    </div>
  )
}

export default ProductPage

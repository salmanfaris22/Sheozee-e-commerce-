import './App.css'
import UserRoute from './router/UserRoute'
import { useGetCartItem } from './hooks/Cart-hook'
import { useDispatch } from 'react-redux'
import { TotleCart } from './features/cart/cart-Slice'


function App() {
  const {data} = useGetCartItem()
  const dispatch =useDispatch()
  dispatch(TotleCart(data?.items?.length))
 
  
  return (
    <>
      <UserRoute/>
    </>
  )
}

export default App

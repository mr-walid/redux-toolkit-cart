import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/Cart";




function App() {


   const {cartItems} = useSelector((state)=> state.cart)

   const dispatch = useDispatch()

   useEffect(()=>{
         dispatch(calculateTotals())
   }, [cartItems])

  return (

<main>
  <Navbar/>
   <CartContainer />
</main>

);

}
export default App;

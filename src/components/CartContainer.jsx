
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { clearCart } from '../features/cart/Cart'
function CartContainer() {

   const {cartItems, total , amount} =  useSelector((store)=> store.cart)
   const dispatch = useDispatch()

    if (amount < 1){
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-card">is currently Empty</h4>
                </header>
            </section>
        )
    }


  return (
    <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {cartItems.map((item)=>{
            return (
                <CartItem key={item.id} {...item} />
                )
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
            <h4>
               Total <span>${total.toFixed(2)}</span>
            </h4>
            </div>
            <button 
            onClick={()=>dispatch(clearCart())}
            className="btn clear-btn"
            >
            Clear Cart </button>
            
        </footer>

    </section>
  )
}

export default CartContainer

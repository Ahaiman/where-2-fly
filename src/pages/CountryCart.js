import React, { useState, useContext } from "react"
import { Context } from "../components/Context"
import CartItem from "../components/CartItem"
import  '../App.css'

function Cart() {
    const [ buttonText, setButtonText ] = useState("Place Order")
    const [ firstPurchase, seFirstPurchase ] = useState(true)
    const { cartItems, emptyCart } = useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <CartItem key = {item.id} item = {item} price = {item.price}/>
    ))


    const totalPrice =  () => cartItems.map(item => item.price).reduce((a, b) => a + b, 0)
    const totalCostDisplay = totalPrice().toLocaleString("en-US", {style: "currency", currency: "USD"})
    const isCartEmpty =  cartItems.length === 0

    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout( () => {
            setButtonText("Place Order")
            emptyCart()
            seFirstPurchase(false)
        }    
        , 3000)
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            {!isCartEmpty &&  <p className="total-cost">
                Total Cost = {totalCostDisplay} </p> }
           
            {
                cartItems.length > 0 ?
                <div className="order-button">
                     <button onClick = {placeOrder}>{buttonText}</button>
                </div> : 
                firstPurchase ? <p> You Have No Items In Your Cart</p> : 
                                 <p>Have A Great Flight! </p>
            }


        </main>
    )
}

export default Cart
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "./Context"

function Header(){
    const { cartItems } = useContext(Context)
    const cartClassName = cartItems.length > 0 ? 
         "ri-shopping-cart-fill " : "ri-shopping-cart-line"
         
    return(
        <header>
            <Link className = 'text-link' to = "/">
                <h2> Where2Fly </h2>
            </Link>

            <Link className = 'text-link' to = "/cart">
                <i className = {`${cartClassName} cart`}></i>
            </Link>
          
           
        </header>
    )
}

export default Header


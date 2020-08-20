import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../components/Context"
import useHover from "../hooks/useHover"

function CartItem( { item }) {
    const { removeImageFromCart } = useContext(Context)
    const [ hovered, ref ] = useHover()

    const iconClassName = hovered ? "fill" : "line"

    return (
        <div className="cart-item">
            <i 
                className= {`ri-delete-bin-${iconClassName}`}
                onClick = { () => removeImageFromCart(item.id)}
                ref = {ref}
            >
            </i>

            <img src= {item.url} width="130px"  alt = "" />
            <h4> {`-${item.name}-`} </h4>

            <p>{`$${item.price}`}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape ({
        url: PropTypes.string.isRequired
    })
}
export default CartItem
import React , { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../../hooks/useHover"

import Popup from "reactjs-popup";
import Description from '../Description'
import "./Image.css";


function Image( { imgInfo }) {
   
    const [ hovered, ref ] = useHover()
    const { removeImageFromCart, addImageToCart, cartItems } = useContext(Context)
   
               
    const cartIcon = () => {
        const alreadyInCart = cartItems.some(item => item.id === imgInfo.id)
        if (alreadyInCart){
            return <i 
            className="ri-add-circle-fill choose"
            onClick = { () => removeImageFromCart(imgInfo.id) }>
            </i>}
        else if (hovered) {
            if(!imgInfo.canGo){
                return <i 
                className="ri-lock-fill choose">
                </i>}
            else{
                return <i 
                className = "ri-add-circle-line choose"
                onClick = { () => addImageToCart(imgInfo) }>
                </i>}  
            }
        }
        
    return(
        <div 
            className = "image-container"
             ref = {ref}
        >
            { cartIcon() }
            {hovered && <Popup trigger = {<i className ="ri-plane-line description"></i>}>
                             <Description imgInfo = {imgInfo}/>
                        </Popup>}
            <img 
                src = { imgInfo.url } 
                className = "image-grid"    
                alt =  { imgInfo.name } />

        </div>


    )
}

Image.propTypes = {
    className : PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite : PropTypes.bool,
        canGo : PropTypes.bool
    })
}

export default Image
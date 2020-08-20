import React, { useState, useEffect } from "react"
import countryData from "../assets/data/countryData"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [ allPhotos, setAllPhotos ] = useState([])
    const [ cartItems, setCartItems ] = useState([])
    
    const toggleFavorite = (id) => {
        const updatedArr =  allPhotos.map( img => {
            if(img.id === id){
                return {...img, isFavorite: !img.isFavorite}
                }
            return img;
        })
        setAllPhotos (updatedArr) 
    }
    
    const addImageToCart = (newItem) => 
        setCartItems(prevItems => [...prevItems, newItem])
     
    const removeImageFromCart = (id) => 
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    
    const emptyCart = () => setCartItems([])


    const shuffle = (array) => {
        let counter, index, temp;
        counter = array.length;
        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    useEffect( () => {
        shuffle(countryData)
        setAllPhotos(countryData)
    }, [])

    
    return(
        <div>
            <Context.Provider value = {{ 
                    allPhotos, 
                    toggleFavorite, 
                    cartItems, 
                    addImageToCart,
                    removeImageFromCart, 
                    emptyCart } }>
                { children }
            </Context.Provider>  
        </div>
        
    )
}

export {ContextProvider, Context}


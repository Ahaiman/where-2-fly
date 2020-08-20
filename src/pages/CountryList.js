import React, { useContext } from "react"

import { Context } from "../components/Context"
import Image from "../components/Image/Image"


function CountryList() {
    const { allPhotos } = useContext(Context)
    const imageElements = allPhotos.map( (imgInfo, i) => (
        <Image 
            key = { imgInfo.id } 
            imgInfo = { imgInfo }></Image>
        ))
                                       
    return (
        <main className = "photos">
            { imageElements }
        </main>
    )
}

export default CountryList
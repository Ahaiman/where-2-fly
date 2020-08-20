import React from 'react'
import { Link, useParams } from "react-router-dom"
import countryData from "../assets/data/countryData"



function CountryInfo () {
    const { imgId } = useParams()
    const thisCountry = countryData.find(country => country.id === imgId)
    
    return (
        <div className='modal'>
            { <h1>Welcome To { thisCountry.name } !</h1> }
            <p>{ thisCountry.description }</p>
            <h3>Expenses Cost: { thisCountry.price }$</h3>
            <Link to = "/">
                <button className = "back-button">Back</button>
            </Link>
        </div>
    )
}

export default CountryInfo 





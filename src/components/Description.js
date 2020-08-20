import React from 'react'
import { Link } from 'react-router-dom'



function Description ({ imgInfo }) {
    return (
        <div className='modal'>
            <h1>{imgInfo.name}</h1>
            {imgInfo.canGo  ?  <Link to = {`/${imgInfo.id}`}><h3>Click Here For Details </h3></Link> :  
                                <h3>{imgInfo.description}</h3> }
        </div>
    )
}

export default Description




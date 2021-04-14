import React, { useState } from 'react'

const Deathstar = (props) => {
    const { model, manufacturer, crew, starship_class } = props
    const [showDetails, setShowDetails] = useState(false)

    function handleClick () {
        console.log('click!')
        setShowDetails(!showDetails)
    }

    return (
        <div className="content">
            <p>Model: {model}</p>
            {showDetails && <>
                <p>Manufacturer: {manufacturer}</p>
                <p>Crew: {crew}</p>
                <p>Starship Class: {starship_class}</p>
             </> }
             <button onClick={handleClick}>{showDetails ? 'hide' : 'show'} details</button>
        </div>
    )
}

export default Deathstar
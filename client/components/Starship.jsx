import React, { useState, useEFfect } from 'react'
import { getStarshps } from '../apiClient'

const Starship = (props) => {
    const [showDetails, setShowDetails] = useState(false)
    const [starshipData, setStarship] = useState({
        name: '',
        model: '',
        crew: 0,
        starship_class: ''
    })

    useEffect(() => {
        getStarships()
    })

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
             <button type="button" class="btn btn-warning" onClick={handleClick}>{showDetails ? 'Hide' : 'Show'} details</button>
        </div>
    )
}

export default Starship
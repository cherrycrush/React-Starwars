import React from 'react'
import testData from '../../data/testdata.json'

const Deathstar = () => {
    return (
        <div className="content">
            <p>Model: {testData.model}</p>
            <p>Manufacterer: {testData.manufacturer}</p>
            <p>Crew: {testData.crew}</p>
            <p>Starship Class: {testData.starship_class}</p>
        </div>
    )
}

export default Deathstar
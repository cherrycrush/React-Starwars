import React from 'react'
import testData from '../../data/testdata.json'

const Deathstar = () => {
    return (
        <div>
            <p>{testData.name}</p>
            <p>{testData.model}</p>
            <p>{testData.manufacturer}</p>
        </div>
    )

}


export default Deathstar
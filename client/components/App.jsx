import React, { useState } from 'react'
import Starship from './Starship'
import Nav from './Nav'

const App = () => {
  const [starshipId, setStarshipId] = useState('9')

  return (
    <div>
      <Nav setStarshipId={setStarshipId} /> 
      <Starship starshipId={starshipId} />
    </div>
  )
}

export default App

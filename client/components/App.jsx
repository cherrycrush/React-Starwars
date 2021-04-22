import React, { useState } from 'react'
import Starship from './Starship'
import Nav from './Nav'

const App = () => {
  const [starshipId, setStarshipId] = useState('9')

  return (
    <div>
      <Nav setStarshipId={setStarshipId} /> 
      <Starship starshipId={starshipId} />
      <div className="author">Aaron Emerson <a href="http://github.com/cherrycrush">@cherrycrush</a></div>
    </div>
  )
}

export default App

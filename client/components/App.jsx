import React, {useState, useEffect} from 'react'
import Deathstar from './Deathstar'
import testData from '../../data/testdata.json'

const App = () => {
  return (
    <div>
      <h1>Hello React star wars</h1>
      <Deathstar />
    </div>
  )
}

export default App

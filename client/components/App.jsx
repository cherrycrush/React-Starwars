import React, {useState, useEffect} from 'react'
import testData from '../../data/testdata.json'
import Deathstar from './Deathstar'
import Card from './Card'

const App = () => {
  const {model, manufacturer, crew, starship_class} = testData
  const deathstarProps = {model, manufacturer, crew, starship_class}
  return (
    <div>
      <Card />
      <Deathstar {...deathstarProps} />
    </div>
  )
}

export default App

import React from 'react'
import testData from '../../data/testdata.json'
import Starship from './Starship'
import Card from './Card'

const App = () => {
  return (
    <div>
      <Card name={name}/>
      <Starship />
    </div>
  )
}

export default App



  // const {name, model, manufacturer, crew, starship_class} = testData
  // const deathstarProps = {model, manufacturer, crew, starship_class}
import React, {useState, useEffect} from 'react'
import testData from '../../data/testdata.json'
import Deathstar from './Deathstar'
import Card from './Card'

const App = () => {
  const {name, model, manufacturer, crew, starship_class} = testData
  const deathstarProps = {model, manufacturer, crew, starship_class}
  return (
    <div>
      <Card name={name}/>
      <Deathstar {...deathstarProps} />
    </div>
  )
}

export default App

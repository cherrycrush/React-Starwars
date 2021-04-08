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

// const [greeting, setGreeting] = useState('')
// const [count, setCount] = useState(0)

// useEffect(() => {
//   getGreeting()
//     .then((greeting) => {
//       console.log(greeting)
//       setGreeting(greeting)
//     })
// }, [count])

// return (
//   <>
//     {count}
//     <h1>{greeting}</h1>
//     <button onClick={() => setCount(count + 1)}>Click</button>
//   </>
// )
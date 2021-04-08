import React, {useState, useEffect} from 'react'
import testData from '../../data/testdata.json'

const App = () => {
  return (
    <div>
      <h1>Hello react star wars</h1>
      <h2>{testData.name}</h2>
      <p>{testData.model}</p>
      <p>{testData.manufacturer}</p>
      <h3>Films:</h3>
        <p>{testData.films}</p>
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
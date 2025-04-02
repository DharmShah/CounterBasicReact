import { useState } from 'react'
import './App.css'

function App() {
  // State for count
  const [count, setCount] = useState(0)

  // Increment counter
  const addValue = () => {
    if (count <20 ){
    setCount(count +1)
    }
  }

  // Decrement counter
  const removeValue = () => {
    if (count >0){
      setCount(count -1)
    }
  }

  return (
    <>
      <div>
        <h1>Hello Dharm</h1>
        {/* Display the state value */}
        <h2>Counter value: {count}</h2>
        {/* Buttons to increment and decrement the count */}
        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>
      </div>
    </>
  )
}

export default App

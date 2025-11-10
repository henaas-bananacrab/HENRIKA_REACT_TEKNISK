import Count from './Components/Count'
import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Count count={count} setCount={setCount}/>
    <Count count={count} setCount={setCount}/>
    <Count count={count} setCount={setCount}/>
    </>
  )
}

export default App

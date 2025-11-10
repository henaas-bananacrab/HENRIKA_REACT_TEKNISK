import { useState } from "react"

function Count() {
    const [count, setCount] = useState(0)

  return (
    <div className="Count-container">
        <p>Count:{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Count
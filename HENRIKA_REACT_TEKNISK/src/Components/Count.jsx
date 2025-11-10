

function Count({count, setCount}) {

  return (
    <div className="Count-container">
        <p>Count:{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Count
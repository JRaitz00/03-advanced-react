const ErrorExample = () => {
  let count = 0

  const handleIncrease = () => {
    count++
    console.log(count)
  }

  const handleReset = () => {
    count = 0
    console.log(count)
  }

  return (
    <div>
      <h2>useState error example</h2>
      <h3>Count: {count}</h3>
      <button type="button" onClick={handleIncrease} className="btn">
        Increase
      </button>
      <button type="button" onClick={handleReset} className="btn">
        Reset
      </button>
    </div>
  )
}

export default ErrorExample

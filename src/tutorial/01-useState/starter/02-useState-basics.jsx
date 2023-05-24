import { useState } from 'react'

const UseStateBasics = () => {
  //console.log(useState())

  // const value = useState('hello')[0]
  // const func = useState('hello')[1]
  // console.log(value)
  // console.log(func)

  const [count, setCount] = useState(0)
  const [name, setName] = useState('Justin')

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleClear = () => {
    setCount(0)
  }

  const handleName = () => {
    if (name === 'Justin') {
      setName('Maddy')
    } else {
      setName('Justin')
    }
  }

  return (
    <div>
      <h2>useState basics</h2>
      <h3>Count: {count}</h3>
      <button type="button" className="btn" onClick={handleIncrease}>
        Increase
      </button>
      <button type="button" className="btn" onClick={handleClear}>
        Clear
      </button>
      <h2>Hi, my name is {name}!</h2>
      <button type="button" className="btn" onClick={handleName}>
        Change Name
      </button>
    </div>
  )
}

export default UseStateBasics

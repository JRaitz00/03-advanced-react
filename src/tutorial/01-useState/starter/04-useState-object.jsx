import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Justin',
    age: 22,
    hobby: 'Working out at CrossFit',
  })

  const displayPerson = () => {
    setPerson({ name: 'Maddy', age: 23, hobby: 'Playing soccer' })
  }

  return (
    <div>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        Change Person
      </button>
    </div>
  )
}

export default UseStateObject

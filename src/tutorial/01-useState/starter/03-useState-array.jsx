import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeAll = () => {
    setPeople([])
  }

  const removeItem = (id) => {
    //const newPeople = people.filter((person) => person.id !== id)
    setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>
              Person {id}: {name}
            </h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={removeAll}
      >
        Clear All
      </button>
    </div>
  )
}

export default UseStateArray

import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 0 }
  ])
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    const userExists = persons.some(person => 
      person.name === newPerson.name
    )
    console.log("submitted exists?", userExists)
    // console.log("test:", newPerson.name)
    if (!userExists) {
      setPersons(persons.concat(newPerson))
      setNewName('')
    } else {
      let existsAlert = `${newPerson.name} is already added to phonebook`
      alert(existsAlert)
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}<br /></div>)}
    </div>
  )
}

export default App
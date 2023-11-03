import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: "040-1234567" }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const userExists = persons.some(person => 
      person.name === newPerson.name
    )

    var goFlag = true

    // Did the user enter a name?
    if (!newPerson.name) { 
      let alertNewName = `${newPerson.name} needs a name`
      alert(alertNewName)
      goFlag = false
    }

    // Did the user enter a number?
    if (!newPerson.number) { 
      let alertNewNumber = `${newPerson.name} needs a number`
      alert(alertNewNumber)
      goFlag = false
    }

    // Does the entry already exist?
    if (userExists) {
      let existsAlert = `${newPerson.name} is already added to phonebook`
      alert(existsAlert)
      goFlag = false
    }

    // If no errors then add the entry into the phonebook
    if (goFlag) {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      // Focus on the name field
      document.getElementById('name-field').focus()
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
        name: <input id="name-field" value={newName} onChange={handleNameChange} /><br />
        number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.number}<br /></div>)}
    </div>
  )
}

export default App
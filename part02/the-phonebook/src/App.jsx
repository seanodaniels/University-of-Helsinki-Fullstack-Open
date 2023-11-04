import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  // const [ persons, setPersons ] = useState([
  //   { name: 'Arto Hellas', number: "040-1234567" }
  // ])
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length+1
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

  const handleNameFilter = (event) => {
    setFilterName(event.target.value)
  }
  
  const peopleToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={filterName} changeThing={handleNameFilter} />
      <h2>add a new</h2>
      <PersonForm 
        submitHandler={addPerson} 
        changeName={handleNameChange} 
        changeNumber={handleNumberChange} 
        newNumber={newNumber}
        newName={newName}
      />
      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow} />
    </div>
  )
}

export default App
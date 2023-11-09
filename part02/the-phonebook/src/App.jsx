import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons.js'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const hook = () => {
    personsService
      .retrieve()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  const removePerson = (changedId) => {
    personsService
      .remove(changedId)
      .then(() => { 
        setPersons(persons.filter(person => person.id !== changedId))
        setNewName('')
        setNewNumber('')
      })
  }

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

      personsService
        .create(newPerson)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
          setNewName('')
          setNewNumber('')
        })

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
      <Persons peopleToShow={peopleToShow} deleteHandler={removePerson} />
    </div>
  )
}

export default App
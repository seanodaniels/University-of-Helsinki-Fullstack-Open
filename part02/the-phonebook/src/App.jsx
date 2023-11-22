import { useState, useEffect } from 'react'
import './index.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons.js'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const notificationOff = {
    type: 'notification-off',
    message: ''
  }
  const [ notification, setNotification ] = useState(notificationOff)

  const hook = () => {
    personsService
      .retrieve()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  const removePerson = (changedId) => {
    const removePersonName = persons.filter(person => person.id === changedId)[0].name
    let removePersonAlert = `Delete ${removePersonName}?`
    if (window.confirm(removePersonAlert)) {

      const personsWithout = [
        ...persons
      ]

    personsService
      .remove(changedId)
      .then(() => { 
        setPersons(personsWithout.filter(person => person.id !== changedId))
        setNewName('')
        setNewNumber('')
      })

    }
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

    // Does the entry already exist?
    if (userExists && newPerson.number) {
      let existsAlert = `${newPerson.name} is already added to phonebook. Replace the old number?`
      if (window.confirm(existsAlert)) {
        // Replace the entry
        const replaceId = persons.filter(person => person.name === newPerson.name)[0].id

        // Give this new person the same ID as the old entry
        newPerson.id = replaceId

        const replacePersons = persons.map(person => person.id !== replaceId ? person : newPerson)
        const notificationMessage = `Updated ${newPerson.name}`

        personsService
          .update(replaceId, newPerson)
          .then(() => {
            setPersons(replacePersons)
            setNewName('')
            setNewNumber('')
            setNotification({
              type: 'notification-good',
              message: notificationMessage
            })
            setTimeout(() => {
              setNotification(notificationOff)
            }, 5000)   
          })
          .catch(error => {
          const errorMessage = `Information of ${newPerson.name} has already been removed from the server.`
          setNotification({
            type: 'notification-error',
            message: errorMessage
          })
          setTimeout(() => {
            setNotification(notificationOff)
          }, 5000)   
          })
      }
      goFlag = false      
    }

    // If we have no errors and we are not updating, 
    // add the entry into the phonebook
    if (goFlag) {

      const notificationMessage = `Added ${newPerson.name}`

      personsService
        .create(newPerson)
        .then(createdPersons => {
          setPersons(persons.concat(createdPersons))
          setNewName('')
          setNewNumber('')
          setNotification({
            type: 'notification-good',
            message: notificationMessage
          })
          setTimeout(() => {
            setNotification(notificationOff)
          }, 5000)   
        })
        .catch(error => {
          console.log(error.response.data.error)
          setNotification({
            type: 'notification-error',
            message: error.response.data.error
          })
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
      <Notification changeNotification={notification} />
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
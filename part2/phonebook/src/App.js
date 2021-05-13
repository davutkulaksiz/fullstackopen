import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => 
  {
    console.log('effect')

    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })


  }, [])

  const addPerson = (event) => {
    
    event.preventDefault()
    const personObject =
    {
      name: newName,
      number: newNumber
    }

    const found = persons.find( ({name}) => name === newName);

    if(found === undefined)
    {

      personService
        .create(personObject)
        .then(returnedPerson => 
          {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')

            setMessage(`Added ${newName}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })

    }
    else
    {
      // window.alert(`${newName} is already added to phonebook`)
      // setNewName('')
      // setNewNumber('')
      if(window.confirm(`${newName} is already added to phonebook,
      replace the old number with a new one?`))
      {
        personService
          .update(found.id, { ...found, number: newNumber})
          .then(returnedPerson =>
            {
              setPersons(persons.map(person =>
                (person.id !== found.id ? person: returnedPerson)
                ));
              setNewName('');
              setNewNumber('');

              setMessage(`${newName}'s number is changed`)
              setTimeout(() => {
                setMessage(null)
              }, 5000)
              
            })
          .catch(error => {
            setErrorMessage(`Information of '${newName}' has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          });
      }
      setNewName('');
      setNewNumber('');
    }

  }

  const handleNameChange = (event) =>
  {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>
  {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) =>
  {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const handleDeleteUser = (person) =>
  {
    console.log(person.name, person.id);
    if (window.confirm("Delete " + person.name + "?"))
    {
      personService
        .deleteUser(person.id)
        .then(deletedPerson =>
          {
            setPersons(persons.filter(p => p.id !== deletedPerson.id));
          })
        .catch(error =>
          {
            console.log(error);
            setPersons(persons.filter(p => p.id !== person.id));
            setErrorMessage(`Information of '${person.name}' has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
    }
  }

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {message} />
      <ErrorNotification message = {errorMessage} />

      <Filter newSearch = {newSearch} handleSearchChange = {handleSearchChange}/>

      <h3>add a new</h3>

      <PersonForm
        newName = {newName}
        handleNameChange = {handleNameChange}
        newNumber = {newNumber}
        handleNumberChange = {handleNumberChange}
        addPerson = {addPerson}
      />

      <h3>Numbers</h3>

      <Persons filteredPersons = {filteredPersons} handleDeleteUser = {handleDeleteUser}/>

    </div>
  )
}

export default App
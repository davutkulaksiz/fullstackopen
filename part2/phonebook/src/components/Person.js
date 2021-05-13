import React from 'react'

const Person = ({ person, handleDeleteUser }) => {
  return (
    <tr>
        <td key={person.name}>{person.name} {person.number}
        <button type="button" onClick={ () => handleDeleteUser(person)}>delete</button>
        </td>
    </tr>
  )
}

export default Person
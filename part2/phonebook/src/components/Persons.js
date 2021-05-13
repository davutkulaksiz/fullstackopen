import React from 'react'
import Person from './Person'

const Persons = ({ filteredPersons, handleDeleteUser }) =>
{
    return(
        <div>
            <table>
                <tbody>
                    {filteredPersons.map(person => 
                    <Person key = {person.name} person={person} handleDeleteUser = {handleDeleteUser}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Persons
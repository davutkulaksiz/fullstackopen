import React from 'react';

const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, addPerson}) =>
{
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    <div>name: <input value = {newName}
                    onChange = {handleNameChange}/>
                    </div>
                    <div>number: <input value = {newNumber}
                    onChange = {handleNumberChange}/>
                    </div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
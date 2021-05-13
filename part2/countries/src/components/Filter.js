import React from 'react';

const Filter = ({newSearch, handleSearchChange}) =>
{
    return (
        <div>
            find countries<input value = {newSearch} onChange = {handleSearchChange}/>
        </div>
    );
};

export default Filter
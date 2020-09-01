import React from 'react'

function Person(props) {
   const {person, index} = props;
    return (
        <div>
            <h3>{index} Person Name is {person.name}</h3>
        </div>
    )
}

export default Person

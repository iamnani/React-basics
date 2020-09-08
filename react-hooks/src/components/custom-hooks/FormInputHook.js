import React from 'react'
import useInputHook from './useInputHook'

function FormInputHook() {

    const [firstName, bindFirstName, resetFirstName] = useInputHook();
    const [lastName, bindLastName, resetLastName] = useInputHook();


    const submitHandler = (e) =>{
        e.preventDefault();
        alert(`Name  ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit= {submitHandler}>
                <div>
                    <label> first name</label>
                    <input type="text" {...bindFirstName}  />
                </div>

                <div>
                    <label> Last name</label>
                    <input type="text" {...bindLastName} />
                </div>
                <button type="submit"> submit</button>
            </form>


        </div>
    )
}

export default FormInputHook
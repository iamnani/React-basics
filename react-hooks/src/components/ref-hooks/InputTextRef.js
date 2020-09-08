import React, { useRef, useEffect } from 'react'

function InputTextRef() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default InputTextRef

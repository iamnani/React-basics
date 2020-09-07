import React from 'react'
import {useState} from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            {count} <br/>
            <button onClick={()=>{setCount(prev => prev + 1)}}>Increment</button>
            <button onClick={() =>{ setCount(prev => prev - 1)}}>Decrement</button>
        </div>
    )
}

export default HookCounter2

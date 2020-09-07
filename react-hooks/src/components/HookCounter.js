import React, {useState} from 'react'


function HookCounter() {
    const initialState = 0;
    const [count, setCount] = useState(initialState)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook :: Click {count}</button>
        </div>
    )
}

export default HookCounter

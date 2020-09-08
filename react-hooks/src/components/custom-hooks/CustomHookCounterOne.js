import React from 'react'
import useCustomCouner from './useCustomCouner'

function CustomHookCounterOne() {
    const [count, increment, decrement, reset] = useCustomCouner(0)
    return (
        <div>
            Custom Hook Counter {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}> Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHookCounterOne;

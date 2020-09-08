import {useState} from 'react'

function useCustomCouner(initialValue = 0) {
    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        setCount(pc => pc + 1);
    }

    const decrement = () =>{
        setCount(pc => pc - 1)
    }

    const reset = () =>{
        setCount(initialValue)
    }

    return [count, increment, decrement, reset]
}

export default useCustomCouner

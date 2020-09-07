import React,{useContext} from 'react'
import { CounterContext } from '../../App'

function ComponentA() {
    const reducerA  = useContext(CounterContext)
    return (
        <div>
            Component A  {reducerA.reducerCounter.count}
            <button onClick={() =>reducerA.countDispatch('inc')}>Increment</button>
        </div>
    )
}

export default ComponentA

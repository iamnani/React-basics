import React,{useContext, useReducer} from 'react'
import { CounterContext } from '../../App'

function CompF() {
    const reducerF = useContext(CounterContext)
    return (
        <div>
        Counter in F {reducerF.reducerCounter.count}
            <button onClick={() => reducerF.countDispatch('dec')}>Decrement</button>
        </div>
    )
}

export default CompF

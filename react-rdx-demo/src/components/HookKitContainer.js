import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import buyKit from '../redux/kit/kitAction'

function HookKitContainer() {
    const numOfKits = useSelector(state => state.kit.numOfKits)
    const dispatch = useDispatch()
    return (
        <div>
            <h1> Hooks : Num of cakes {numOfKits} </h1>
            <button onClick={() => dispatch(buyKit())}>Hook-Buy-Kit</button>
        </div>
    )
}

export default HookKitContainer
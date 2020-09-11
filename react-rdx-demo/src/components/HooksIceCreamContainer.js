import {useDispatch, useSelector} from 'react-redux'

import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of Icecreams from Hooks container {numOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Hook-buy-icecream</button>
        </div>
    )
}

export default HooksIceCreamContainer

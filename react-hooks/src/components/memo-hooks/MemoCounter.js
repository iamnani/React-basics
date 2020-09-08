import React, {useState, useMemo} from 'react'

function MemoCounter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0)


    const incrementCounterOne = () =>{
        setCounterOne(counterOne + 1);
    }

    const incrementCounterTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven=useMemo(() => {
        return counterOne % 2 == 0
    }, [counterOne])


    return (
        <div>
            <button onClick={incrementCounterOne}>Counter One {counterOne}</button>
            {isEven ?'Even' : 'Odd'}
            <button onClick={incrementCounterTwo}>Counter two {counterTwo}</button>
        </div>
    )
}

export default MemoCounter

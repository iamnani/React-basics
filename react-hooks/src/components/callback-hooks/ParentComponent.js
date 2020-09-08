import React,{useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    console.log("Rendering Parent Component")

    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(50000)
    
    const incrementAge = useCallback(
        () => {
            setAge(age + 2)
        },
        [age],
    )

    const incrementSalary = useCallback(
        () => {
            setSalary(salary + 10000)
        },
        [salary],
    )

    return (
        <div>
            <Title titleName='Use Call back Demo' />
            <Count text={age}/>
            <Button clickHandler={incrementAge} > Increment Age </Button>
            <Count text={salary}/>
            <Button clickHandler={incrementSalary}> Increment Salary </Button>

        </div>
    )
}

export default React.memo(ParentComponent)

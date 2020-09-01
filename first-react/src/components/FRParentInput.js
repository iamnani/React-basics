import React, { Component } from 'react'
import FRInput from './FRInput';

export class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.frRef = React.createRef();
    }


    clickHandler = () =>{
        this.frRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.frRef}></FRInput>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
 


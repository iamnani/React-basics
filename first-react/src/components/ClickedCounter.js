
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickedCounter extends Component {

    render() {
        const {counter, clickCounter, name} = this.props;
        return (
            <div>
                <button onClick={clickCounter} >  {name} Clicked {counter} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickedCounter)

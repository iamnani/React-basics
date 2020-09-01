import React, { Component } from 'react'

export class ClassClick extends Component {
    
    clilckHandler(){
        console.log("class click handler");
    }
    render() {
        return (
            <div>
                <button onClick={this.clilckHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick

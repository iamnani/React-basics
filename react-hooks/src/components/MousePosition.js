import React, { Component } from 'react'

export class MousePosition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
            y :0
        }
    }

    logMouseOver = (e) =>{
        this.setState({
            x : e.clientX,
            y: e.clientY
        })

       /*  this.setState(prevState => {
            return {
                ...this.state,
                x: e.clientX,
                y: e.clientY
                
            }
        }) */
    }

    componentDidMount(){
        window.addEventListener("mouseover", this.logMouseOver)
    }
    
componentWillUnmount (){
    window.removeEventListener("mouseover", this.logMouseOver);
}

    render() {
        return (
            <div>
                {this.state.x} - {this.state.y}
            </div>
        )
    }
}

export default MousePosition

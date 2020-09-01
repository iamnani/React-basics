import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCBRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        // console.log( this.inputRef);
        // this.inputRef.current.focus();
        if(this.cbRef){
            this.cbRef.focus();
        }
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
          <div>
          
            <input type="text" ref={this.inputRef} />
            <input type="text" ref={this.cbRef} />
            <button onClick={this.clickHandler}>Click</button>
          </div>
        );
    }
}

export default RefsDemo

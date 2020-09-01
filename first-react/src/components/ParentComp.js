import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComponent';
import MemoComp from './MemoComp';

 class ParentComp extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              name: "Jakkani"
         }
     }

     componentDidMount(){
         setInterval(() =>{
            this.setState({name: "Jakkani"})
         }, 2000);
     }
     
    render() {
        console.log("Parent comp render")
        return (
            <div>
                Parent Component {this.state.name}
                {/* <RegularComp name={this.state.name} ></RegularComp>
                <PureComp name={this.state.name} /> */}
                <MemoComp name='Jakkani' />
            </div>
        )
    }
}

export default ParentComp

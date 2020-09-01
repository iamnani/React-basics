import React, { Component } from 'react'
import LifeCycleB from './LifeCycleb';

export class LifeCycleA extends Component {
constructor(props) {
    super(props)

    this.state = {
         name: 'Jakkani'
    }
    console.log("Life cycle A constructor");

    this.changeSate = this.changeSate.bind(this);
}

changeSate = () => {
    this.setState({name : "Naveen Jakkani"});
}

static getDerivedStateFromProps(props, state){
    console.log(" Life cycle A : get drived state from props");
    return null;
}

componentDidMount(){
    console.log("componen did mount - A");
}


shouldComponentUpdate(){
    console.log("La : should component update");
    return true;
}

getSnapshotBeforeUpdate(prevP, prevS){
    console.log("La : snapshot before update");
    return null;
}

componentDidUpdate(){
    console.log("La : Component Did update : La");
}


    render() {
        return (
            <div>
                <h1>Life cycle A</h1>
                <button onClick={this.changeSate}>changeState</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA

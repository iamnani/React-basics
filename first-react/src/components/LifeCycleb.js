import React, { Component } from "react";

export class LifeCycleB extends Component {
         constructor(props) {
           super(props);

           this.state = {
             name: "Jakkani - B",
           };
           console.log("Life cycle b constructor");
         }

         static getDerivedStateFromProps(props, state) {
           console.log(" Life cycle b : get drived state from props");
           return null;
         }

         componentDidMount() {
           console.log("componen did mount B");
         }

         shouldComponentUpdate() {
           console.log("LifeCycle B : should component update");
           return true;
         }

         getSnapshotBeforeUpdate(prevP, prevS) {
           console.log("LifeCycle B : snapshot before update");
           return null;
         }

         componentDidUpdate() {
           console.log("LifeCycle B : Component Did update : LifeCycle B");
         }

         render() {
           return (
             <div>
               <h1>ife cycle B</h1>
             </div>
           );
         }
       }

export default LifeCycleB;

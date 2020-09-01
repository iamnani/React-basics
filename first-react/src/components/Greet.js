import React from "react";

//function Greet() {
//    return <h1 > Hello Jakkani < /h1>
//}

// const Greet = ({name}) =>{
//  return (<h1> Hello Jakkani {name} !</h1>)
// }

const Greet = (props) => {
  const { name } = props;
  return <h1> Hello Jakkani {name} !</h1>;
};

export default Greet;

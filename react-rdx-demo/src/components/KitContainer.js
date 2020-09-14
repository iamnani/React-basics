import React from "react";
import buyKit from "../redux/kit/kitAction";

import { connect } from "react-redux";

function KitContainer(props) {
  return (
    <div>
      <h1>Total Kits {props.numOfKits} </h1>
      <button onClick={() => props.buyKit()}>Buy Kit -1</button>
      <button onClick={() => props.bk()}>Buy Kit 2</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
    return {
      numOfKits : state.kit.numOfKits
    }
}

const mapDispatchToProps = (dispatch) => {

  const bk = () => dispatch(buyKit())
    return {
       buyKit : () => dispatch(buyKit()),
       bk : bk
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(KitContainer);

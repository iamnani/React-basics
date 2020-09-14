import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Ice Creams container</h2>
      <h1> Total Ice Creams - {props.numOfIceCreams}</h1>
      <button onClick={() => props.buyIceCream()}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

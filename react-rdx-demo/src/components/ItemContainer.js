import React from "react";

import { connect } from "react-redux";
import { buyCake } from "../redux";
import buyKit from "../redux/kit/kitAction";

function ItemContainer(props) {
  return (
    <div>
      <h1> Item - type - with count {props.item}</h1>
      <button onClick={props.buyItem}>Buy Item 1 </button>
      <button onClick={() => props.dcka()}>Buy Item 2</button>
      <button onClick={() => props.da()}>Buy Item 3</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.kit.numOfKits;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const bc = () => {
    dispatch(buyCake());
  };
  const kc = () => dispatch(buyKit());

  const dispatchFn = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyKit());

  const da = ownProps.cake ? buyCake() : buyKit();

  const dcka = ownProps.cake ? bc : kc;

  return {
    buyItem: dispatchFn,
    da: () => dispatch(da),
    dcka: dcka,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

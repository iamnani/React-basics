import React, { useState, useRef, useEffect } from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function HookCustomCakeContainer() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Number of cakes - {numOfCakes}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        ref={inputRef}
      ></input>
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} cakes from Hook{" "}
      </button>
    </div>
  );
}

export default HookCustomCakeContainer;

import React, { useReducer, useContext } from "react";
import "./App.css";
import ComponentC from "./components/hook-context/ComponentC";
import ReducerCounter from "./components/ReducerCounter";

import CompA from "./components/reducer-context/CompA";
import CompB from "./components/reducer-context/CompB";
import CompC from "./components/reducer-context/CompC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CounterContext = React.createContext();

const initialState = { count : 0, name:'Jakkani'};

export const counterReducer = (state, action) => {
  // console.log('Reducer--- ', action)
  switch (action) {
    case "inc":
      console.log(state.count)
      return {...state,  count : state.count + 1};
    case "dec":
      return {...state,  count : state.count - 1};
    case "reset":
      return initialState;
    default:
      break;
  }
};

const name = { fname: "Naveen Kumar", lname: "Jakkani" };
function App() {
  const [countObject, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="App">
      {/*  <UserContext.Provider value={name} >
        <ChannelContext.Provider value={'React Learning Channel'}>
        <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <ReducerCounter />
       */}
      <CounterContext.Provider
        value={{ countDispatch: dispatch, reducerCounter: countObject}}>
        <CompA />
        <CompB />
        <CompC />
      </CounterContext.Provider>
    </div>
  );
}

export default App;

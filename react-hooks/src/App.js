import React, { useReducer } from "react";
import "./App.css";
import DocumentTitleOne from "./components/custom-hooks/DocumentTitleOne";
import RefClassTimer from "./components/ref-hooks/RefClassTimer";
import RefHookTimer from "./components/ref-hooks/RefHookTimer";
import CustomHookCounterOne from "./components/custom-hooks/CustomHookCounterOne";
import FormInputHook from "./components/custom-hooks/FormInputHook";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CounterContext = React.createContext();

const initialState = { count: 0, name: "Jakkani" };

export const counterReducer = (state, action) => {
  // console.log('Reducer--- ', action)
  switch (action) {
    case "inc":
      console.log(state.count);
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
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
      {/* <CounterContext.Provider
        value={{ countDispatch: dispatch, reducerCounter: countObject }}
      >
        <CompA />
        <CompB />
        <CompC />
      </CounterContext.Provider> */}

      {/*       <DataFetchingWithReducer />
       */}

      {/* <ParentComponent /> */}

      {/* <MemoCounter /> */}

      {/* <InputTextRef/> */}

      {/* <RefClassTimer /> */}
      {/* <RefHookTimer /> */}
      {/* <DocumentTitleOne /> */}
      {/* <CustomHookCounterOne /> */}
      <FormInputHook />
    </div>
  );
}

export default App;

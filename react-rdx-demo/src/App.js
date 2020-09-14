import React from "react";
import {  Provider } from "react-redux";
import  store  from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import KitContainer from "./components/KitContainer";
import HookKitContainer from "./components/HookKitContainer";
import CustomCakeContainer from "./components/CustomCakeContainer";
import HookCustomCakeContainer from "./components/HookCustomCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
       {/*  <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer /> */}
        {/*  <CakeContainer />
         <CustomCakeContainer />
        <KitContainer />
        <HookKitContainer />
        <HookCustomCakeContainer /> */}
       {/*  <ItemContainer cake/>
        <KitContainer /> */}

      <UserContainer />


      </div>
    </Provider>
  );
}

export default App;

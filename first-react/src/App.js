import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

 
// import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import Functionclick from './components/FunctionClick'
import ClassCllick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';

import './appStyles.css';
import styles from './appStyles.modules.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCyclea';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComponent';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickedCounter from './components/ClickedCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component{
    render(){
        return (
          <div className="App">
            {/* <FRParentInput /> */}
            {/* <PortalDemo /> */}
            {/*  <ErrorBoundary>
              <Hero name="Jakkani" />
              <Hero name="Adharv" />
              <Hero name="Villian" />
            </ErrorBoundary> */}
            <ClickedCounter name="jakkani"/>
            <HoverCounter />
          </div>
        );
    }
}


export default App;
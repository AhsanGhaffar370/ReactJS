import React from "react";
// import logo from './logo.svg';
import "./myStyle.css";
import './App.css';
import AppStyle from './App.module.css'; // .module.css use to use style in local component

import PropsFunctional from "./components/PropsFunctional";
import PropsClass from "./components/PropsClass";
import ClassEvent from "./components/EventHandlingClass";
import FunctionalEvent from "./components/EventHandlingFunctional";

import {FirstComp} from "./components/FirstFunctionalComp";
import FirstClassComp from "./components/FirstClassComp";

import MapFunc_InlineStyling from "./components/MapFunc_InlineStyling"

import Header from "./components/Header";
// import {Header} from "./components/Header"; 
import {Footer2} from "./components/Footer";// if we want to get a particular component from a Header file
// import Footer from "./components/Footer"; 

import ErrorBoundary from "./components/ErrorBoundary";

import States from "./components/States";

import Product from './components/Product'

import Routing from "./components/Routing"

import LoginControl from "./components/LoginControl"

import Form from "./components/Forms"

import GetRequest from './components/GetRequest'
import PostRequest from './components/PostRequest'

import LifeCycleA from './components/LifeCycleA'
import HooksUseState from "./components/HooksUseState"
import HooksUseEffect from "./components/HooksUseEffect"

import MousePos from "./components/MousePos"

import A from "./components/A"

// function App() {
//   return (
//     <div className="App">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <h1>
//           Hello Ahsan1
//         </h1>
        
//     </div>
//   );
// }

class App extends React.Component
{
  render(){

    return (

      <div className="App">
      <Header/>


      {/* <FirstComp 
        firstName="Ahsan"
      >
        <h3>I am child prop</h3>
      </FirstComp>

      <FirstClassComp 
        firstName="Ahsan"
      /> */}
      
      <A isRed={false}></A>
      <MousePos></MousePos>

      <span className="AppyGlobal">child1</span>
        <span className={AppStyle.AppyLocal}>child2</span> {/* .module.css use to use style in local component */}
        
      <PropsFunctional  name="Ahsan" last="Ghaffar" abc="Rao">
        <span className="AppyGlobal">child1</span>
        <span className={AppStyle.AppyLocal}>child2</span>
      </PropsFunctional>
      <PropsClass ah="Ahsan Bhai"/>

      <ClassEvent ah="Ahsan Bhai"/>
      <FunctionalEvent status="true"/>

      <MapFunc_InlineStyling></MapFunc_InlineStyling>

      <States name="AhsanRao"/>

      <Product></Product>

      <Routing></Routing>

      <LoginControl />

      <Form></Form>

      <LifeCycleA></LifeCycleA>

      <GetRequest></GetRequest>
      <PostRequest></PostRequest>

      <HooksUseState></HooksUseState>

      <HooksUseEffect></HooksUseEffect>

      <br/><br/><br/><br/><br/>
      <ErrorBoundary><Footer2/></ErrorBoundary>
      </div>
    );
  }
}

export default App;

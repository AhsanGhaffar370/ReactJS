import React from "react";
// import logo from './logo.svg';
import "./myStyle.css";
import './App.css';
import ClassHeader from "./components/ClassHeader";
import Header from "./components/Header";
// import {Header} from "./components/Header"; 
import {Footer2} from "./components/Footer";// if we want to get a particular component from a Header file
// import Footer from "./components/Footer"; 
import ErrorBoundary from "./components/ErrorBoundary";

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
      <Header name="Ahsan" last="Ghaffar" abc="Rao">
      <span>child1</span>
      <span>child2</span>
      </Header>
      <br/><br/><br/><br/><br/><br/>
      <ClassHeader ah="Ahsan Bhai"/>
        {/* <h1>Hello Ahsan,</h1> */}
        
        {/* {Header} */}
        <ErrorBoundary><Footer2/></ErrorBoundary>
      </div>
    );
  }
}


export default App;

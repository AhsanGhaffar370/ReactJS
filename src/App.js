import React from "react";
// import logo from './logo.svg';
import './App.css';
// import Header from "./components/Header";
import {Header} from "./components/Header"; // if we want to get a particular component from a Header file
import Footer from "./components/Footer";
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
      <Header/>
      <br/><br/><br/><br/><br/><br/>
        <h1>Hello Ahsan,</h1>
        
        {/* {Header} */}
        <ErrorBoundary><Footer/></ErrorBoundary>
      </div>
    );
  }
}


export default App;

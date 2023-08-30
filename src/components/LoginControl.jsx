import React, { Component } from 'react'


export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        // this.handleLoginClick = this.handleLoginClick.bind(this);
        // this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick=() =>{
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick=()=> {
        this.setState({isLoggedIn: false});
      }

      render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let bg;
        let greeting;

        //simple if else
        if (isLoggedIn) {
            button = <input type="button" className="btn btn-danger font-weight-bold" value="Logout" onClick={this.handleLogoutClick} />;
          //   greeting= "Welcome Back!";
          } else {
            button = <input type="button" className="btn btn-success" value="Login" onClick={this.handleLoginClick} />;
          //   greeting="Please SignIn.";
          }

        // advance if else
        // isLoggedIn
        //     ? button = <input type="button" className="btn btn-outline-primary font-weight-bold" value="Logout" onClick={this.handleLogoutClick} />
        //     : button = <input type="button" className="btn btn-outline-primary font-weight-bold" value="Login" onClick={this.handleLoginClick} />
        
        isLoggedIn ? bg="bg-success" : bg="bg-secondary"

        
        return (
          <div className={`${bg} p-3`}>
          <p className="bg-warning font-weight-bold">LoginControl (states, advance Conditional statements)</p>
                
            {/* <h2>{greeting}</h2> */}
            <h2>The user is <b>{isLoggedIn ? 'logged-In' : 'logged-Out'}</b></h2>
            {button}
          </div>
        );
      }
}

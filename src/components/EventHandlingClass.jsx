import React from 'react';

class EventHandlingClass extends React.Component{
    console_msg=()=>{
        console.log("hello ahsan",this);
        document.getElementById("sp").innerHTML=" (Event Occured)";
    }
    render(){
        return(
            <React.Fragment>
            
                <p className="bg-warning font-weight-bold">EventHandlingClass</p>
                <input type="button" className="btn btn-outline-primary" value="EventHandling in Class Component" onClick={this.console_msg}/>
                <span id="sp" className="font-weight-bold"></span> <br />
            </React.Fragment>
        );
    }
}

export default EventHandlingClass;
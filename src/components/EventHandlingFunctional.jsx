import React from 'react'

function EventHandlingFunctional(props) {
    let className="";

    

    if(props.status==="true"){
        className="btn-outline-info";
    }
    else{
        className="btn-outline-danger";
    }

    
    function console_msg(){
        console.log("hello ahsan");
        document.getElementById("sp1").innerHTML=" (Event Occured)";
    }
    return (
        <React.Fragment>
        
            <p className="bg-warning font-weight-bold">EventHandlingFunctional</p>
            <input type="button" className={`btn btn-outline-primary mt-2 mb-4 ${className}`} value="EventHandling in Functional Component" onClick={console_msg}/>
            <span id="sp1" className="font-weight-bold"></span>
            
        </React.Fragment>
    )
}

export default EventHandlingFunctional

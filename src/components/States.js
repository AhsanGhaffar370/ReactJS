import React from 'react';

class States extends React.Component{
    constructor(){
        super();
        this.state={
            msg:'CodeTrunk Youtube Channel'
        }
    }

    subscribe() {
        this.setState({
            msg:'Thanks for Subscribing our Channel'
        })
    }

    render(){
        return(
            <div>
                <h2 className="font-weight-bold text-primary">{this.state.msg}</h2>
                <button onClick={()=>{this.subscribe()}}>Subscribe</button>
            </div>
    
        )
    }
    
}

export default States;
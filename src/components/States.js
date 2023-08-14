import React,{Fragment} from 'react';

class States extends React.Component{
    constructor(props){
        super(props); // to access component of parent class
        this.state={
            msg:'CodeTrunk Youtube Channel',
            person: this.props.name
        }
    }
    
    subscribe = () =>{
        // wrong
        // this.setState({
            //     msg:'Thanks for Subscribing our Channel',
        //     person: this.props.name
        // });
        // correct
        this.setState((props)=>({
            msg:'Thanks for Subscribing our Channel',
            person: props.name
        }));
    }
    
    render(){
        console.log("my prop",this.props);
        return(
            // <>
            <React.Fragment>
                
                <p className="bg-warning font-weight-bold">States</p>
                <h2 className="font-weight-bold text-danger d-inline m-0 p-0">{this.state.msg} {this.state.person} </h2>
                <button className="btn btn-outline-danger btn-inline d-inline mb-3" onClick={this.subscribe}>Subscribe</button>
            </React.Fragment>
            // </>
        )
    }
    
}

export default States;
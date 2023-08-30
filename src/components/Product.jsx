import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: "",
             counter: 0
        }
    }

    UpdateCounter=(id)=>{
        console.log(id)
        this.setState({
            id: id+1,
            counter: this.state.counter+1
        })
    }
     
    render() {
        // let productId=this.state.prod_id;
        // let quantity= this.state.qty;

        return (
            <div>
                <p className="bg-warning font-weight-bold">Product (getDerivedStateFromProps, use props as input of states)</p>
                <input type="button" value="Update Counter" onClick={()=>{this.UpdateCounter(1)}} />
                <p>Product Counter: {this.state.counter}</p>
                <Cart ID={this.state.id} counter1={this.state.counter}></Cart>
            </div>
        )
    }
}

export default Product

class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            counter: this.props.counter1,
            id: this.props.ID 
        }
    }

    //this method is used when our state value is dependent upon props (in this case we use props.counter1 to update state.counter value)
    static getDerivedStateFromProps(props, state){
        console.log("Props counter:",props.counter1);
        console.log("State counter:",state.counter); 
        if(props.counter1 != state.counter){
            return {counter : props.counter1}; // update counter value of state 
        }
        return null;
    }

    // We use componentDidMount method when we want to get/receive data from any Restful API/web service
    componentDidMount(){
        console.log("componentDidMount will execute after render component ");
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.counter !== this.state.counter) {
            console.log('counter state value updated: ');
        }
        console.log("Component Updated")
    }
    

    render() {
        return (
            <div>
                <p>Cart Counter: {this.state.counter}</p>
            </div>
        )
    }
}
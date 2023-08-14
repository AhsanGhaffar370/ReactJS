import React, { Component } from 'react'

export default class Forms extends Component {

    constructor(props){
        super(props)
        this.state={
            id:0,
            name:"",
            city:"Karachi",
            isGoing: true
        }
    }
    handleName=(e)=>{
        this.setState({name: e.target.value})
    }
    handleCity=(event)=> {
        this.setState({city: event.target.value});
    }
    handleIsGoing=(e)=>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name; //isGoing
        this.setState({ [name]: value });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        
        let isGoing = this.state.isGoing ? "going" : "not going";
        alert(`${this.state.name} is ${isGoing} to ${this.state.city} `)
        
    }
    
    render() {
        return (
            <div>
            <p className="bg-warning font-weight-bold mt-2">Forms (Form Handling in React)</p>
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleName} placeholder="Name" />
                    <br/>
                    <select value={this.state.city} onChange={this.handleCity}>
                        <option value="karachi">Karachi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Quetta">Quetta</option>
                    </select>
                    <br/>
                    <label>
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleIsGoing} />
                    Is Going
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


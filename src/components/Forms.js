import React, { Component } from 'react'

export default class Forms extends Component {

    constructor(props){
        super(props)
        this.state={
            id:0,
            name:"",
            flavor:"",
            isGoing: true
        }
    }
    handleUsername=(e)=>{
        this.setState({name: e.target.value})
    }
    handleChange=(event)=> {
        this.setState({flavor: event.target.value});
    }
    handleInputChange=(e)=>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        const name = e.target.name; //isGoing
        this.setState({
          [name]: value
        });
    }

    handleSubmit=(e)=>{
        alert(`${this.state.name} from ${this.state.flavor} ${this.state.isGoing}`)
        e.preventDefault()
    }
    
    render() {
        return (
            <div>
            <p className="bg-warning font-weight-bold mt-2">Forms (Form Handling in React)</p>
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleUsername} placeholder="Name" />
                    <br/>
                    <select value={this.state.flavor} onChange={this.handleChange}>
                        <option value="karachi">Karachi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Quetta">Quetta</option>
                    </select>
                    <br/>
                    <label>
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                    Is Going
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


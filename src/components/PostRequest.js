import React, { Component } from 'react'
import Axios from 'axios'
import axios from 'axios';

export default class PostRequest extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userid: "",
            title: "",
            body: ""
        }
    }

    handleValue=(e)=>{
        // const fieldName = e.target.name;
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(Response=>{
            console.log(Response);
        })
        .catch(error=>{
            console.log(error);
        })
    }


    

    render() {
        const {userid,title,body}=this.state
        return (
            <div>
            <p className="bg-warning font-weight-bold">PostRequest (post data)</p>
             
                <form onSubmit={this.handleSubmit}>
                    <label>UserId:
                    <input type="text" value={userid} name="userid" onChange={this.handleValue}/>
                    </label>
                    <br/>
                    <label>Title:
                    <input type="text" value={title} name="title" onChange={this.handleValue}/>
                    </label>
                    <br/>
                    <label>Body:
                    <input type="text" value={body} name="body" onChange={this.handleValue}/>
                    </label>
                    <br/>
                    <input type="submit" value="submit" />
                </form>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from "axios"

export default class GetRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ""
        }
    }

    
    // We use componentDidMount method when we want to get/receive data from any Restful API/web service
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({posts: response.data})
            console.log(response);
        })
        .catch(error => {
            this.setState({error: "URL ERROR"})
            console.log(error);
        })
    }
    
    render() {
        const {posts,error}=this.state;
        return (
            <div>
                
            <p className="bg-warning font-weight-bold">GetRequest (componentDidMount, get axios dummy data)</p>
                {
                    posts.length
                    ? posts.map((post)=><div key={post.id}>{post.title}</div>)
                    : null
                }
                {
                    error
                    ? <div >{error}</div>
                    : null
                }
            </div>
        )
    }
}

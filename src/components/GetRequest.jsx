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
            
            if (error?.response?.status == '404') {
                this.setState({error: "Invalid request url"})
            } else if(error?.response?.status == '404'){
                this.setState({error: "An error occurred while fetching data."})
            }
            else {
                this.setState({error: "An error occurred while fetching data."})
            }
            console.error("api error: ",error?.response?.status);
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

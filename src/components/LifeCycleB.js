import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: "ahsan"
        }
        console.log("LifeCycleB : constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB : getDerivedStateFromProp");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB : componentDidMount")

    }
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

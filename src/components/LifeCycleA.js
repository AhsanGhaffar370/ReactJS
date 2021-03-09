import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {

    // 1st
    constructor(props) {
        super(props)
    
        this.state = {
             user: "ahsan"
        }
        console.log("LifeCycleA : constructor");
    }


    // 2nd
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA : getDerivedStateFromProp");
        return null;
    }

    // 4th (last)
    componentDidMount(){
        console.log("LifeCycleA : componentDidMount")

    }
    

    // 3rd
    render() {
        console.log("LifeCycleA : render")
        return (
            <div>
            <p className="bg-warning font-weight-bold">Complete LifeCycle (check Console)</p>
             
                {/* 3rd step me lifecycleB ke saare methods run honge then last me componentDidMount run hoga */}
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

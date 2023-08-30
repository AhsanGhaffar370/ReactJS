import React, { Component } from 'react'

export default class PropsClass extends Component {
    
    render() {
        return (
            <div>
                
                <p className="bg-warning font-weight-bold">PropsClass</p>
                <h3 className="font-weight-normal"> Access Props
                    <span className="font-weight-bold">({this.props.ah}) </span>
                    in Class Components 
                </h3>
            </div>
        )
    }
}

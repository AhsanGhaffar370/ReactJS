import React from 'react';
import {Consumer} from './context';

const B = () => {
    return (
        <div>
            <h1>B Component</h1>
            <Consumer>
                {contVal=><h4>{contVal.data.name}</h4>}
            </Consumer>
        </div>
    );
}

export default B;

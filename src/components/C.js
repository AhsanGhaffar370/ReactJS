import React from 'react';
import {Consumer} from './context';

const C = () => {
    return (
        <div>
            <h1>C Component</h1>
            <Consumer>
            {
                ({data,counterfunc})=>(
                    <div>
                        <button onClick={counterfunc}>Increment C - {data.roll}</button>   
                        <p>{data.name}</p> 
                    </div>
                )
            }
            </Consumer>
        </div>
    );
}

export default C;

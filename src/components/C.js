import React from 'react';
import {mycontext} from "./A"

const C = () => {
    return (
        <div>
            <h1>C Component</h1>
            <mycontext.Consumer>
            {
                ({data,counterfunc})=>(
                    <div>
                        <button onClick={counterfunc}>Increment C - {data.roll}</button>    
                    </div>
                )
            }
            </mycontext.Consumer>
        </div>
    );
}

export default C;

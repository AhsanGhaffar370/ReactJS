import React from 'react'

function PropsFunctional(myprops) {
    
    return (
        <React.Fragment>
        
            <p className="bg-warning font-weight-bold">PropsFunctional</p>
            <h3 className="font-weight-normal"> Access Props
            <span className="font-weight-bold">({myprops.name}-{myprops.last}-{myprops.abc}-{myprops.children[1]}) </span>
            in Functional Components </h3>
        </React.Fragment>
    )
}

export default PropsFunctional

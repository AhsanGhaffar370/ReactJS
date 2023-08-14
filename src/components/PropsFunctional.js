import React from 'react'

function PropsFunctional(myprops) {
    
    return (
        <React.Fragment>
        
            <p className="bg-warning font-weight-bold">PropsFunctional</p>
            <h3 className="font-weight-normal"> Access Props
            <span className="font-weight-bold">({myprops.name}-{myprops.last}-{myprops.abc}-{myprops.children[0]}-{myprops.children[1]}) </span>
            in Functional Components </h3>
            {myprops.childrens}
            
      <span className="AppyGlobal">child1</span>
        {/* <span className={AppStyle.AppyLocal}>child2</span> */}
        </React.Fragment>
    )
}

export default PropsFunctional

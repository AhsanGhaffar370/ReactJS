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
             <p>
             Class Component Lifecycle Methods:
<br></br>
Mounting:
<br></br>
{"constructor()"}: Initializes the component's state and binds methods. Rarely used since the introduction of class fields.
<br></br>
{"render()"}: Renders the component's UI.
<br></br>
{"componentDidMount()"}: Executes after the component is rendered for the first time. Useful for fetching data or setting up subscriptions.
<br></br>
Updating:
<br></br>
{"shouldComponentUpdate(nextProps, nextState)"}: Determines whether the component should re-render or not based on the new props or state.
<br></br>
{"render()"}: Re-renders the component's UI.
<br></br>
{"componentDidUpdate(prevProps, prevState)"}: Executes after the component updates. Useful for performing side effects after a render.
<br></br>
Unmounting:
<br></br>
{"componentWillUnmount()"}: Executes before the component is removed from the DOM. Used for cleanup tasks like unsubscribing from subscriptions.
<br></br><br></br>
Functional Component Lifecycle Equivalents using React Hooks:
<br></br>
Mounting:
<br></br>
{"useEffect(() => {}, [])"}: Equivalent to componentDidMount(). Runs after the component renders for the first time.
<br></br>
Updating:
<br></br>
{"useEffect(() => {})"}: Equivalent to componentDidUpdate(). Runs after every render, including the first render.
<br></br>useMemo(): Can be used to optimize rendering by memoizing the result of a function based on dependencies.
<br></br>useCallback(): Returns a memoized callback that only changes if its dependencies change.
<br></br>
Unmounting:
<br></br>
<br></br>{"useEffect(() => { return () => {} }, [])"}: Equivalent to componentWillUnmount(). The returned function runs when the component is unmounted.
             </p>
                {/* 3rd step me lifecycleB ke saare methods run honge then last me componentDidMount run hoga */}
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

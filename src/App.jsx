import React, { useState } from 'react';


/* count = count + 1;         This will not increament the value, therefore we will use hooks. We have to change the 
                              state of the component.      */

const App = () => {
    // usestate returns an array, first parameter containing current value and second contains a function.
    // const state = useState();

    const [count, setCount] = useState(0);                      // array destructuring

    // let count = 0
    const IncNumber = () => {
        return (
            setCount(count + 1)                                 //changing the state of a variable using hooks
        );
    }
    return (
        <>
            <h1 className="count"> The value is:  {count} </h1>
            <button onClick={IncNumber}> Click me</button>
        </>
    );
}

export default App;
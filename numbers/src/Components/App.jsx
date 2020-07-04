import React, { useState } from 'react';


const App = () => {
    const [count, newcount] = useState(0)

    const increase = () => {
        newcount(count + 1);
    }

    const decrease = () => {
        newcount(count - 1);
    }
    
    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default App;
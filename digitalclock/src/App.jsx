import React, { useState } from 'react'

const App = () =>{
    let cDateTime = new Date().toLocaleTimeString();
    const [cTime, updatedTime] = useState(cDateTime);

    const newTime = () => {
        let cDateTime = new Date().toLocaleTimeString();
        updatedTime (cDateTime);
    }
    setInterval(newTime, 1000);
    
    return (
        <>
            <h1> {cDateTime} </h1>
        </>

    );
}

export default App;
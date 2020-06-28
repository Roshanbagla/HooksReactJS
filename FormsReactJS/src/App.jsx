import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState();
    const [myFullName, newName] = useState('roshan');

    const inputEvent = (event) => {
        setName(event.target.value);

    };

    const eventDisplay = () => {
        newName(name);
    }
    return (
        <>
            <div>
                <h1> Hello {myFullName} </h1>

                <input type="text" placeholder=" Please Enter Your Name"
                    onChange={inputEvent}></input>

                <button type="submit" onClick={eventDisplay}> submit 😊 </button>
            </div>

        </>
    );
}

export default App;
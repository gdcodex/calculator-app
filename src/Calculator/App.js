import React from 'react';
import Numbers from './numbers';

const App = () => {

    return (
        <>
            <div className="landing">
                <img src="/images/calculator.png" alt="CALC"/>
                <h1>CALCULATOR</h1>
            </div>
            <Numbers />

        </>
    )
};

export default App;
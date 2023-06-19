import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({ value }) =>{

    const [counter, setCounter] = useState(10);

    const handleAdd = () =>{
        //console.log(event)
        //setCounter( counter + 1);
        setCounter((c) => c + 1);
    }

    const handleSubstract = () => setCounter(counter -1);
    const handleReset = () =>setCounter(value);

    return(
        <>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button onClick={ handleReset }>
                RESET
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
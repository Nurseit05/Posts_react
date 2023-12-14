import {useState} from 'react';

import '../App.css'

const Counter = () => {
    // Состояния компонента можем задать и изменить через useState
    const [count, setCount] = useState(0)

    const calc = (i) => {
        setCount((prevCounter) => prevCounter + i)
        // prevCounter => prevCounter нужно чтобы функция новое состояния зависит от старого
        // setCounter(prevCounter => prevCounter + i) функции обратного вызова
    }

    return (
        <div className='App' >
            <h1>{count}</h1>
            <button onClick={() => calc(+1)} >Increment</button>
            <button onClick={() => calc(-1)} >Decrement</button>
        </div>
    );
};

export default Counter;
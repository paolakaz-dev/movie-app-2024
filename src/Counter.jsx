/*
function Counter() {
    let count = 0;

    function increase() {
        count++
        console.log(count)
    }

    function decrease() {
        count--
        console.log(count)
    }


    return (
        <>
            <button onClick={decrease}>-</button>
            {count}
            <button onClick={increase}>+</button>
        </>
    )
}
*/


import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count+1)
    }

    return (
        <>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={increment}>-</button>

        </>
    )

}

export default Counter
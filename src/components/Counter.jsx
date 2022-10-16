import React from 'react';

const Counter = () => {
    // hooks use useState
   const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Counter App : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );     
}

export default Counter;
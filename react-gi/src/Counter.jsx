import CounterCss from './Counter.module.css'
import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);
//function to increase set count by 1
  const increase = () => {
    setCount(count + 1);
  };
//function to decrease set count by 1
  const decrease = () => {
    setCount(count - 1);
  };

  return (
   <div className={CounterCss.counterContainer}>
    <h1>Counter </h1>
        <p>Current count: {count}</p>
        <div className={CounterCss.buttonContainer}>
          <button onClick={increase} className={CounterCss.buttonAdd}>Add</button>
          <button onClick={decrease} className={CounterCss.buttonSub}>Subtract</button>
          </div>
   </div>
  );
}

export default Counter;

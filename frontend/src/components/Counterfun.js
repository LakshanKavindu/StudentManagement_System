import React from 'react';  
import { useState } from 'react';

const Counterfun = () => {

  let [number,setnumber] = useState(0);

  const increment = ()=>{
    setnumber(++number);
  }
  return (
    <div>
        <h2>counter : {number}</h2>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counterfun;
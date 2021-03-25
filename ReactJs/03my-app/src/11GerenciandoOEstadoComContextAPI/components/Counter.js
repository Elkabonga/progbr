import React, { useState } from 'react'
import '../App.css'

function Counter(props) {

  const [counter, setCounter] = useState(1)

  return (<div className='counter'>
    <div className='display'>{counter}</div>
    <div className='containerButton'>
      <button onClick={() => setCounter(count => count - 1)}>-</button>
      <button onClick={() => setCounter(count => count + 1)}>+</button>
    </div>
  </div>)
}

export default Counter

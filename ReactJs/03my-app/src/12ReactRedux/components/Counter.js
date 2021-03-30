import React from 'react'
import '../App.css'

function Counter(props) {
  return (<div className='counter'>
    <div className='display'>{0}</div>
    <div className='containerButton'>
      <button onClick={() => {}}>-</button>
      <button onClick={() => {}}>+</button>
    </div>
  </div>)
}

export default Counter

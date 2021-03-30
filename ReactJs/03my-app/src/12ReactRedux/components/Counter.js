import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../App.css'

function Counter(props) {

  const contador = useSelector((state) => { return state })
  const dispatch = useDispatch()

  return (<div className='counter'>
    <div className='display'>{contador}</div>
    <div className='containerButton'>
      <button onClick={() => { dispatch({ type: 'DECREMENT' }) }}>-</button>
      <button onClick={() => { dispatch({ type: 'INCREMENT' }) }}>+</button>
    </div>
  </div>)
}

export default Counter

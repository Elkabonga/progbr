import React, { useContext } from 'react'
import CounterContext from '../CounterContext'

function Header(props) {
  const value = useContext(CounterContext)
  return(<div className='header'>
    <h3>contador</h3>
    <div>0</div>
  </div>)
}

export default Header

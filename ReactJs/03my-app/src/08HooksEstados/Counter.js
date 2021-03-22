import React, { useState } from 'react'

function Counter(props) {

  const [count, setCount] = useState(props.count)
  const [meuEstado, setMeuEstado] = useState('qualquer coisa')

  function add() {
    setCount(count + 1)
    console.log('atualizar');
    console.log(meuEstado);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={add}>add</button>
    </div>
  )
}

export default Counter
import React from "react";
import Counter from './components/Counter'
import Header from './components/Header'
import { CounterContext } from './CounterContext'
import "./App.css";

function App() {
  return (<div className='container'>
      <div className='app'>
        <Header />
      Contador
      <Counter />
      </div>
  </div>
  )
}

export default App;

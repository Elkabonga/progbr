import React from "react";
import Counter from './components/Counter'
import Header from './components/Header'
import { createStore } from 'redux'
import contadorReducer from './reducers/contadorReducer'
import { Provider } from 'react-redux'

import "./App.css";

function App() {

  const store = createStore(contadorReducer)

  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <Counter />
      </div>
    </Provider>
  )
}

export default App;

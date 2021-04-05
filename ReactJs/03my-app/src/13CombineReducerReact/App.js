import React from "react";
import Counter from './components/Counter'
import Header from './components/Header'
import { createStore, combineReducers } from 'redux'
import contadorReducer from './reducers/contadorReducer'
import { Provider } from 'react-redux'

import "./App.css";

function App() {

  const allReducers = combineReducers({counter: contadorReducer})
  const store = createStore(allReducers)

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

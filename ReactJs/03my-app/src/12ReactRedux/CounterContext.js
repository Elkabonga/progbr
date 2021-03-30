import React, { useState, createContext } from 'react'

export const CounterContext = createContext()

export function CounterProvider(props) {
  return (
    <CounterContext.Provider value='text'>
      {props.children}
    </CounterContext.Provider>
  )
}

const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const incrementAction = (value) => { return { type: 'INCREMENT', payload: value || 1 } }
const decrementAction = (value) => { return { type: 'DECREMENT', payload: value || 1 } }

function counterReducer(state = 6, action) {

  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - action.payload

    default:
      return state
  }

}

const addItemAction = (item) => { return { type: 'ADD_ITEM', payload: item } }

const listReducer = (state = ['Item Padrão'], action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    default:
      return state
  }
}
// ___________________________
const allReducers = combineReducer({
  counter: counterReducer,
  list: listReducer
})

const store = createStore(allReducers)
console.log(store.getState())

store.subscribe(() => { console.log(store.getState()); })
store.dispatch(addItemAction('Novo item'))
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction(5))
store.dispatch(decrementAction())

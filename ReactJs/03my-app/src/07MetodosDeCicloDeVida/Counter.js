import React from 'react'

class Counter extends React.Component {

  // construtor é um método de vida de um component
  constructor(props) {
    super(props)

    this.state = { count: 0 }
    this.add = this.add.bind(this)
  }

  add() {
    this.setState((state) => {
      return { count: this.state.count + 1 }
    }, () => {
      console.log(this.state);
      localStorage.setItem('state', JSON.stringify(this.state))
    })
  }

  // shouldComponentUpdate é um método de vida de um component
  // se colocarmos return false a tela não sera renderizada
  shouldComponentUpdate() {
    return true
  }

  // shouldComponentUpdate é um método de vida de um component
  // porém ele só é executado qnd todos os componentes forem finalizados
  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('state')))
  }

  // shouldComponentUpdate é um método de vida de um component
  // porém ele só é executado qnd algum componentes foi retirado da tela
  componentWillUnmount() {

  }

  // render é um método de vida de um component
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default Counter
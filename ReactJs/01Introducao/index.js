const root = document.querySelector('#root')

const t1 = React.createElement('h1', { id: 'Titulo principal' }, 'Hello World')
const t2 = React.createElement('h2', { id: 'SubTitulo' }, 'React Js')

const headLine = React.createElement('div', null, t1, t2)

ReactDOM.render(headLine, root)

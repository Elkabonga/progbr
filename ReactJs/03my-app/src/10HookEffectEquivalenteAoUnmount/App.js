import React, { useEffect, useState } from "react";
import Header from "./Header";
import Counter from "./Counter";
import "./App.css";

function App() {

  const [show, setShow] = useState(true)

  let time = 0

  useEffect(() => {
    let timer = setInterval(() => {
      time++
      console.log(time);
      if (time > 5) {
        clearInterval(timer)
        setShow(false)
      }
    }, 1000)
  }, [])

  if (show) {
    return (
      <div>
        <Header name="ProgBr" links={["Sobre", "Comprar", "Contato"]} />
        <Counter count={0} />
      </div>
    )
  } else {
    return (
      <div>
        Sem Contador
      </div>
    )
  }
}

export default App;

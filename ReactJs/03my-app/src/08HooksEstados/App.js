import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div>
      <Header name="ProgBr" links={["Sobre", "Comprar", "Contato"]} />
      <Counter count={5} />
    </div>
  );
}

export default App;

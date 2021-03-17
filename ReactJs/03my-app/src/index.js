import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CreateMyApp from "./01Create-my-app/App";
import ComponentesEPropriedades from "./02ComponentesEPropriedades/App";
import Listas from "./03Listas/App";
import CriandoObjetosComClass from "./04CriandoObjetosComClass/index";
import ComponentesComClass from "./05ComponentesComClass/App";
import Estados from "./06Estados/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <CreateMyApp /> */}
    {/* <ComponentesEPropriedades /> */}
    {/* <Listas /> */}

    {/* abaixo utilizando node index.js no terminal */}
    {/* <CriandoObjetosComClass /> */}

    {/* <ComponentesComClass /> */}
    <Estados />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

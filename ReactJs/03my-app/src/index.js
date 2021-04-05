import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CreateMyApp from "./01Create-my-app/App";
import ComponentesEPropriedades from "./02ComponentesEPropriedades/App";
import Listas from "./03Listas/App";
import CriandoObjetosComClass from "./04CriandoObjetosComClass/index";
import ComponentesComClass from "./05ComponentesComClass/App";
import Estados from "./06Estados/App";
import MetodosDeCicloDeVida from "./07MetodosDeCicloDeVida/App";
import HooksEstados from "./08HooksEstados/App";
import HooksEffect from "./09HooksEffect/App";
import HookEffectEquivalenteAoUnmount from "./10HookEffectEquivalenteAoUnmount/App";
// import GerenciandoOEstadoComContextAPI from "./11GerenciandoOEstadoComContextAPI/App";
import ReactRedux from "./12ReactRedux/App";
import CombineReducerReact from "./13CombineReducerReact/App";


ReactDOM.render(
  <React.StrictMode>
    {/* <CreateMyApp /> */}
    {/* <ComponentesEPropriedades /> */}
    {/* <Listas /> */}

    {/* abaixo utilizando node index.js no terminal */}
    {/* <CriandoObjetosComClass /> */}

    {/* <ComponentesComClass /> */}
    {/* <Estados /> */}
    {/* <MetodosDeCicloDeVida /> */}
    {/* <HooksEstados /> */}
    {/* <HooksEffect /> */}
    {/* <HookEffectEquivalenteAoUnmount /> */}
    {/* <GerenciandoOEstadoComContextAPI /> */}
    {/* <ReactRedux /> */}
    <CombineReducerReact />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

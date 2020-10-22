// console.log("Hola React!");

// const elemento = document.createElement("h1");
// elemento.innerText = "Esto es un elemento con javascript";

// const container = document.getElementById("root");

// container.appendChild(elemento);

import React from "react";
import ReactDOM from "react-dom";

// import Badge from "./component/Badge";
//import BadgeNew from "./pages/BadgeNew";
//import Counter from "./hooks/Counter";
import Badges from "./pages/Badges";

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
// const elemento = <h1>Esto es un elemento con React</h1>;

const container = document.getElementById("root");

// ReactDOM.render(_que_,_donde_)
ReactDOM.render(<Badges />, container);

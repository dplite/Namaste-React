
import React from "react"
import ReactDOM from "react-dom/client"
const h1 = React.createElement("h1", {id:"heading"}, "Hello World from React");



let h1fromJSX=<h1 id="heading">Hello</h1>;  //JSX.. this is transpiled to React.create element by babel
console.log(h1,h1fromJSX)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
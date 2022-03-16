import React, { useState } from "react";
import ReactDOM from "react-dom";

function Contador(props) {
  return (
    <div>
      <h1>Setar o contador</h1>
      <div>{props.setCounter}</div>
    </div>
  );
}
export default Contador;

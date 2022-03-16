import React from "react";
import ReactDOM from 'react-dom';

function Button(props) {
    
    return (
    <button
      onClick={props.setCon}
    >
      Setar o Contator
    </button>
  );
}

export default Button;

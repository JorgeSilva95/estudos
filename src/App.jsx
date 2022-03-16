import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./Styles/App.css";
import Contador from "./Components/Contador";
import Button from "./Components/Button";

function ApOP(){
  const ApTestOP = document.getElementById("App").style;
  ApTestOP.opacity = "100";
  console.log(ApTestOP.opacity);
  if(ApTestOP.opacity == "100")
  {
    ApTestOP.transition = "4.0s";
    ApTestOP.opacity = "0";
    ApTestOP.visibility = "hidden";
    console.log("funciona condição");
  }
}

function App() {
  const [cont, setCont] = useState(0);
  const SetCon = function(){
    setCont(cont + 1);
    ApOP();
    setTipsTela("Contador");
  }

  const [tipsTela,setTipsTela] = useState("Contador");

  if(tipsTela == "Contador"){
    return (
      <div id='App' className="App">
        <Contador setCounter={cont}/>
        <Button setCon={SetCon}/>
      </div>
    );
    ApOP();
  } else {
    return (
      
      <div className="App">
        NOMECLATURA
      </div>
    );
  }

  
}

export default App;

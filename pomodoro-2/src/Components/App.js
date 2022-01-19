import "./App.css";
import React, { Fragment } from "react";

//components
import Pomodoro from "./Pomodoro";
import InputThoughts from "./InputThoughts";

function App() {
  return (
    <Fragment>
      <div className="App">
      <Pomodoro />
    </div>
    <div className="container">
      <InputThoughts />
      </div>
    </Fragment>
   
  );
}

export default App;

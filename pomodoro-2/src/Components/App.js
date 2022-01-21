import "./App.css";
import React, { Fragment } from "react";

//components
import Pomodoro from "./Pomodoro";
import InputThoughts from "./InputThoughts";
import GetThoughts from "./GetThoughts";
import Header from "./header";

function App() {
  return (
    <div className="wrap">
      <div className="App">
        <Header />
        <Pomodoro />
      </div>
      <div className="btn">
        <InputThoughts />
        <GetThoughts />
      </div>
    </div>
  );
}

export default App;

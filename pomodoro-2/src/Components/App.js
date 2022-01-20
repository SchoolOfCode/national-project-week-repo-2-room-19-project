import "./App.css";
import React, { Fragment } from "react";

//components
import Pomodoro from "./Pomodoro";
import InputThoughts from "./InputThoughts";
import GetThoughts from "./GetThoughts";
import Header from "./header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Pomodoro />
      </div>
      <div>
        <InputThoughts />
      </div>
      <div>
        <GetThoughts />
      </div>
    </>
  );
}

export default App;

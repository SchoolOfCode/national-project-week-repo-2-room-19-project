import "./App.css";
import React, { Fragment } from "react";

//components
import Pomodoro from "./Pomodoro";
import InputThoughts from "./InputThoughts";
// import GetThoughts from "./GetThoughts";

function App() {
  return (
    <Fragment>
      <div className="App">
      <Pomodoro />
      </div>
      <div className="container">
      <InputThoughts />
      </div>
      {/* <div className="GetButtonThoughts">
        <GetThoughts />
      </div> */}
    
    </Fragment>
   
  );
}

export default App;

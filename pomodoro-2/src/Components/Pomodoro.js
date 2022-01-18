import React, { useState, useEffect } from "react";

function Pomodoro() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      //If  minutes are not 0 we want to minus 1 each time the sconds get to 0 and reset the seconds to 59 seconds to continue counting down.
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          //If Message is displaying(displayMessage true) we want to set the timer to 4 minutes 59 and have a break else if (displayMessage false) we want to set the timer to 24 minutes and 59 seconds (when break is over)
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        //If none of the above code is executes we simply want to minus 1 from the seconds so the timer counts down.
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);
  //
  //Code below allows us to see  0 before the number of minutes or seconds if there are less than 10. Eg 04:05 (four minutes and 5 seconds) instead of 4:5
  //
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {/* comment -- If displayMessage is true we want to show the div below. if it is false it wont be shown */}
        {displayMessage && <div>Go take a break! New study session in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}

export default Pomodoro;

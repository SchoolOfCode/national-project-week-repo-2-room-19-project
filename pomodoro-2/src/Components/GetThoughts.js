import React, { Fragment, useState, useEffect } from "react";

function GetThoughts(props) {
  const [dirty, setDirty] = useState(true);

  const [returnedThoughts, setReturnedThoughts] = useState([]);

  useEffect(() => {
    if (dirty) {
      const thoughtsData = async () => {
        const response = await fetch(
          "https://pomodoro-project-19.herokuapp.com/thoughts"
        );
        const data = await response.json();
        console.log(data);
        setReturnedThoughts(data);
        setDirty(false);
      };
      thoughtsData();
    }
  }, [dirty]);

  // const handleclick = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://pomodoro-project-19.herokuapp.com/thoughts",
  //       {
  //         headers: { "content-type": "application/json" },
  //         // body: JSON.stringify()
  //       }
  //     );

  function handleclick() {
    setDirty(true);
  }

  return (
    <Fragment>
      <button className="getthoughts" type="submit" onClick={handleclick}>
        Get my thoughts
      </button>
    </Fragment>
  );
}

export default GetThoughts;

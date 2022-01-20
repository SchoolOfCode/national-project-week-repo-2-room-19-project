import React, { Fragment, useState, useEffect } from "react";

function GetThoughts(props) {
  const [dirty, setDirty] = useState(false);

  const [returnedThoughts, setReturnedThoughts] = useState([]);

  useEffect(() => {
    if (dirty) {
      const thoughtsData = async () => {
        const response = await fetch(
          "https://pomodoro-project-19.herokuapp.com/thoughts"
        );
        const data = await response.json();
        // console.log(data);
        setReturnedThoughts(data);
        // console.log(returnedThoughts);
        setDirty(false);
      };
      thoughtsData();
    }
  }, [dirty]);
  console.log(returnedThoughts);

  function handleclick() {
    setDirty(true);
  }

  return (
    <Fragment>
      <button className="getthoughts" type="submit" onClick={handleclick}>
        See all notes
      </button>
      <div>
        {returnedThoughts.map((prop) => (
          <div className="prev-thoughts">
            <p className="thought">{prop.thought}</p>
            <p className="date">{prop.date}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default GetThoughts;

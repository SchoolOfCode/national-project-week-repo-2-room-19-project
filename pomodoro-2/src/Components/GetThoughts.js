import React, { Fragment, useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API_URL;
function GetThoughts(props) {
  const [dirty, setDirty] = useState(false);

  const [returnedThoughts, setReturnedThoughts] = useState([]);

  useEffect(() => {
    if (dirty) {
      const thoughtsData = async () => {
        const response = await fetch(`${API_URL}/thoughts`);
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

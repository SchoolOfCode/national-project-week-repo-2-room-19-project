import React, { Fragment, useState } from "react";

function GetThoughts(props) {
  const [returnedThoughts, setReturnedThoughts] = useState([]);

  const GetThoughts = async () => {
    try {
      const response = await fetch(
        "https://sharp-easley-01b623.netlify.app/api",
        {
          headers: { "content-type": "application/json" },
          // body: JSON.stringify()
        }
      );

      const data = await response.json();
      setReturnedThoughts(data);

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button className="getthoughts" type="submit" onClick={GetThoughts}>
        Get my thoughts
      </button>
      {returnedThoughts}
    </Fragment>
  );
}

export default GetThoughts;

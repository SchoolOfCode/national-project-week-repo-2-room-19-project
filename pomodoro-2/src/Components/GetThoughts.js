import React, { Fragment, useState } from "react";

function GetThoughts(props) {
  const [returnedThoughts, setReturnedThoughts] = useState([]);

  const GetThoughts = async () => {
    try {
      const response = await fetch(
        "https://pomodoro-project-19.herokuapp.com/api/",
        {
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
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

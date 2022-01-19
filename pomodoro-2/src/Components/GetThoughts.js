import React, { Fragment, useState } from "react";

const GetThoughts = async () => {

const [returnedThoughts, setReturnedThoughts] = useState([]);

    try {
        const response = await fetch("http://localhost:3001/api/", {
            headers: { "content-type": "application/json" },
            body: JSON.stringify()
        })

        console.log(response)
    } catch (error) {
        console.error(error.message)
    }
// }

    return (
    <Fragment>
            <button className="getthoughts" type="submit" onClick={GetThoughts}>Get my thoughts</button>       
    </Fragment>
);
}

export default GetThoughts;
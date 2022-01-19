import React, { Fragment, useState } from "react";

const InputThoughts = () => {

const [description, setDescripton] = useState("");

const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
        // const body = {description};
        const response = await fetch("http://localhost:3001/api/", {
            // method: "POST",
            headers: { "content-type": "application/json" },
            // body: JSON.stringify(body)
        })

        console.log(response)
    } catch (error) {
        console.error(error.message)
    }
}

    return (
    <Fragment>
        <h1 className="text-center mt-5"> Thoughts </h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
            type="text" 
            className="form-control" 
            value={description} 
            onChange={e => setDescripton(e.target.value)}    
            />
            <button className="btn btn-success" type="submit">Please add thoughts here</button>
            <button className="getthoughts">Get my thoughts</button>
        </form>
    </Fragment>
);
}

export default InputThoughts;
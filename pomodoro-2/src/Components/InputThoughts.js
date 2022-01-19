import React, { Fragment, useState } from "react";

const InputThoughts = () => {

const [description, setDescripton] = useState("");

const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
        const body = {description};
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
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
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
);
}

export default InputThoughts;
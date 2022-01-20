import React, { Fragment, useState } from "react";

function InputThoughts() {
  const [description, setDescription] = useState("");

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = { description };
      console.log(`submitting ${JSON.stringify(body)}`);
      const response = await fetch(
        "https://pomodoro-project-19.herokuapp.com/thoughts",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error.message);
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
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Please add thoughts here
        </button>
      </form>
    </Fragment>
  );
}

export default InputThoughts;

import React from "react";
import axios from "axios";

export default function ConflationCriteria({ sessionID }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("sessionID", sessionID);
    console.log(formData);

    try {
      const res = await axios.post(
        "http://localhost:1995/conflation_criteria",
        formData
      );
      setCurrentState(3);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="bufferValue"
          placeholder="buffer value"
        ></input>
        <input
          type="number"
          name="certainty"
          placeholder="minmum certainty for linking"
        ></input>

        <div> Overlap weight</div>
        <input
          type="number"
          name="actualPercatange"
          placeholder="actual"
        ></input>
        <input
          type="number"
          name="bufferPercatange"
          placeholder="buffer"
        ></input>

        <br />
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}

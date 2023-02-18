import React, { useState } from "react";
import axios from "axios";

import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
export default function Area2Area({ sessionID, setCurrentState }) {
  const [loading, setLoading] = useState(false);

  const [bufferValue, setBufferValue] = useState();
  const [certainty, setCertainty] = useState();
  const [actualPercatange, setActualPercatange] = useState();
  const [bufferPercatange, setBufferPercatange] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("sessionID", sessionID);
    formData.append("bufferValue", bufferValue);
    formData.append("certainty", certainty);
    formData.append("actualPercatange", actualPercatange);
    formData.append("bufferPercatange", bufferPercatange);

    console.log(formData);

    try {
      const res = await axios.post("http://localhost:1995/criteria", formData);
      setCurrentState(3);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bufferValue" className="font-bold block mb-2">
        bufferValue
      </label>
      <InputNumber
        inputId="bufferValue"
        value={bufferValue}
        onValueChange={(e) => setBufferValue(e.value)}
        suffix=" m"
      />
      <label htmlFor="certainty" className="font-bold block mb-2">
        certainty
      </label>
      <InputNumber
        inputId="certainty"
        value={certainty}
        onValueChange={(e) => setCertainty(e.value)}
        suffix=" %"
      />
      <label htmlFor="actualPercatange" className="font-bold block mb-2">
        actualPercatange
      </label>
      <InputNumber
        inputId="actualPercatange"
        value={actualPercatange}
        onValueChange={(e) => setActualPercatange(e.value)}
        suffix=" %"
      />
      <label htmlFor="bufferPercatange" className="font-bold block mb-2">
        bufferPercatange
      </label>
      <InputNumber
        inputId="bufferPercatange"
        value={bufferPercatange}
        onValueChange={(e) => setBufferPercatange(e.value)}
        suffix=" %"
      />
      <br />
      <br />
      <Button
        label="Submit"
        icon="pi pi-check"
        iconPos="right"
        type="submit"
        loading={loading}
      />
    </form>
  );
}

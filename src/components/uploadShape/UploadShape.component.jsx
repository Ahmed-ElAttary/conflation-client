import { useState } from "react";
import axios from "axios";
const UploadShape = ({ setSessionID, setCurrentState }) => {
  const [files, setFiles] = useState([]);

  const changeInputFileHandler = (e) => {
    setFiles(Array.from(e.target.files));
  };
  const upload = async () => {
    const formData = new FormData();
    files.forEach((el) => {
      formData.append("file", el);
    });

    try {
      const res = await axios.post("http://localhost:1995/upload", formData);

      setSessionID(res.data.sessionID);
      setCurrentState(2);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={changeInputFileHandler} multiple></input>
      {files.length && files.map((el) => <div key={el.name}>{el.name}</div>)}
      <br />
      <button onClick={upload}>upload</button>
    </div>
  );
};
export default UploadShape;

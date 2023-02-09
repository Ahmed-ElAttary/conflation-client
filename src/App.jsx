import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1234/")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {});
  // }, []);
  const changeInputFileHandler = (e) => {
    setFiles(Array.from(e.target.files));
  };
  const upload = async () => {
    const formData = new FormData();
    files.forEach((el) => {
      formData.append("file", el);
    });

    //formData.append("fileName", fileName);
    try {
      const res = await axios.post("http://localhost:1234/upload", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
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
}

export default App;

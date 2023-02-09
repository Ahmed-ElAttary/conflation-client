import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1234/")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <div className="App">
      {data.length && data.map((el) => <div key={el.id}>{el.name}</div>)}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import UploadShape from "./components/uploadShape/UploadShape.component";
import ConflationCriteria from "./components/uploadShape/ConflationCriteria.component";
import UploadFiles from "./components/uploadFiles/UploadFiles.component";
import ConflationTypes from "./components/conflationTypes/ConflationTypes.component";
import Result from "./components/result/Result.component";

function App() {
  const [currentState, setCurrentState] = useState(1);
  const [sessionID, setSessionID] = useState();

  return (
    <>
      {currentState == 1 && (
        <UploadFiles
          setSessionID={setSessionID}
          setCurrentState={setCurrentState}
        />
      )}
      {currentState == 2 && (
        <>
          <ConflationTypes
            setCurrentState={setCurrentState}
            sessionID={sessionID}
          />
        </>
      )}
      {currentState == 3 && <Result sessionID={sessionID} />}
    </>
  );
}

export default App;

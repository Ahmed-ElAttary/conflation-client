import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//theme
import "primereact/resources/themes/tailwind-light/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

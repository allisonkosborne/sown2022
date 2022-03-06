import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import { Sown } from "./components/Sown";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Sown />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

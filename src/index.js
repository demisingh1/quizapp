import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuizProvider } from "./context/QuizAppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//   <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  /* </React.StrictMode> */
);

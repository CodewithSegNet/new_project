import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import { HelmetProvider } from "react-helmet-async";
import "./assets/fonts/montserrat.css";
import "./index.css"; 
import "./App.css"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

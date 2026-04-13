import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import InputText from "./components/InputText";
import ListGroupWithProps from "./components/ListGroupWithProps";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

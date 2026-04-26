import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppGemini from "./AppGemini.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppGemini />
  </StrictMode>,
);

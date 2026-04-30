import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import OutputComponent from "./components/OutputComponent";

import Login from "./components/Login";
import AppGemini from "./AppGemini";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gemini" element={<AppGemini />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;


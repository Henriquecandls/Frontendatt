import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import OutputComponent from "./components/OutputComponent";
import Header from "./components/Header";
import AppGemini from "./AppGemini";
import Login from "./components/Login";
import Button from "./components/Button";

function App() {
  const [output, setOutput] = useState([]);
  const loading = useRef(true);

  useEffect(() => {
    loading.current = true;

    axios.get("http://localhost:3000/users").then((response) => {
      setOutput(response.data);
      loading.current = false;
    });
  }, []);

  return (

  <BrowserRouter>

  <Routes>

 <Route path="/" element={<Login />} />
<Route path="/app"element={<> <Header /><OutputComponent users={output} info={loading} /> </> }/>
<Route path="/gemini" element={<AppGemini />} />

  </Routes>
  
</BrowserRouter>
  );
}

export default App;
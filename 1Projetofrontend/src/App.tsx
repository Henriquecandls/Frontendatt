import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import OutputComponent from "./components/OutputComponent";
import AppGemini from "./AppGemini";
import Login from "./components/Login";
import Landing from "./components/Landing";
import { ThemeContext } from "./components/ThemeContext";
import Historico from "./components/Historico";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
  
function App() {
  const [output, setOutput] = useState([]);
  const [toogle, setIsToogle] = useState(false);
  const loading = useRef(true);

  const theme = toogle ? "dark" : "light"; // 👈 só isto é novo

  useEffect(() => {
    loading.current = true;
    axios.get("http://localhost:3000/users").then((response) => {
      setOutput(response.data);
      loading.current = false;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme, // 👈 simplificado
        toggleTheme: () => setIsToogle((prev) => !prev),
      }}
    >
      <BrowserRouter>
        <div className={`app-root ${theme}`}> {/* 👈 div com tema */}
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login isRegister={true} />} />
            <Route path="/app" element={<OutputComponent users={output} info={loading} />} />
            <Route path="/gemini" element={<AppGemini />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
import { useState } from "react";
import { createContext } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import "./Styles/theme.css";
export const ThemeContext = createContext<any>(null);

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="container-fluid text-center border">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
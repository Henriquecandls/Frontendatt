import "../css/Header.css";
import { useTheme } from "./ThemeContext";
import Menu from "./Menu.tsx";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigate("/"); 
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <header className={`header header-${theme}`}>

      <div className="title">
        Gemini Simple Demo
      </div>

      <Menu />

      <div className="actions">
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
       
      </div>

    </header>
  );
}
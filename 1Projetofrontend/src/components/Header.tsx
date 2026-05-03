import "../css/Header.css";
import { useTheme } from "./ThemeContext";
import Menu from "./Menu.tsx";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

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
      </div>

    </header>
  );
}

import "../css/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="title">
        Gemini Simple Demo
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Chat</a>
        <a href="#">Histórico</a>
        <a href="#">Dashboard</a>
      </nav>

      <div className="actions">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}
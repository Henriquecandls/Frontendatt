import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="nav">

      
      <Link to="/gemini">Chat</Link>
      <Link to="/historico">Histórico</Link>
      <Link to="/dashboard">Dashboard</Link>

    </nav>
  );
}
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useEffect, useState } from "react";

export default function Menu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  if (!user) return null;

  return (
    <nav className="nav">
      <Link to="/gemini">Chat</Link>
      <Link to="/historico">Histórico</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
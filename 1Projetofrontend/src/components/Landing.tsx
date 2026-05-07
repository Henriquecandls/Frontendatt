import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import "../css/landing.css";

export default function Landing() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className={`landing-container ${theme}`}>
      <div className="landing-content">
        <h1>Bem-vindo ao Gemini AI Interface</h1>
        <p>
          Uma plataforma interativa para comunicar com o motor de Inteligência
          Artificial da Google - Gemini
        </p>

        <div className="features">
          <div className="feature">
            <h3>💬 Chat Interativo</h3>
            <p>Faça perguntas e obtenha respostas instantâneas</p>
          </div>

          <div className="feature">
            <h3>📜 Histórico</h3>
            <p>Guarde todas as suas conversas para consulta futura</p>
          </div>

          <div className="feature">
            <h3>📊 Dashboard</h3>
            <p>Analise suas estatísticas de utilização</p>
          </div>

          <div className="feature">
            <h3>🎨 Tema Customizável</h3>
            <p>Alterne entre modo claro e escuro</p>
          </div>
        </div>

        <div className="landing-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/login")}
          >
            Começar
          </button>
        </div>
      </div>
    </div>
  );
}

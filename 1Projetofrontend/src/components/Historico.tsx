import { useEffect, useState } from "react";
import "../css/historico.css";

function Historico() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("conversations");

    if (stored) {
      setConversations(JSON.parse(stored));
    }
  }, []);

  function deleteConversation(index) {
    const updated = conversations.filter((_, i) => i !== index);

    setConversations(updated);
    localStorage.setItem("conversations", JSON.stringify(updated));
  }

  return (
    <div className="history-container">
      <h1>Histórico</h1>

      {conversations.length === 0 && <p>Sem histórico</p>}

      {conversations.map((conv, i) => (
        <div key={i} className="conversation-card">

          <div className="conversation-header">
            <h3>Conversa {i + 1}</h3>

            <button
              className="delete-btn"
              onClick={() => deleteConversation(i)}
            >
              Apagar
            </button>
          </div>

          <div className="conversation-body">
            {conv.map((msg, j) => (
              <div key={j} className={`msg ${msg.type}`}>
                <b>{msg.type}:</b> {msg.text}
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Historico;
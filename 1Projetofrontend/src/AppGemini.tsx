import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Message from "./components/Message";
import { useTheme } from "./components/ThemeContext";
import { useNavigate } from "react-router-dom";
import { auth } from "./config/firebase";


const genAI = new GoogleGenerativeAI("");

function AppGemini() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<
    { type: "question" | "answer"; text: string }[]
  >([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/");
    });

    return () => unsubscribe();
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim()) return;
    if (loading) return;

    setLoading(true);
    setResponse("");

    const question = prompt;
    const startTime = Date.now();

    const newMessages: { type: "question" | "answer"; text: string }[] = [
      { type: "question", text: question },
    ];

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-flash-latest",
      });

      const result = await model.generateContent(question);
      const text = result.response.text();
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      newMessages.push({ type: "answer", text });

      setResponse(text);

      const updated = [...messages, ...newMessages];
      setMessages(updated);

      // 🔥 Guardar conversa com tempo de resposta
      const stored = JSON.parse(
        localStorage.getItem("conversations") || "[]"
      );

      // Guardar métricas de requisição
      const metrics = JSON.parse(
        localStorage.getItem("apiMetrics") || "[]"
      );
      metrics.push({ time: responseTime, timestamp: new Date().toISOString() });
      localStorage.setItem("apiMetrics", JSON.stringify(metrics));

      // garante que existe conversa ativa
      if (stored.length === 0) {
        stored.push(updated);
      } else {
        stored[stored.length - 1] = updated;
      }

      localStorage.setItem(
        "conversations",
        JSON.stringify(stored)
      );

    } catch (error) {
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      const errorMsg =
        "Error generating content. Check your API key.";

      newMessages.push({ type: "answer", text: errorMsg });

      setResponse(errorMsg);

      const updated = [...messages, ...newMessages];
      setMessages(updated);

      const stored = JSON.parse(
        localStorage.getItem("conversations") || "[]"
      );

      // Guardar tempo mesmo em erro
      const metrics = JSON.parse(
        localStorage.getItem("apiMetrics") || "[]"
      );
      metrics.push({ time: responseTime, timestamp: new Date().toISOString() });
      localStorage.setItem("apiMetrics", JSON.stringify(metrics));

      if (stored.length === 0) {
        stored.push(updated);
      } else {
        stored[stored.length - 1] = updated;
      }

      localStorage.setItem(
        "conversations",
        JSON.stringify(stored)
      );

      console.error(error);
    }

    setLoading(false);
    setPrompt("");
  }

  function handleNewConversation() {
    if (messages.length === 0) return;

    const stored = JSON.parse(
      localStorage.getItem("conversations") || "[]"
    );

    // fecha conversa atual e cria nova
    stored.push([]);

    localStorage.setItem(
      "conversations",
      JSON.stringify(stored)
    );

    setMessages([]);
    setPrompt("");
    setResponse("");
  }

  return (
    <div className={`App ${theme}`} style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          onClick={handleNewConversation}
          style={{
            marginBottom: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Nova conversa
        </button>

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ width: "300px", padding: "10px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px" }}
        >
          {loading ? "Thinking..." : "Submit"}
        </button>
      </form>

      <div className="messages" style={{ marginTop: "20px" }}>
        {messages.map((msg, i) => (
          <Message key={i} type={msg.type}>
            {msg.text}
          </Message>
        ))}
      </div>
    </div>
  );
}

export default AppGemini;
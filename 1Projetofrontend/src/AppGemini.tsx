import { useState, createContext, useContext } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Message from "./components/Message";

import { useTheme } from "./components/ThemeContext";
import { useNavigate } from "react-router-dom";
import "./css/App.css";

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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    setMessages((prev) => [
      ...prev,
      { type: "question", text: prompt },
    ]);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
      const result = await model.generateContent(prompt);

      const text = result.response.text();

      setResponse(text);

      setMessages((prev) => {
        const updated = [
          ...prev,
          { type: "answer", text },
        ];

        localStorage.setItem("messages", JSON.stringify(updated));

        return updated;
      });

    } catch (error) {
      const errorMsg = "Error generating content. Check your API key.";

      setResponse(errorMsg);

      setMessages((prev) => [
        ...prev,
        { type: "answer", text: errorMsg },
      ]);

      console.error(error);
    }

    setLoading(false);
    setPrompt("");
  }
function handleNewConversation() {
  const stored = JSON.parse(localStorage.getItem("conversations") || "[]");

  if (messages.length > 0) {
    stored.push(messages);
    localStorage.setItem("conversations", JSON.stringify(stored));
  }

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
        style={{ marginBottom: "10px", padding: "10px", cursor: "pointer" }}
      >
        Nova conversa
      </button>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "300px", padding: "10px" }}
      />

      <button type="submit" style={{ padding: "10px" }} disabled={loading}>
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

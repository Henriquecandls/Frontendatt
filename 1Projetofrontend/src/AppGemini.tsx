import { useState, createContext, useContext } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import "./css/App.css";


const genAI = new GoogleGenerativeAI("");
function AppGemini() {
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

      setMessages((prev) => [
        ...prev,
        { type: "answer", text },
      ]);
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

  return (
    
    <div className="App" style={{ padding: "20px" }}>
      <Header />
      
      

      <form onSubmit={handleSubmit}>
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

      {}
      <div className="messages" style={{ marginTop: "20px" }}>
        {messages.map((msg, i) => (
          <Message key={i} type={msg.type}>
            {msg.text}
          </Message>
        ))}
      </div>
      <Footer />
    </div>
    
    
  );
}

export default AppGemini;
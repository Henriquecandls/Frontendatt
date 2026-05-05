import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const answers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  const questions = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (!u) {
        navigate("/");
      } else {
        setUser(u);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) return null;

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Cards */}
      <div style={{ display: "flex", gap: 20 }}>

        {/* Answers */}
        <div style={{
          padding: 20,
          borderRadius: 12,
          background: "#8884d8",
          color: "white",
          width: 200
        }}>
          <h2>Answers</h2>
          <p style={{ fontSize: 30, margin: 0 }}>
            {answers.length}
          </p>
        </div>

        {/* Questions */}
        <div style={{
          padding: 20,
          borderRadius: 12,
          background: "#82ca9d",
          color: "white",
          width: 200
        }}>
          <h2>Questions</h2>
          <p style={{ fontSize: 30, margin: 0 }}>
            {questions.length}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import BarChartComponent from "./BarChartComponent";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);



  const [totalRequests, setTotalRequests] = useState(0);
  const [avgResponseTime, setAvgResponseTime] = useState(0);
  const [minResponseTime, setMinResponseTime] = useState(0);
  const [maxResponseTime, setMaxResponseTime] = useState(0);
  const [timelineData, setTimelineData] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (!u) {
        navigate("/");
      } else {
        setUser(u);

        const stored = JSON.parse(
          localStorage.getItem("conversations") || "[]"
        );

        let questions = 0;
        let answers = 0;

        stored.forEach((conversation: { type: string }[]) => {
          conversation.forEach((msg) => {
            if (msg.type === "question") questions++;
            if (msg.type === "answer") answers++;
          });
        });

        setTotalQuestions(questions);
        setTotalAnswers(answers);

        // Calcular métricas de API
        const metrics = JSON.parse(
          localStorage.getItem("apiMetrics") || "[]"
        );

        if (metrics.length > 0) {
          setTotalRequests(metrics.length);

          const times = metrics.map((m: any) => m.time);
          const avg = times.reduce((a: number, b: number) => a + b, 0) / times.length;
          const min = Math.min(...times);
          const max = Math.max(...times);

          setAvgResponseTime(Math.round(avg));
          setMinResponseTime(Math.round(min));
          setMaxResponseTime(Math.round(max));

          // Timeline dos últimos 10 pedidos
          const timeline = metrics.slice(-10).map((m: any, i: number) => ({
            id: i + 1,
            time: Math.round(m.time),
            timestamp: new Date(m.timestamp).toLocaleTimeString()
          }));
          setTimelineData(timeline);
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) return null;

  const chartData = [
    {
      name: "Total",
      questions: totalQuestions,
      answers: totalAnswers,
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Dashboard</h1>

      {/* Métricas em Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "40px"
      }}>
        <div style={{
          background: "var(--accent-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <h3>Requisições Totais</h3>
          <p style={{ fontSize: "2rem", margin: "10px 0" }}>{totalRequests}</p>
        </div>

        <div style={{
          background: "var(--accent-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <h3>Tempo Médio (ms)</h3>
          <p style={{ fontSize: "2rem", margin: "10px 0" }}>{avgResponseTime}</p>
        </div>

        <div style={{
          background: "var(--accent-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <h3>Tempo Mínimo (ms)</h3>
          <p style={{ fontSize: "2rem", margin: "10px 0" }}>{minResponseTime}</p>
        </div>

        <div style={{
          background: "var(--accent-color)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <h3>Tempo Máximo (ms)</h3>
          <p style={{ fontSize: "2rem", margin: "10px 0" }}>{maxResponseTime}</p>
        </div>
      </div>

      {/* Gráfico de Perguntas/Respostas */}
      <h2>Perguntas vs Respostas</h2>
      <BarChartComponent data={chartData} />

      {/* Gráfico de Timeline */}
      {timelineData.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h2>Timeline de Requisições (Últimos 10)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="id" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}ms`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#8884d8"
                name="Tempo de Resposta (ms)"
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

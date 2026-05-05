import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../css/login.css";

function Login () {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const hadleLogin=async(e:React.FormEvent)=>{
        e.preventDefault();

        setLoading(true);
        setError("");

        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("User logged in successefuly");

            navigate("/gemini");

        }catch(err){
            console.log(err);
            setError("Email ou password inválidos");
        }

        setLoading(false);
    }
    const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered");

    navigate("/gemini");
  } catch (err) {
    setError("Erro ao registar utilizador");
  }

  setLoading(false);
};

  return (
    <form onSubmit={hadleLogin}>
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} id="email" placeholder="Email"/>

        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} id="password" placeholder="Password"/>

        {error && <p style={{color:"red"}}>{error}</p>}

        <button type="submit" disabled={loading}>
            {loading ? "A entrar..." : "Login"}
        </button>
        <button
  type="button"onClick={handleRegister}disabled={loading}
>
  Registar
</button>
    </form>
  );
  
}

export default Login;
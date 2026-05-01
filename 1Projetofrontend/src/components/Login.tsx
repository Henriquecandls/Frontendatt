import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login () {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const navigate = useNavigate();

    const hadleLogin=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
        
        await signInWithEmailAndPassword(auth,email,password);
        console.log("User logged in successefuly");

        navigate("/gemini");

        }catch(error){
            console.log(error);
        }
    }

  return (
    <form onSubmit={hadleLogin}>
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} id="email" placeholder="Email"/>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} id="password" placeholder="Password"/>
        <button type="submit">Login</button>
    </form>
  );
}

export default Login;
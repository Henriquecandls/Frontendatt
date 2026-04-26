import { useEffect, useState, useRef } from "react";
import axios from "axios";
import OutputComponent from "./components/OutputComponent";
import "./custom.css";

function App() {
  const [output, setOutput] = useState([]);
  let loading = useRef(true);

  useEffect(() => {
    loading.current = true;
    axios.get("http://localhost:3000/users").then((response) => {
      setOutput(response.data);
    });
    loading.current = false;
  }, []);

  return <OutputComponent users={output} info={loading.current} />;
}

export default App;

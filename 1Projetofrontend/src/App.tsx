import { useEffect, useState, useRef } from "react";
import axios from "axios";
import OutputComponent from "./components/OutputComponent";
import Header from "./components/Header";



function App() {
  const [output, setOutput] = useState([]);
  const loading = useRef(true);

  useEffect(() => {
    loading.current = true;

    axios.get("http://localhost:3000/users").then((response) => {
      setOutput(response.data);
      loading.current = false;
    });
  }, []);

  return (
    <>
      <Header />
      <OutputComponent users={output} info={loading.current} />
    </>
  );
}

export default App;
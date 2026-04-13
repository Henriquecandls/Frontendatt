import { useEffect, useState } from "react";
import axios from "axios";
import OutputComponent from "./components/OutputComponent";
function App() {
  const [output, setOutput] = useState([]);
  const[loading,setLoading]=useState(false)
let loading=useRef(true);
  useEffect(() => {
     setLoading(false);
    axios.get("http://localhost:3000/users").then((response) => {
      setOutput(response.data);
    });
    setLoading(false);
  }, []);

  return (
   <OutputComponent users={output}info={loading.current} />
  );
}

export default App;
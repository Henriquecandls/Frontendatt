import { useState } from "react";
import Button from "./components/Button";
import OperationScreen from "./components/OperationScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [input, setInput] = useState<string[]>([]);
  const [output, setOutput] = useState("");

  const handleKeyPress = (data: string) => {
    setInput([...input, data]);
  };

  const handleCalculation = () => {
    //1:fazer a conta
    try {
      const result = eval(input.join(""));
    } catch {
      setOutput("A operacao nao e suportada");
    }
    //2: reset da variavel input
    setInput([]);
    //3:associar a uma variavel de estado
    setOutput(result);
    console.log(result);
  };

  return (
    <>
      <div>Introduce operation</div>
      <OperationScreen onKeyPress={handleKeyPress} />
      <br />
      User input is: {input}
      <br />
      <ResultScreen result={output} />
      <br />
      <Button message="Calculate" onClick={handleCalculation} />
    </>
  );
}
export default App;
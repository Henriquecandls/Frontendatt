import { ThemeContext } from "./ThemeContext";
import Form from "./Form";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

export default App;
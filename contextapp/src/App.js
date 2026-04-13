import { useContext, createContext, useState } from "react";

const GlobalState = createContext(null);

function ChildToggle() {
  const { toogle, setIsToogle } = useContext(GlobalState);

  return (
    <button onClick={() => setIsToogle(!toogle)}>
      Toggle ON/OFF
    </button>
  );
}

function ChildDisplay() {
  const { toogle,setIsToogle } = useContext(GlobalState);

  return (
    <p>
      the current state of the toggle is : {toogle ? "ON" : "OFF"}
    </p>
  );
}

function App() {
  const [toogle, setIsToogle] = useState(false);

  return (

    <div>
      <GlobalState.Provider value={{ toogle, setIsToogle }}>
        <h1>Parent component for provider</h1>
        <ChildToggle />
        <ChildDisplay />
      </GlobalState.Provider>
    </div>

  );
}

export default App;
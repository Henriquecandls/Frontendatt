import Alert from "./components/Alert";
import React, { use, useState, type ReactNode } from "react";

function App() {
  //state variable
  const [logs, setlogs] = useState<string []>([]);

  //Handler for selection event
  const onSelectItem = (data: string) => {
    console.log("Item selected",data);
    setlogs([...logs, data]);
  };

  return (
    <>
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>Componentes</h1>
          <Alert onSelectItem={onSelectItem} id="secção de alerta 1">
          <div>
            <h3>Alerta 1</h3> 
          </div>
          </Alert>
          <Alert onSelectItem={onSelectItem} id="secção de alerta 2">
          <div>
            <h3>Alerta 2</h3> 
          </div>
          </Alert>
        </div>
        <div className="col">
          <div>Logs de operação</div>
          <div>User clicou em {logs}</div>
          <div></div>
        </div>

      </div>
    </div>

    </>
  );
}

export default App;
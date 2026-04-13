import React from "react";
import ListGroupWithProps from "./components/ListGroupWithProps";
import Alert from "./alert";

function App() {
  return (
    <div>
      
      <Alert>
        <table>
          <tbody>
            <tr>
              <td>TESTE 1</td>
              <td>TESTE 2</td>
            </tr>
          </tbody>
        </table>
      </Alert>

      {/* Alerts simples com texto */}
      <Alert children="Olá! Este é um alerta 1." />
      <Alert children="Olá! Este é um alerta 2." />
      <Alert children="Olá! Este é um alerta 3." />
    </div>
  );
}

export default App;
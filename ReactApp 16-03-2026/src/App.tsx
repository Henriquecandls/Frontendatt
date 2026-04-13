import Button from "./components/Button";

function App() {
  return (
    <Button style="btn-primary">
      <h1>Enviar</h1>
      <button type="button" className="btn close-button" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </Button>
  );
}

export default App;

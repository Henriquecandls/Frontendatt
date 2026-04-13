import { useState } from "react";

function InputText() {
  const [input, checkInput] = useState("");

  return (
    <>
      <input
        id="inputField"
        type="text"
        className="form-control"
        onKeyUp={(event) => checkInput(event.currentTarget.value)}
      />
      <div className="alert">{input === "Eduardo" ? "OK" : "Inválido"}</div>
    </>
  );
}

export default InputText;

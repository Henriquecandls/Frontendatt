import React, { useState, type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  style?: string;
}

function Button({ children, style }: ButtonProps) {
  const [clicked, setClicked] = useState(false);

  function handleCloseAlert(closed: boolean) {
    setClicked(closed);
  }

  return (
    <>
      <button
        type="button"
        className={`btn ${style || "btn-info"}`}
        onClick={() => setClicked(!clicked)}
      >
        {children}
      </button>

      {clicked ? <AlertMessage onCloseAlert={handleCloseAlert} /> : null}
    </>
  );
}

export default Button;
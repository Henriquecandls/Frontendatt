import React, { useState, type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  handSelectionItem: (item: string) => void;
}

function Alert({ children, handSelectionItem }: AlertProps) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const text = (event.target as HTMLDivElement).innerText;
    setSelectedItem(text);
    handSelectionItem(text); // chama a função passada por props
  };

  return (
    <>
      <div
        className="alert alert-primary"
        role="alert"
        onClick={handleClick}style={{ cursor: "pointer" }}
      >
        {children}
      </div>
      <div>Selecionado: {selectedItem}</div>
    </>
  );
}

export default Alert;
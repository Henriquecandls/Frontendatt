import React, { use, useState, type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onSelectItem: (item: string) => void;
  id: string;
}

function Alert({ children, onSelectItem, id}: AlertProps) {
  //const [selectedItem, setSelectedItem] = useState("");
  const [selectStyle, setSelectStyle] = useState(true);

  return (
    <>
      <div
        className={selectStyle ? "alert alert-primary" : "alert alert-danger"}
        role="alert"
        onClick={() => {
          setSelectStyle(!selectStyle);
          onSelectItem(id);
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Alert;

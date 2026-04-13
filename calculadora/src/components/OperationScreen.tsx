import React from "react";

interface OperationScreenProps {
  onKeyPress: (key: string) => void;
}

const OperationScreen = ({ onKeyPress }: OperationScreenProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter operation"
        onKeyUp={(event) => onKeyPress(event.key)}
      />
    </div>
  );
};

export default OperationScreen;
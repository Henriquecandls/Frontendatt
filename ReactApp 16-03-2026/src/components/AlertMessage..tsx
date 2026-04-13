import React from "react";

interface AlertMessageProps {
  onCloseAlert: (closed: boolean) => void;
}

const AlertMessage = ({ onCloseAlert }: AlertMessageProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      Alerta por ter clicado!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => onCloseAlert(true)}
      ></button>
    </div>
  );
};

export default AlertMessage;
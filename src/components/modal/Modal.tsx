import { FC, ReactNode } from "react";
import { Button } from "../button";

import "./Modal.css";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <Button onClick={onClose} variant="secondary">
            X
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export { Modal };

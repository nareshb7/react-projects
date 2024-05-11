import { Button } from "common/Components";
import React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  children: JSX.Element;
  title: string;
}

const Modal = ({ isOpen, onClose, children, onSave, title }: ModalProps) => {
  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return isOpen ? (
    <div className="modal-overlay" onClick={handleOnClose}>
      <div className="modal">
        <Button title="Close" className="close-btn" onClick={onClose} />
        <div className="header">
          <h1 className="font-bold">{title} </h1>
        </div>
        <hr />
        <div className="body">{children}</div>
        <hr />
        <div className="footer">
          <div className="footer-btns">
            <Button title="Save" onClick={onSave} />
            <Button title="Cancel" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;

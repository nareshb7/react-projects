import React, { useState } from "react";
import "./styles.scss";
import ModalComonent from "./components/Modal";
import { Button } from "common/Components";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleOnSave = () => {
    setIsOpen(false);
  };
  return (
    <div className="modal">
      <div className="container mx-auto section">
        <h1 className="font-bold">Modal</h1>
        <div>
          <Button onClick={handleOpenModal} title="Open Modal" />
        </div>
        <ModalComonent
          isOpen={isOpen}
          onClose={handleOnClose}
          onSave={handleOnSave}
          title="Testing Modal"
        >
          <div style={{ height: "600px" }}>
            <h1>MODAl OPENED</h1>
          </div>
        </ModalComonent>
      </div>
    </div>
  );
};
export default Modal;

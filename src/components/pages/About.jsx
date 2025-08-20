import React, { useState } from "react";
import "./modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}

function ModalApp() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Modal Example</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3>Hello from Modal!</h3>
        <p>This is your modal content.</p>
      </Modal>
    </div>
  );
}

export default ModalApp;

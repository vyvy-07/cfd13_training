import React from "react";
import { useAuthen } from "../AuthenContext";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const FormModal = () => {
  const { isAuthenModalOpen, closeAuthModal } = useAuthen();
  return (
    <>
      <div className={`modal modallogin ${isAuthenModalOpen ? "open" : ""}`}>
        <div className="modal__wrapper">
          <div className="modal__wrapper-close" onClick={closeAuthModal}>
            <img src="/img/close_icon.svg" alt="CFD Register" />
          </div>
          <LoginModal />
          <RegisterModal />
        </div>
        <div className="modal__overlay" onClick={closeAuthModal} />
      </div>
    </>
  );
};

export default FormModal;

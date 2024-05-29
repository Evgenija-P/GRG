import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import useScrollBlock from "../hooks/useScrollBlock";
import { Cross } from "../icons/iconsComponents";
const modalRoot = document.querySelector("#modal-root");

const Overlay = ({ children, clickFn }) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  const closeModal = useCallback(() => {
    clickFn();
    allowScroll();
  }, [clickFn, allowScroll]);

  useEffect(() => {
    blockScroll();
    function keyDown(e) {
      if (e.code !== "Escape") {
        return;
      }
      closeModal();
    }
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [blockScroll, closeModal]);

  function handleOverlayClick(e) {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      closeModal();
    }
    return;
  }

  return createPortal(
    <div
      className={`fixed inset-0 w-screen h-screen flex items-center justify-center bg-[rgb(0,0,0,0.35)] z-[100] top-0 left-0 backdrop-blur`}
      onClick={handleOverlayClick}
    >
      <button
        className="w-6 h-6 flex items-center justify-center rounded-full absolute top-2 right-2 bg-[rgb(0,0,0,0.55)]bg-white"
        onClick={closeModal}
      >
        <Cross />
      </button>
      <div className="w-[95%] h-[95%] z-100">{children}</div>
    </div>,
    modalRoot
  );
};

Overlay.propTypes = {
  clickFn: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Overlay;

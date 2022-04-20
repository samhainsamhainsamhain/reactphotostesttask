import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

function Modal(props: ModalProps) {
  const modalWindow = (
    <>
      <div className={classes.backdrop} onClick={props.hide} />
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h3 className={classes.modalTitle}>{props.headerText}</h3>
            <button className={classes.modalClose} onClick={props.hide}>
              X
            </button>
          </div>
          <div className={classes.modalContent}>{props.modalContent}</div>
        </div>
      </div>
    </>
  );

  return props.isShown
    ? ReactDOM.createPortal(modalWindow, document.body)
    : null;
}

export default Modal;

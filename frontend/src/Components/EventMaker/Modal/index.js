import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../Form';
import FocusTrap from 'focus-trap-react';
import axios from 'axios';

// const addEvent = async (vendorId, title, start, end, color) => {
//   try {
//     const res = await axios.post('/calendar/' + userId, {
//       _id : userId,
//       user : userId,
//       vendor : vendorId,
//       text : title,
//       start_date : start,
//       end_date : end,
//       color : color
//     });
//     console.log(res);
//   } catch (err) {
//       console.log(err + ' | Failed to add new event');
//   }
// };


export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <Form onSubmit={
              onSubmit} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;



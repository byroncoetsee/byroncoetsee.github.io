import React from 'react';
import '../../App.css';

const SyncModal = ({ handleClose, show, children }) => {

  return (
    <div className={show == 1 ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="container">
          {children}
          <div className="row justify-content-center">
            <button className="btn btn-success" onClick={handleClose}>Close</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SyncModal

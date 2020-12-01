import React from "react";
import "../css/modal.css";

export default function ModalDelete(props) {
  return (
    <div className="Modal">
      <div className="Modal_container"></div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Eliminar Badge</h5>
            <button
              type="button"
              className="close"
              onClick={props.handleCloseModal}
             
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Está seguro que desea eliminar a este asistente?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              
              onClick={props.handleCloseModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary btn-danger" onClick={props.borrarBadge}>
             Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

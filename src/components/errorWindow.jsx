import React from 'react';

function ErrorWindow(props) {
  return (
    <div
      style={{
        borderStyle: 'solid',
        width: '300px',
        margin: 'auto',
        position: 'absolute',
        display: props.showError,
      }}
      className="modal-content"
    >
      <span onClick={props.onHideError} id="close" className="close">
        &times;
      </span>
      <p>404 {props.errorMessage}</p>
    </div>
  );
}

export default ErrorWindow;

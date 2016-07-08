import React from 'react'
export const Modal = (props) =>
  <div className="modal-wrapper">
    <div className="modal">
      {props.children}
    </div>
  </div>


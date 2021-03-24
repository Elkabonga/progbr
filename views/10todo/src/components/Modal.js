import React from "react";
import Card from "./Cards";

function Modal(props) {
  return (
    <div
      id="modal"
      onClick={props.onHideModal}
      className={props.show ? "modal" : "modal hide"}
    >
      <Card className="cardModal">{props.children}</Card>
    </div>
  );
}

export default Modal;

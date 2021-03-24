import React from "react";
import Cards from "./Cards";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/on.png" alt="done" />;
  } else {
    return <img src="./assets/off.png" alt="undone" />;
  }
}

function ListItem(props) {
  return (
    <li>
      <Cards className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div className="containerButton">
          <button
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button
            onClick={() => {
              props.onItemDeleted(props.item);
            }}
          >
            <img src="./assets/bin.png" alt="delete" />
          </button>
        </div>
      </Cards>
    </li>
  );
}

export default ListItem;

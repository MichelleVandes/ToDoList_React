import React from "react";
import "../styles/Todo.css";
import trash from "../images/trash-outline.svg"
import close from "../images/checkmark.svg";

function Todo({ id, details, onCheck, onDelete }) {
  let myClass = "todo-li";
  if (details.realise) {
    myClass = "todo-li-realise";
  }

  return (
    <li className={myClass}>
      {details.tache}
      <div className="todo-btn">
        <button onClick={() => onCheck(details.id)}>
          <img src={close} alt="close" height="15" width="15" />
        </button>

        <button onClick={() => onDelete(details.id)}>
          <img src={trash} alt="poubelle" height="15" width="15" />
        </button>
      </div>
    </li>
  );
}


export default Todo;

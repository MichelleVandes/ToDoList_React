import React from "react";
import "../styles/Todo.css";
import trash from "../images/trash-outline.svg"
import close from "../images/close.svg";

function Todo({ id, details, onThrough, onDelete }) {
  let myClass = "todo-li";
  if (details.realise) {
    myClass = "todo-li-realise";
  }


  return (
    <li className={myClass}>
      {details.tache}
      <div className="todo-btn">
        <button onClick={() => onThrough(details.id)}>
          <img src={close} alt="close" height="15" width="15" />
        </button>

        <button onClick={() => onDelete(details.id)}>
          <img src={trash} alt="poubelle" height="15" width="15" />
        </button>
      </div>
    </li>
  );
}

// const Todo = ({ details, onDelete }) => (

//   <li
//   className="todo-li">
//     {details.tache}{" "}
//     <button onClick={() => onDelete(details.id)}
//     className="todo-btn">
//       <img src={trash} alt="poubelle" height="20" width="20" />
//     </button>
//   </li>
// );
export default Todo;

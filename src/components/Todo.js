import React from "react";
import "../styles/Todo.css"
import trash from "../images/trash-outline.svg" 


const Todo = ({ details, onDelete }) => (
  <li
  className="todo-li">
    {details.tache}{" "}
    <button onClick={() => onDelete(details.id)}
    className="todo-btn">
      <img src={trash} alt="poubelle" height="20" width="20" />
    </button>
  </li>
);
export default Todo;


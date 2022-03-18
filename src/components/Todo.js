import React from "react";
import "../styles/Todo.css"
import trash from "../images/trash-outline.svg" 


const Todo = ({ details, onDelete }) => (
  <li
  className="todo-li">
    {details.tache}{" "}
    <button onClick={() => onDelete(details.id)}
    className="todo-btn">
      <img src="trash" alt="poubelle" height="80" width="100" />
    </button>
  </li>
);
export default Todo;


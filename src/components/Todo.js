import React from "react";
import trash from "../images/" 


const Todo = ({ details, onDelete }) => (
  <li>
    {details.tache} <button onClick={() => onDelete(details.id)}>X</button>
    <img src="trash" alt="poubelle" />
  </li>
);
export default Todo;


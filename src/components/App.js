import "../styles/App.css";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, tache: "Bonjour monde" },
    { id: 2, tache: "Hello word" },
  ]);

  const handleDelete = (id) => {
    const majTodo = [...todo];
    const index = majTodo.findIndex((todo) => todo.id === id);

    majTodo.splice(index, 1);

    setTodo(majTodo);
  };

  const handleAdd = (newTodo) => {
    console.log("newTodo", newTodo);
    const majTodo = [...todo];
    majTodo.push(newTodo);
    console.log("majTodo", majTodo);

    setTodo(majTodo);
  };

  const title = "Liste des tâches à faire";

  return (
    <div>
      <h2>{title}</h2>
      <TodoForm addNewTache={handleAdd} />
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} details={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;

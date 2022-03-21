import "../styles/App.css";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  //  const initTodo = [
  //    { id: 1, tache: "Bonjour monde" },
  //    { id: 2, tache: "Hello word" },
  //  ];
  let initTodo = [];

  if (
    localStorage.getItem("myTodolist") &&
    Array.isArray(JSON.parse(localStorage.getItem("myTodolist")))
  ) {
    initTodo = JSON.parse(localStorage.getItem("myTodolist"));
    //  console.log("j'utilise le localStorage")
  }

  const [todo, setTodo] = useState(initTodo);

  const title = "Liste des tâches à faire";

  // -> Suppression tache :
  const handleDelete = (id) => {
    const majTodo = [...todo];
    const index = majTodo.findIndex((todo) => todo.id === id);

    majTodo.splice(index, 1);
    setTodo(majTodo);
    localSave(majTodo);
  };

  // -> Ajout tache :
  const handleAdd = (newTodo) => {
    // console.log("newTodo", newTodo);
    const majTodo = [...todo];
    majTodo.push(newTodo);


    setTodo(majTodo);
    localSave(majTodo);
  };
  // -> Tagger comme réalisé :
  const handleThrough = (id) => {
   const majTodo = [...todo];
   const index = majTodo.findIndex((todo) => todo.id === id);
    if (majTodo[index].realise) {
      majTodo[index].realise = false;
    } else {
      majTodo[index].realise = true;
    }
       setTodo(majTodo);
       localSave(majTodo);
  };

  const localSave = (majTodo) => {
    localStorage.removeItem("myTodolist");
    localStorage.setItem("myTodolist", JSON.stringify(majTodo));
  };

  return (
    <div className="container">
      <h2 className="app-h2">{title}</h2>
      <div>
        <TodoForm addNewTache={handleAdd} />
        <div className="app-div-ul">
          <ul className="app-ul">
            {todo.map((todo) => (
              <Todo 
              key={todo.id} 
              details={todo} 
              onThrough={handleThrough}
              onDelete={handleDelete} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

import "../styles/App.css";
import { useState } from "react";



function App() {

  const [todo, setTodolist] = useState([
        { id: 1, tache: "Bonjour monde"},
        { id: 2, tache: "Hello word"}
      ]);



function handleSubmit(event) {
  alert("handleSubmit");
 //const newTodo ;
  const updatedTodolist = [...todo];
  updatedTodolist.push({id: new Date().getTime, tache: "test new todo"})
  setTodolist(updatedTodolist);
}

const handleChange = (event) => {
  setTodolist(event.currentTarget.value);
  console.log("todo", todo)
}

  function handleDelete() {
    alert("Delete Entry");
    // const updatedTodolist =[...todolist];
    //const index = updatedTodolist.findIndex(todo => todo.id === id);

    //updatedTodolist.splice(index, 1);

    // setTodolist(updatedTodolist);
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="App-form">
        <input
          //value={newTodo}
          type="text"
          name="my_input"
          placeholder="Nouvelle tâche"
          size="30"
        />
        <button> Ajouter</button>
      </form>
      <ul>
        {todo.map((item) => (
          <li>
            {item.tache} <button>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

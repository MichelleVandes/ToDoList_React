import "../styles/App.css";
import { useState } from "react";
import {TodoForm} from "./TodoForm"

// let toDoList = [
//   { id: 1, Item: "Bonjour monde"},
//   { id: 2, Item: "Hello word"}
// ];

function App() {

  const [todolist, setTodolist] = useState([
  { id: 1, Item: "Bonjour monde"},
  { id: 2, Item: "Hello word"}
]);

  // let listUl = list.map((Item) => (
  //   <li key={Item.id} className="App-li">
  //     {Item.toDoItem}
  //     <button onClick={() => deleteEntry(Item.id)}>X</button>
  //   </li>
  // ));

  // const addEntry = (e) => {
  //   e.preventDefault();
  //   console.log(e.target["my_input"].value);
  //   var aa = toDoList.length + 1;
  //  const bb = { id: aa, toDoItem: e.target["my_input"].value, toDoIt: true };
  //   toDoList.push(bb);
  //   console.log(toDoList.values);
  // };
function handleAdd() {
  alert("add Entry");
  // const updatedTodolist = [...todolist];
   //updatedTodolist.push(todo)
}

  function handleDelete() {
    alert("Delete Entry");
    const updatedTodolist =[...todolist];
    //const index = updatedTodolist.findIndex(todo => todo.id === id);

    //updatedTodolist.splice(index, 1);

    setTodolist(updatedTodolist);
  }


  return (
    <div>
      {/* <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(list)}>Cliquez ici</button>

      <form className="App-form">
        <input
          type="text"
          name="my_input"
          placeholder="Nouvelle tache"
          size="30"
        />
        <button onClick={() => addList(list.push)} 

        type="submit">
          Ajouter
        </button>
      </form> */}
<TodoForm onTodoAdd={handleAdd}/>
      <ul>
        {todolist.map(todo => (
          <todo
          key={todo.id}
          detail={todo.item}
          onDelete={handleDelete}
        />) )}
        </ul>
    </div>
  );
}

export default App;

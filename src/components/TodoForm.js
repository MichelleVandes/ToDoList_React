import { useState } from "react"

const TodoForm = (props) => {
const [newTodo, setNewTodo] = useState("");

const handleChange = (event) => {
   // setNewTodo({event.currentTarget.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
}
const id = new Date().getTime();
const todo = newTodo;
props.onTodoAdd({id, todo})
setNewTodo("")

return (
    <div>

      <form onSubmit={handleSubmit}
      className="App-form">
        <input
        value={newTodo}
        onChange={handleChange}
          type="text"
          name="my_input"
          placeholder="Nouvelle tâche"
          size="30"
        />
        <button > Ajouter
        </button>
      </form>

     
    </div>
  );

}
export default TodoForm;
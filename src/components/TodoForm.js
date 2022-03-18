import { useState } from "react";
import '../styles/TodoForm.css'

const TodoForm = (props) => {
  const [newTache, setnewTache] = useState("");

  const handleChange = (event) => {
    //console.log("target", event.currentTarget.value);
    setnewTache(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("newTache", newTache);

    const id = new Date().getTime();
    const tache = newTache;

    props.addNewTache({ id, tache });

    setnewTache("");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}
      className="form">
        <input
        className="add-txt"
          value={newTache}
          onChange={handleChange}
          type="text"
          placeholder="Ajouter une tâche"
        />
        <button
        className="add-btn">Confirmer</button>
      </form>
    </div>
  );
};

export default TodoForm;

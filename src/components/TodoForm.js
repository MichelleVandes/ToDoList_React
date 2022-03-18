import { useState } from "react";

const TodoForm = (props) => {
  const [newTache, setnewTache] = useState("");

  const handleChange = (event) => {
    console.log("target", event.currentTarget.value);
    setnewTache(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("newTache", newTache);

    const id = new Date().getTime();
    const tache = newTache;

    props.addNewTache({ id, tache });

    setnewTache("");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newTache}
          onChange={handleChange}
          type="text"
          placeholder="Ajouter une tâche"
        />
        <button>Confirmer</button>
      </form>
      <input type="text" />
    </div>
  );
};

export default TodoForm;

import { useState } from "react";

const TodoForm = (props) => {
  const [newTache, setnewTache] = useState("");

  const handleChange = (event) => {
    console.log("target", event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("newTache", event.currentTarget.value);

    const id = new Date().getTime();
    const item = event.currentTarget.value;

    props.addNewTache({ id, item });

    setnewTache("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          //
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

import "../styles/App.css";
import { useState } from "react";

  let toDoList = [
    { id: 1, toDoItem: "Bonjour monde", toDoIt: true },
    { id: 2, toDoItem: "Hello word", toDoIt: false },
  ];
 
function App() {
  

  let listUl = toDoList.map((Item) => (
    <li key={Item.id} className="App-li">
      {Item.toDoItem} 
      <button onClick={() => deleteEntry(Item.id)} >
        X
      </button>
    </li>
  ));

const addEntry = (e) => {
  e.preventDefault();
  console.log(e.target["my_input"].value);
  var aa = toDoList.length + 1;
  const bb = { id: aa, toDoItem: e.target["my_input"].value, toDoIt: true };
  toDoList.push(bb);
  console.log(toDoList.values);
};


function QuestionForm() {
  const [inputValue, setInputValue] = useState("Ajouter votre tâche ici");
  // const isInputErrorNull = inputValue.includes("");
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Help</button>
      {/* {isInputErrorNull && (
        <div>🔥 Veuillez saisir votre texte.</div>
      )} */}
    </div>
  );
}




function deleteEntry(id) {
  alert("Delete Entry", id);
}
  return (
    <div>
      <QuestionForm/>
      <form onSubmit={addEntry} className="App-form">
        <input
          type="text"
          name="my_input"
          placeholder="Nouvelle tache"
          size="30"
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>{listUl}</ul>
    </div>
  );
}

export default App;

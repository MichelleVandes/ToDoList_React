import "./App.css";

function App() {
  const title = "To Do List React";

  let toDoList = [
    { id: 1, toDoItem: "Bonjour monde" },
    { id: 2, toDoItem: "Hello word" }
  ];

  function AddEntry() {
    alert("this.toDoList");
    var aa = toDoList.length + 1;
    const bb = { id: aa, toDoItem: "ma nouvelle tache" };
    toDoList.push(bb);
    alert(toDoList);
  }

  const listUl = toDoList.map((Item) => (
    <li>
      {Item.toDoItem} <button>X</button>
    </li>
  ));

  function Welcome(props) {
    return <h3>Bonjour, {props.name}</h3>;
  }
  const element = <Welcome name="Moi" />;

  return (
    <div>
      <h1>{title}</h1>
  
      {element}
      <form>
        <input
          type="text"
          id="toDoAdd"
          placeholder="Nouvelle tache"
          size="30"
        />
        <button id="toDoAdd" onClick={AddEntry}>
          Comfirmer
        </button>
      </form>

      <ul>{listUl}</ul>
    </div>
  );
}

export default App;

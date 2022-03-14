const Home = () => {

const ToDoList = [
  {id: 1, toDoItem: 'Bonjour, monde'},
  {id: 2, toDoItem: 'Hello word'}
];
const listItems = ToDoList.map((toDoItem) => <li>{toDoItem}</li>);

    return (
      <div className="Home">
        <h2> A faire</h2>
       <ul>{listItems}</ul>
      </div>
    );

 
}

export default Home;
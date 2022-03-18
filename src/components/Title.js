import "../styles/Title.css";

function Title() {
  const title = "To Do List React";



  const Welcome = (props) => <h3>Bonjour, {props.name}</h3>;
  
  const element = <Welcome name="Michelle" />;

  return (
    <div className="title">
      <h1>{title}</h1>

      {element}

    </div>
  );
}

export default Title;

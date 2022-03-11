const Home = () => {

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
const posts = [
  {id: 1, title: 'Bonjour, monde', content: 'Bienvenue sur la doc de React !'},
  {id: 2, title: 'Installation', content: 'Vous pouvez installer React depuis npm.'}
];

    return (
      <div className="Home">
        <h2> A faire</h2>
        <ul>{listItems}</ul>,
      </div>
    );

 
}

export default Home;
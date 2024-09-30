/* eslint-disable eqeqeq */
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent'; // Importing MyFirstComponent
import Header from "./header"; // Importing Header
import Post from './post';
import SideMenu from './sideMenu';
import Article from './Article';
  const showCategories = true;

function App() {
  const MyArticle = ' My Article  rreprp erlerl;ler ;er;;er;l';
  const categories = ['Music', 'Sport', 'Movie', 'Tech'];
  const myCategories = categories.map((category, index) => {
    // console.log(category);
    return <h1 key={index}>{category}</h1>
  });
  return (
    <div style={{background: "black"}}>
      <ul style={{ background: "white" }}>
        {showCategories && myCategories}
      </ul>
    </div>
  );
}
export default App;

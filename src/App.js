/* eslint-disable eqeqeq */
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent'; // Importing MyFirstComponent
import Header from "./header"; // Importing Header
import Post from './post';
import SideMenu from './sideMenu';
import Article from './Article';
import MyButton from './myButton';
import MyInput from './myInput';
import { useState } from "react";
import MyForm from './myFrom';
const showCategories = true;



function App() {

  const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount((c) => {
      return c + 1;
    });
    setCount(count + 1);
    // setTimeout(() => {
    //   alert("Hello");
    //   setCount(count + 1);
    // }, 2000);

  }

  return (
    <div className="App">
      <h1>The count is: {count} </h1>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}
export default App;

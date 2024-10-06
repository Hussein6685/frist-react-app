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
  // const posts = [
  //   {
  //     id: 1,
  //     postName: 'Post 1',
  //     postBody: 'Post 1 Body'
  //   },
  //   {
  //     id: 2,
  //     postName: 'Post 2',
  //     postBody: 'Post 2 Body'
  //   },
  //   {
  //     id: 3,
  //     postName: 'Post 3',
  //     postBody: 'Post 3 Body'
  //   },
  //   {
  //     id: 4,
  //     postName: 'Post 4',
  //     postBody: 'Post 4 Body'
  //   },
  // ];
  // const postItems = posts.map((post) => {
  //   return <Post key={post.id} postName={post.postName} postBody={post.postBody} />
  // });
  // <Header />
  // const MyArticle = ' My Article  rreprp erlerl;ler ;er;;er;l';
  // const categories = ['Music', 'Sport', 'Movie', 'Tech'];
  // const myCategories = categories.map((category, index) => {
  //   // console.log(category);
  //   return <h1 key={index}>{category}</h1>
  // });
  const [devicesNameInPutValue, setDevicesNameInPutValue] = useState("");
  const [devices, setDevices] = useState(["laptop", "tablet", "phone", "PC"]);
  // const devices = ["laptop", "tablet", "phone", "PC"];
  const devicesList = devices.map((device) => {
    return <li>{device}</li>
  });
  function handleAddDevice() {
    setDevices([...devices, devicesNameInPutValue]);
    // const newDevices = [...devices];
    // newDevices.push(devicesNameInPutValue);
    // setDevices(newDevices);

    // devices.push(devicesNameInPutValue);
  }
  return (
    <div className='App' style={{ marginTop: "100px", fontSize: "30PX"}}>
      {devicesList}
      <input value={devicesNameInPutValue} onChange={(event) => { setDevicesNameInPutValue(event.target.value) }} type="text"/>
        <button onClick={handleAddDevice} >Add</button>
    </div>
  );
}
export default App;

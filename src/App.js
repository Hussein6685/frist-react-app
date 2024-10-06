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


let nextId = 5;

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
  const [devices, setDevices] = useState([
    { id: 1, name:"laptop"},
    { id: 2, name:"tablet"},
    { id: 3, name:"phone"},
    { id: 4, name:"PC"}
  ]);
  // const devices = ["laptop", "tablet", "phone", "PC"];
  const devicesList = devices.map((device) => {
    return <li
      key={device.id}>
      {device.name}
      <button
        onClick={() => { handleDeleteDevice(device.id); }}>
        Delete
      </button>

      <button
        onClick={() => { handleEditDevice(device.id); }}>
        Edit
      </button>
    </li>
  });
  function handleDeleteDevice(id) {
    // alert(id);
    const newDevices = devices.filter((device) => {
      return device.id != id;
    });
    setDevices(newDevices);
    // devices.splice(id, 1);
  }

  function handleEditDevice(id) {
    const newDevices = devices.map((device) => {
      if (device.id == id)
        {
        return { ...device, name: device.name + "0" };
      }else {
        return device;
      }
    });
    setDevices(newDevices);
    // const device = devices.find((device) => {
    //   return device.id == id;
    // });
  }

  function handleAddDevice() {
    setDevices([...devices, { id: nextId, name: devicesNameInPutValue }]);
    nextId++;
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

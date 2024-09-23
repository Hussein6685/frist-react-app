import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent'; // Importing MyFirstComponent
import Header from "./header"; // Importing Header
import Post from './post';
import SideMenu from './sideMenu';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
      {/* post & side menu container */}
      <div style={{
          display: "flex",
        width: "60%",
      }}>
        {/* post container */}
        <div style={{
          width: "70%",
        }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/* === post container === */}
        {/*  side menu container  */}
          <div style={{
            width: "30%",
          }}>
          <SideMenu />
        </div>
          {/* === side menu container === */}
        </div>
        {/* === post & side menu container === */}
      </div>
    </div>
  );
}

export default App;

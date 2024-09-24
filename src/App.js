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
  return (
    <div className="App">
      <Header/>
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
        <Post  postName="academy" postBody="my academy"/>
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
            <AppSideMenu/>
        </div>
          {/* === side menu container === */}
        </div>
        {/* === post & side menu container === */}
    </div>
    </div>
  );
}
function AppSideMenu() {
  if (showCategories == true) {
    return <SideMenu />;
  } else {
    return null;
  }


}
export default App;

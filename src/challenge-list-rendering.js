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
  const posts = [
    {
      id: 1,
      postName: 'Post 1',
      postBody: 'Post 1 Body'
    },
    {
      id: 2,
      postName: 'Post 2',
      postBody: 'Post 2 Body'
    },
    {
      id: 3,
      postName: 'Post 3',
      postBody: 'Post 3 Body'
    },
    {
      id: 4,
      postName: 'Post 4',
      postBody: 'Post 4 Body'
    },
  ]; // Array of posts
  const postItems = posts.map((post) => {
    return <Post key={post.id} postName={post.postName} postBody={post.postBody} />
  });
  <Header />
  const MyArticle = ' My Article  rreprp erlerl;ler ;er;;er;l';
  const categories = ['Music', 'Sport', 'Movie', 'Tech'];
  const myCategories = categories.map((category, index) => {
    // console.log(category);
    return <h1 key={index}>{category}</h1>
  });
  return (
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
          {postItems}
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
  );
}
export default App;

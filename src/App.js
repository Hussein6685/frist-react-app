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
import MyForm from './myFrom';
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
  // const MyArticle = ' My Article  rreprp erlerl;ler ;er;;er;l';
  // const categories = ['Music', 'Sport', 'Movie', 'Tech'];
  // const myCategories = categories.map((category, index) => {
  //   // console.log(category);
  //   return <h1 key={index}>{category}</h1>
  // });
  return (
    <div className="App" style={{ paddingTop:  "300px"}}>
    {/* <MyButton />
    <MyInput /> */}
      <MyForm />
    </div>

  );
}
export default App;

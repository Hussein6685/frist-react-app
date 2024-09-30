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

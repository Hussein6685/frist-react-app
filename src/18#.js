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


    function AppSideMenu() {
  if (showCategories == true) {
    return <SideMenu />;
  } else {
    return null;
  }


}

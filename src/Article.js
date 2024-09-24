function Article({name, email , content = " no content", children}) {
    // console.log("the are", louy);
    // const name = louy.name;
    // const email = louy.email;
    return (
        <article style={{
            backgroundColor: "teal",
            color: "white",
            boxShadow: "0px 5px 13px rgba(0,0,0,0.4)",
            margin: "10px",
        }}>
            <h1>Welcome to My React App</h1>
            <h1>{ name}</h1>
            <h3 >{ email }</h3>
            <h3>{2024}</h3>
            <hr/>
            <p>lorm  vel erat my name is hussein.
            </p>
            <p>{children}</p>
        </article>
    );
}
export default  Article

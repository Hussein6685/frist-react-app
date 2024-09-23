function Header() {
    return (
        <header style={{
            width: "100%",
            backgroundColor: "teal",
            height: "200px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
            boxShadow: "0px 5px 13px rgba(0,0,0,0.4)",
            alignItems: "center",
            textAlign: "center"
        }}>
            <h1>Welcome to My React App</h1>
        </header>
    );
}

export default Header;

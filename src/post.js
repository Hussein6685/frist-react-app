function Post  ({postName = "no name", postBody = "no body"}) {
    return (
        <div style={{
            border: "5px solid teal",
            margin: "25px",
            padding: "10px",
        }}>
            <h1>{postName}</h1>
            <hr/>
            <p>{postBody}</p>
        </div>
    );
};

export default Post;

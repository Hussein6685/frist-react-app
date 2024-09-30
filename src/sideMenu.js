import TagButton from "./TagButton";
function sideMenu() {
    const categories =
        [
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
                postBody: 'Post 4 Body',
                c: (
                    <div>
                        <h1>My Article</h1>
                        <p>My Article is about the importance of learning</p>
                    </div>
                ),
            },
        ]; // Array of posts
    const postItems = categories.map((post) => {
        return <TagButton key={post.id} title={post.postBody}>
            {post.c}
            </TagButton>
    });
    return (
            <div style={{
                    // margin: "25px",
                    border: "5px solid teal",
            }}>
            {postItems}
            {/* <TagButton title="lest title" >
                <div>
                    <span>:&</span>
                <h1>My Article</h1>
                <p>My Article is about the importance of learning</p>
                </div>
            </TagButton>
            <TagButton title="first title" >
                <div>
                    <img style={
                        {
                            width: "50px",
                        }
                    } src="https://via.placeholder.com/150" alt="placeholder"/>
                </div>
            </TagButton>
            <TagButton title="most view" />
            <TagButton title="special" >
                <div>
                    <h1>your Article</h1>
                    <p>My Article </p>
                </div>
            </TagButton>
            <TagButton title="best titles" />
            <TagButton title="most title"/> */}
        </div>
    );
};

export default sideMenu;

import TagButton from "./TagButton";
function sideMenu() {
    return (
            <div style={{
                margin: "25px",
                border: "5px solid teal",
        }}>
            <TagButton title="lest title" >
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
            <TagButton title="most title"/>
        </div>
    );
};

export default sideMenu;

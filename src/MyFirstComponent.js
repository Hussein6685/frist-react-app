/* eslint-disable jsx-a11y/heading-has-content */
import "./MyFirstComponent.css";
import "./newFile.js"
export default function MyFirstComponent() {
    const x = "10";
    const person = {
        name: "Hussein",
        age: "25",
        emil: "hussein@gmil.com" ,
    };
    const elmStyle = {
        color: "blue",
        backgroundColor: "black",
        fontSize: "40px",
    };
    return (
        <div>
            <p style={elmStyle}>{person.name} This is my first component. {x}</p>
            <h3 >My name is {person.name}</h3>
            <h3 >My age is {person.age}</h3>
            <h3 >My email is {person.emil}</h3>
            <button className={"colorBlack"} onClick={sayHallo}>Say</button>
            <h1 className={person.age >  "20" ? "active" : "redBg"}> check age</h1>
        </div>
    );
}

function sayHallo () {
    return "Hello";
}


import {useState} from 'react';

let name = "Hussein";
function MyButton() {
    console.log("render");
    const [name, setName] = useState("Hussein", "Ali");
    // console.log(state);
    // const value = state[0];
    // console.log(value);
    // const setValue = state[1];
    // console.log(setValue);
    function buttonClicked() {
        if (name === "Ali") {
            setName("Hussein");
        } else {
            setName("Ali");
        }
        // setValue("Ali"); // This will trigger a re-render
    }
    return (
        <div>
        <button onClick={buttonClicked}>
            Click me
            </button>
            <h1>{ name }</h1>
        </div>
    );
}
// function buttonClicked() {
    //     alert("Button was clicked!");
//     console.log("Button was clicked!");
// }
export default MyButton;

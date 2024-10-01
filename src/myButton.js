
let name = "Hussein";
function MyButton() {

    function buttonClicked() {
        name = "Hussein";
        alert("Button was clicked!");

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

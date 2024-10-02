import { useState } from "react";
export default function MyInput() {
    const [name, setName] = useState("");
    function handleInputChange(event) {
        setName(event.target.value);

        // alert("Input was changed!");
        // console.log(event.target.value);
    }
    // console.log("render");
    // const [name, setName] = useState("Hussein");
    // function inputChanged(event) {
    //     setName(event.target.value);
    // }
    return (
        <div>
            <label>
                your name:
            </label>
            <input
                value={name}
                onChange= {handleInputChange}
            />
            {/* <input type="text" onChange={inputChanged} value={name} />
            <h1>{ name }</h1> */}
        </div>
    );
}

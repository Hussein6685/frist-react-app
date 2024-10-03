import { useState } from "react";
export default function MyForm() {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [formInput, setFormInput] = useState({name: "", email: "" , age: ""});
    return (
        <form
            onSubmit={(event) => {

                event.preventDefault();
                // console.log(nameInput , emailInput);
            // const formData = {
            //     name: nameInput,
            //     email: emailInput
            // };
            }}>
            <label>
                your name:
            </label>
            <input
                value={formInput.name}
                onChange={(event) => {
                setFormInput({...formInput, name: event.target.value});

                }} />
            <hr>
            </hr>
            <label>
                your email:
            </label>
            <input
                value={formInput.email}
                onChange={(event) => {
                    // const newFormInput = { ...formInput };
                    // newFormInput.email = event.target.value;
                    // setFormInput(newFormInput);
                setFormInput({...formInput, email: event.target.value});
                }}
            />
            <hr></hr>
            <label>
                your Age:
            </label>
            <input
                value={formInput.age}
                onChange={(event) => {
                    setFormInput({ ...formInput, age: event.target.value });
                }} />
            <hr>
            </hr>


            <button type="submit">Submit</button>
        </form>
    );
}

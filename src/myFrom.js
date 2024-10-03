import { useState } from "react";
export default function MyForm() {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        age: "",
        generalInfo: "",
        isStudent: true,
        country: "",
        status: ""
    });
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

            <hr>
            </hr>

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

            <label>Are you student</label>
            <input type="checkbox"
                checked={formInput.isStudent}
                value={formInput.age}
                onChange={(event) => {
                    setFormInput({...formInput, isStudent: event.target.checked})
                    // if (
                    // event.target.checked == "on"
                    // )
                    // {

                    //     setFormInput({ ...formInput, isStudent: true });
                    // } else {
                    //     setFormInput({ ...formInput, isStudent: false });

                    //     }
                }}
            />

            <hr>
            </hr>

            <select value={formInput.country} onChange={(event) => {
                setFormInput({ ...formInput, country: event.target.value });
            }}
            >
                <option>KSA</option>
                <option>EGP</option>
                <option>Syria</option>
            </select>

            <hr></hr>
            <div>
                <input
                    value="student"
                    type="radio"
                    name="status"
                    checked={formInput.status == "student"}
                    onChange={(event) => {
                        setFormInput({ ...formInput, status: "student" });
                    }}
                    />
                Student
                <input
                    value="teacher"
                    type="radio"
                    name="status"
                    checked={formInput.status == "teacher"}
                onChange={(event) => {
                    setFormInput({ ...formInput, status: "teacher" });
                }}
                />
                Teacher
            </div>
            <hr>
            </hr>

            <label>
                General Info
            </label>
            <textarea onChange={(event) => {
                setFormInput({ ...formInput, generalInfo: event.target.value });
            }}>
                {formInput.generalInfo}
            </textarea>

            <button type="submit">Submit</button>
        </form>
    );
}

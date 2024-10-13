import "./FormStyles.css";
import Modal from "./modal";
import { useState } from "react";

function LoanForm() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loanInput, setLoanInput] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: "false",
        salaryRange: ""
    });
    function handleFormSubmit(event) {
        event.preventDefault();
        setErrorMessage(null);
        if (loanInput.age < 18 || loanInput.age > 100) {
            setErrorMessage("The age is not allowed");
        } else if (loanInput.phoneNumber.length < 10 || loanInput.phoneNumber.length > 12) {
            setErrorMessage("The phone number format is not Incorrect");
        }
        setShowModal(true);
    }
    const btnIsDisabled =
        loanInput.name == "" ||
        loanInput.phone == "" ||
        loanInput.age == "";
    // let btnClasses = "";
    // if (btnIsDisabled) {
    //     btnClasses = "disabled";
    // } else {
    //     btnClasses = "";
    // }

    function handleDivCLick() {
        if (showModal) {
            setShowModal(false);
        }
    }
    return (
        <div
            onClick={handleDivCLick}
            className="flex"
            style={{ flexDirection: "column" }}>
            <form>
                <h1>Requesting A Loan</h1>
                <hr></hr>

                <labe>Name</labe>
                <input type="text" value={loanInput.name} onChange={(  event ) => {
                    setLoanInput({ ...loanInput, name: event.target.value });
                }}/>

                <label>Phone Number</label>
                <input type="number" value={loanInput.phoneNumber} onChange={(  event ) => {
                    setLoanInput({ ...loanInput, phoneNumber: event.target.value });
                }}/>

                <label>Age</label>
                <input type="number" value={loanInput.age} onChange={(  event ) => {
                    setLoanInput({ ...loanInput, age: event.target.value });
                }}/>

                <label style={{marginTop: "30px"}}>Are You An Employee</label>
                <input type="checkbox" checked={loanInput.isEmployee} onChange={(event) => {
                    setLoanInput({ ...loanInput, startDate: event.target.checked });
                }}/>

                <labe >Salary</labe>
                <select value={loanInput.salaryRange} onChange={(  event ) => {
                    setLoanInput({ ...loanInput, salaryRange: event.target.value });
                }}>
                    <option>less then 5000$</option>
                    <option>between 500$ and 2000$</option>
                    <option>above 2000$ </option>
                </select>

                <button
                    // onClick={(event) => {
                    //     event.preventDefault();
                    //     // setShowModal(true);
                    // }}
                    // disabled={loanInput.loanAmount == null || loanInput.interestRate == null || loanInput.loanTerm == null || loanInput.startDate == null || loanInput.paymentFrequency == null}

                    // onClick={(event) => {
                    //     event.preventDefault();
                    //     setBtnDisabled(true);
                    // }}
                    // className={btnClasses}
                    className={btnIsDisabled ? "disabled" : ""}
                    onClick={handleFormSubmit}
                    disabled={btnIsDisabled}
                    id="calculate-button"
                >
                    Calculate</button>
            </form>
            <Modal errorMessage={errorMessage} props={showModal}/>
            {/* <h1>Monthly Payment: $0.00</h1> */}
        </div>
    )
}

export default LoanForm;

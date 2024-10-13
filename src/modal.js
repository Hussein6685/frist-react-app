import "./FormStyles.css";

function Modal({ props , errorMessage=null}) {
    if (props) {

    return (
        <div id="modal">
            <div id="modal-content">
                {/* <h1>lorem lorem lorem</h1> */}
                <h1 style={{color: errorMessage ? "red" : "green"}}>
                    {
                    errorMessage != null
                            ? errorMessage
                            : "The Form Has Been Submitted Successfully"
                }</h1>
            </div>
        </div>
        );
    }else {
        return (<></>);
    }
}

export default Modal;

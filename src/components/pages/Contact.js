import React from 'react'

export default function Contact() {

    // Make text of error messages red
    const errorStyle = {
        color: "red"
    }

    // Validate an email address with regex - create an error if not valid
    const validateEmail = ({ target: { value } }) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
            document.getElementById("emailAddressError").innerText = "Please enter a valid email address.";
        }
    }

    // Make sure message field has something in it - create an error if not
    const validateMessage = ({ target: { value } }) => {
        if (!value) {
            document.getElementById("messageError").innerText = "Please include a message."
        }
    }

    // Make sure name field has something in it - create an error if not
    const validateName = ({ target: { value }}) => {
        if (!value) {
            document.getElementById("nameError").innerText = "Please enter your name.";
        }
    }

    // Remove errors while user is typing new input
    const removeEmailError = () => { document.getElementById("emailAddressError").innerText = ""; }
    const removeMessageError = () => { document.getElementById("messageError").innerText = ""; }
    const removeNameError = () => { document.getElementById("nameError").innerText = ""; }

    // Render contact form
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h3 className="mb-5 text-center">Contact Me</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nameInput" required onBlur={validateName} onFocus={removeNameError}/>
                        </div>
                        <p id="nameError" style={errorStyle}> </p>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="emailInput" required onBlur={validateEmail} onFocus={removeEmailError} />
                        </div>
                        <p id="emailAddressError" style={errorStyle}> </p>
                        <div className="mb-3">
                            <label htmlFor="messageText" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="messageText" rows="8" required onBlur={validateMessage} onFocus={removeMessageError} />
                        </div>
                        <p id="messageError" style={errorStyle}> </p>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

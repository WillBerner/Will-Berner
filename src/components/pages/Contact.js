import React from 'react'

export default function Contact() {

    const validateEmail = ({ target: { value } }) => {
        console.log(value);
    }

    const validateMessage = ({ target: { value } }) => {
        console.log(value);
    }

    const validateName = ({ target: { value } }) => {
        console.log(value);
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h3 className="mb-5 text-center">Contact Me</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nameInput" required onBlur={validateName} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="emailInput" required onBlur={validateEmail} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="messageText" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="messageText" rows="8" required onBlur={validateMessage} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

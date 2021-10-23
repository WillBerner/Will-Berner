import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const validateEmail = ({ target: { value } }) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
            toast("Please enter a valid email address.");
        }

        return;
    }

    const validateMessage = ({ target: { value } }) => {
        if (!value) {
            toast("Please include a message.");
        }
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h3 className="mb-5 text-center">Contact Me</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nameInput" required />
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

            <ToastContainer />


        </div>
    )
}

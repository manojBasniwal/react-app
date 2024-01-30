import React, { useState } from 'react'

function Contact() {
    const [data, setData] = useState({
        name: '',
        mobil: '',
        email: '',
        message: '',
    })
    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. My mobil nuber is ${data.mobil}`);
    }
    return (
        <div className='contact-section mt-3'>
            <h1 className='text-center'>Contact page</h1>
            <div className='container'>
                <div className='form-section'>
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name='name' value={data.name} onChange={InputEvent} placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Mobil Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" name='mobil' value={data.mobil} onChange={InputEvent} placeholder="Enter your mobil number" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="Enter your Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name='message' value={data.message} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <div >
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

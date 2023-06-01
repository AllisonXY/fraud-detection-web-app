import React from 'react'
import { useState } from 'react'
import "./contact.css"

const Contact = () => {
    const [data, setData] = useState({name: "", email:"", phone: "", text: ""});

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <div className='contact-form-container'>
            <form className="contact-form rounded mb-5">
                <h1 className='my-4 display-3'>Contact <span className = "blue-accent">Here</span> </h1>
                <input className = "form-input form-control" type="text" name="name" id ="" onChange={handleChange} value={data.name} placeholder="Enter name"/> 
                <input className = "form-input form-control" type="email" name="email" id ="" onChange={handleChange} value={data.email} placeholder="Enter email"/>  
                <input className = "form-input form-control" type="phone" name="phone" id ="" onChange={handleChange} value={data.phone} placeholder="Enter phone number"/>  
                <textarea className = "form-input form-control" name="text" id ="" rows="5" onChange={handleChange} value={data.message} placeholder="Enter message"></textarea>
                <button className = "btn btn-secondary form-submit" type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Contact
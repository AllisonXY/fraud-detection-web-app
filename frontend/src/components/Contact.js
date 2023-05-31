import React from 'react'
import {useState} from 'react'
import "./contact.css"


const Contact = () => {
    const [data,setData] = useState({name: "", email:"", phone: "", text: ""});

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <form className="for">
            <h1>Contact <span className = "formspa">Here</span> </h1>
            <input className = "forminp" type="text" name="name" id ="" onChange={handleChange} value={data.name} placeholder="Enter name"/> 
            <input className = "forminp" type="email" name="email" id ="" onChange={handleChange} value={data.email} placeholder="Enter email"/>  
            <input className = "forminp" type="phone" name="phone" id ="" onChange={handleChange} value={data.phone} placeholder="Enter phone number"/>  
            <textarea className = "forminp" name="text" id ="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder="Enter message"></textarea>
            <button className = "formbut" type="submit"> Submit </button>
        </form>
    )
}

export default Contact
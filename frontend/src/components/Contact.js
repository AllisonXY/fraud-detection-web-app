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
        <form>
            <h1>Contact <span>Here</span> </h1>
            <input type="text" name="name" id ="" onChange={handleChange} value={data.name} placeholder="Enter name"/> 
            <input type="email" name="email" id ="" onChange={handleChange} value={data.email} placeholder="Enter email"/>  
            <input type="phone" name="phone" id ="" onChange={handleChange} value={data.phone} placeholder="Enter phone number"/>  
            <textarea name="text" id ="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder="Enter message"></textarea>
            <button type="submit"> Submit </button>
        </form>
    )
}

export default Contact
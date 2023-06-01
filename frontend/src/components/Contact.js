// import React from 'react'
import React, {useState, useRef} from 'react'
// import { useState } from 'react'
import "./contact.css"

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxzlyEGJGhep-KkOS0fTCB5g3WNDuq49DQCbvFbFyZYGdfOskoSNxekQpTUhfaPx9ro/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })


const Contact = () => {
    const formRef = useRef(null)
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxzlyEGJGhep-KkOS0fTCB5g3WNDuq49DQCbvFbFyZYGdfOskoSNxekQpTUhfaPx9ro/exec'
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({name: "", email:"", phone: "", text: ""});

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value,
          });
    }

    const handleSubmit = (e) =>{

        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))

        // fetch("/api/contact", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data)
        // })

    }

    

    return (
        <div className='contact-form-container'>
            <form ref={formRef} className="contact-form rounded mb-5" name='submit-to-google-sheet'>
                <h1 className='my-4 display-3'>Contact <span className = "blue-accent">Here</span> </h1>
                <input className = "form-input form-control" type="text" name="name" id ="" onChange={handleChange} value={data.name} placeholder="Enter name"/> 
                <input className = "form-input form-control" type="email" name="email" id ="" onChange={handleChange} value={data.email} placeholder="Enter email"/>  
                <input className = "form-input form-control" type="phone" name="phone" id ="" onChange={handleChange} value={data.phone} placeholder="Enter phone number"/>  
                <textarea className = "form-input form-control" name="text" id ="" rows="5" onChange={handleChange} value={data.message} placeholder="Enter message"></textarea>
                <button className = "btn btn-secondary form-submit" type="submit" onClick={handleSubmit}> Submit </button>
            </form>     
        </div>
    )
}

export default Contact


// import React, {useState, useRef} from 'react'

// const Form = () => {
//     const formRef = useRef(null)
//     const scriptUrl = 'https://script.google.com/macros/s/AKfycbxzlyEGJGhep-KkOS0fTCB5g3WNDuq49DQCbvFbFyZYGdfOskoSNxekQpTUhfaPx9ro/exec'
//     const [loading, setLoading] = useState(false)

//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         setLoading(true)

//         fetch(scriptUrl, {
//         method: 'POST', 
//         body: new FormData(formRef.current),

//     }).then(res => {
//             console.log("SUCCESSFULLY SUBMITTED")
//             setLoading(false)
//         })
//         .catch(err => console.log(err))
//     }

//   return (
//         <div className="container">
//         <form  ref={formRef} onSubmit={handleSubmit} name="google-sheet">
//         <div className="input-style">
//             <label htmlFor='name'>
//                 Name
//             </label>
//             <input type="text" id="name"  name="name" placeholder='Your Name *' />
//         </div>  
//         <div className="input-style">
//             <label htmlFor='name'>Email</label>
//             <input type="email" name="email" placeholder='Your Email *' />
//         </div>
//         <div className="input-style">
//             <label htmlFor='name'>Phone No</label>
//             <input type="number" name="phone" placeholder='Your Phone *' />
//         </div>
//         <div className="input-style">

//             <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
//         </div> 
//         </form>
//         </div>
//   )
// }

// export default Form




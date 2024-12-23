import React, { useState } from 'react'
import Klocka from '../assets/Logos/klocka.svg'
import Mail from '../assets/Logos/bx-envelope.svg'

const Subscribe = () => {

const [formData, setformData] = useState({ email: ''})

const handleChange = (e) => {
  const { name, value } = e.target
  setformData({...formData, [name]: value})
}

const handleSubmit = async (e) => {
  e.preventDefault()

  const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  
if(res.ok){
  // const data = await res.text()
  console.log("Din validering lyckades!")
} else {
  // const data = await res.json()
  console.log("Din validering misslyckades")
}

  console.log()

// alert('Thank you!!')
}


    return (
    <div>

<section className="subscribe">

<div className="container-6">
        <div className="klockan">
            <img src={Klocka} alt=""/>    
        </div>

        <div className="subscribe">
            <h2>Subscribe to our newsletter to stay <br/> informed about latest updates</h2>
        </div>
        
        <div className="email">
        <form onSubmit={handleSubmit} className="form">
        <img className="msg" src={Mail} alt=""/>
        <input id="Mail" className="input" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email"/>
        <label htmlFor="Mail"></label>
        <button type="Submit" className="knapp">Subscribe</button>
        
    </form>
       </div> 
        
  
</div>


</section>
    </div>
  )
}

export default Subscribe
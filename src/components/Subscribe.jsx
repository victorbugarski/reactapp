import React from 'react'
import Klocka from '../assets/Logos/klocka.svg'
import Mail from '../assets/Logos/bx-envelope.svg'

const Subscribe = () => {
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
        <form className="form" action="method" method="get">
        <img className="msg" src={Mail} alt=""/>
        <input id="Mail" className="input" type="email" placeholder="Your Email"/>
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
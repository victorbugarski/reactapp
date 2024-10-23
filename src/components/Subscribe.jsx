import React from 'react'

const Subscribe = () => {
  return (
    <div>

<section className="subscribe">

<div className="container-6">
        <div className="klockan">
            <img src="Logos/klocka.svg" alt=""/>    
        </div>

        <div className="subscribe">
            <h2>Subscribe to our newsletter to stay <br/> informed about latest updates</h2>
        </div>
        
        <div className="email">
        <form className="form" action="method" method="get">
        <img className="msg" src="Logos/bx-envelope.svg" alt=""/>
        <input className="input" type="email" placeholder="Your Email"/>
        <button className="knapp">Subscribe</button>
        
    </form>
       </div> 
</div>


</section>
    </div>
  )
}

export default Subscribe
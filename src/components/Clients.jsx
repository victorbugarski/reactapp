import React from 'react'
import Recension from '../assets/Logos/recension1.svg'
import Recension1 from '../assets/Logos/recension2.svg'

const Clients = () => {
  return (
    <div>

<section className="clients">
        <div className="container-5">
            <h2>Clients are <br/> Loving Our App</h2>
        </div>

            <div className="bilder">
                <img src={Recension} alt="" className="bilder"/>
                <img src={Recension1} alt="" className="bilder"/>
            </div>

        

    </section>
    </div>
  )
}

export default Clients
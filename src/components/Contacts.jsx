import React from 'react'
import Contact from '../assets/Logos/contacts image.svg'
import Ikon from '../assets/Logos/ikon1.svg'
import Ikon1 from '../assets/Logos/ikon2.svg'
import Pil from '../assets/Logos/pil.svg'

const Contacts = () => {
  return (
    <div>

<section className="contacts">
                <div className="container-4">
                    <img src={Contact} alt="" className="contacts-bild"/>
                </div>

    <div className="nedre-del">
                <h2>Receive payment from <br/> international bank details</h2>
        <div className="texter">
            <div className="text-1">
                <img src={Ikon} alt=""/>
                <p>Manage your payments online. <br/> Mollis congue egestas egestas <br/> fermentum fames.</p>
            </div>
                <div className="text-2">
                    <img src={Ikon1} alt=""/>
                    <p>A elementur and imperdiet enim, <br/> pretium etiam facilisi aenean <br/> quam mauris.</p>
                </div>
        </div>

                <button className="btn-learn-more">Learn more
                <img src={Pil} alt=""/>
            </button>
    </div>
            
    

    </section>
    </div>
  )
}

export default Contacts
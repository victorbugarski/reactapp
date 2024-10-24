import React from 'react'
import AppStore from '../assets/Logos/Appstore.svg'
import GooglePlay from '../assets/Logos/GooglePlay.svg'
import MyBudget from '../assets/Logos/iphone-mybudget.svg'
import Iphone from '../assets/Logos/iphone.svg'

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="container">
            <div className="headline">
                <h1>Manage All Your Money in One App</h1>
            </div>
                
            
            <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="buttons">
                    <a className="btn-download-app" href="#"><img src={AppStore}/></a>
                    <a className="btn-download-app" href="#"><img src={GooglePlay}/></a>
                </div>

                <a href="#" className="discover-more">
                    <span className="btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                </a>
            </div>

            <div className="images">
                <img className="img-back" src={MyBudget} alt="iphone my budget"/>
                <img className="img-front" src={Iphone} alt="iphone"/>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Hero
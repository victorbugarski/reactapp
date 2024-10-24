import React from 'react'
import Icon from '../assets/Logos/icon.svg'
import CostIcon from '../assets/Logos/cost icon.svg'
import RegularIcon from '../assets/Logos/regular icon.svg'
import DataIcon from '../assets/Logos/data icon.svg'
import SupportIcon from '../assets/Logos/support icon.svg'
import TopIcon from '../assets/Logos/top icon.svg'
import Iphone3 from '../assets/Logos/iphone3.svg'


const Features = () => {
  return (
    <div>

<section id="features">
            <div className="container">
                <div className="headline">
                    <h1>App Features</h1>
                </div>   
                

        <div className="content">
                 <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>   
                
                <div className="nedre-text">
                    <div className="features">
                        <img src={Icon} alt="" className="icon"/>
                        <div className="text">
                            <h3>Easy Payments</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    
                    <div className="features">
                        <img src={CostIcon} alt="" className="icon"/>
                        <div className="text">
                            <h3>Cost statistics</h3>
                            <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                        </div>
                    </div>

                    <div className="features">
                        <img src={RegularIcon} alt="" className="icon"/>
                        <div className="text">
                            <h3>Regular Cashback</h3>
                            <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                        </div>
                    </div>

                    <div className="features">
                        <img src={DataIcon} alt="" className="icon"/>
                        <div className="text">
                            <h3>Data Security</h3>
                            <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                        </div>
                    </div>

                    <div className="features">
                        <img src={SupportIcon} alt="" className="icon"/>
                        <div className="text">
                            <h3>Support 24/7</h3>
                            <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                        </div>
                    </div>

                    <div className="features">
                        <img src={TopIcon} alt="" className="icon"/>
                        <div className="text">
                            <h3>Top Standards</h3>
                            <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                        </div>
                    </div>
                    

                    

                    

                    
                    
                
                
                
                
                
                
                </div>
                
        </div>
                
                
                
                
                 <div className="iphone">
                 <img className="your-card" src={Iphone3} alt=""/>
                 </div>
                 
            </div>
                
        </section>
    </div>
  )
}

export default Features
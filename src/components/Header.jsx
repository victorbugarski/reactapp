import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
            <div className="container">
    
                 <a id="logo" href="index.html"><img src="Link.svg" alt=""/></a>
    
                <nav id="main-menu" className="navbar">
                    <a className="nav-link" href="#">Features</a>
                </nav>
    
                <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                    <span className="label">Dark mode</span>
                    <label htmlFor="Dark mode-switch" className="toggle-switch">
                        <input id="Dark mode-switch" type="checkbox"/>
                        <span className="slider round"></span>
    
                    </label>
                </div>
    
                <a id="auth-signin" href="#" className="btn-primary">
                    <i className="fa-thin fa-user-large"></i>
                    <span>Sign in / Up</span>
                </a>
    
                <button className="btn-mobile">
                    <i className="fa-regular fa-bars"></i>
                </button>
            
            
            </div> 
           


        </header>
    </div>
  )
}

export default Header
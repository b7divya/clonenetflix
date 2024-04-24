import react from 'react'
import "./Header.css"

    function Header ()  {

    return (
        <div className="main">
            <div className="main-container">
                {/* <img id="heroBannner" src="https://i0.wp.com/indiekraf.com/wp-content/uploads/2021/01/ID-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg?fit=800%2C450&ssl=1" alt="bannerimage" /> */}
                <div className="main-container-navbar">
                    <div className="main-container-navbar-logo">
                        <img src="https://www.pngall.com/wp-content/uploads/4/Netflix-Official-Logo.png" alt="Logo netflix" width="200" height="100" />
                    </div>
                    <div className="main-container-navbar-language">
                    <div class="main-container-navbar-language-content" id="language">
                        <a href="#english">English</a>
                        <a href="#hindi">Hindi</a>
                    </div>
                    </div>
                    <div className="main-container-navbar-signin">
                        <button id="btnheadsmall">Signin</button>
                    </div>
                </div>
                <div className="main-container-text">                     
                    <div className="main-container-text-one">
                        <h2>Unlimited movies, TV shows and more</h2>
                    </div>
                    <div className="main-container-text-two">
                        <h4>Watch anywhere. Cancel anytime</h4>
                    </div>
                    <div className="main-container-text-three">
                        <h5>Ready to watch? Enter your email to create or restat your membership.</h5>
                    </div>
                    <div className="main-container-text-email">
                        <input type='text' placeholder='Email address' className='headerEmail' />
                        <button className='btnheadbig'>Get Started</button> 
                    </div>
                </div>
            </div>            
        </div>
    )
}

    export default Header        
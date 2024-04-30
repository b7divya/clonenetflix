import react from 'react'
import "./Sign.css"
import { Link } from 'react-router-dom';

function Sign ()  {
    return (
        <div className="signup">
            <div className="signup-header">
                <Link to="/">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Netflix-Official-Logo.png" alt="Logo netflix" width="200" height="100" />
                </Link>
            </div>
            <div className="signup-container">
                <div className="head">
                    <h2>Sign In</h2>
                </div>
                <div className="inputs">
                    <input type="text" placeholder='Enter Email' className='signEmail' />
                    <input type="text" placeholder='Password' className='signPass' />
                </div>
                <div className="signBtn">
                    <button className="signBtn1">Sign In</button>
                    <h6 className="or">Or</h6>
                    <button className="signBtn2">Use a sign In Code</button>
                    <h6 className="forgot">Forgot Password?</h6>
                </div>
                <div className="container-last">
                    <div className="new" >
                        <h5>New to Netflix? Sign up now.</h5>
                    </div>
                    <div className="capcha">
                        <h5>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h5>
                    </div>
                </div>
            </div>
            <div className="signup-footer">
                <div className="signup-footer-one">
                    <h6>Questions? Call 000-800-919-1694</h6>
                </div>
                <div className="signup-footer-two">
                    <h6>FAQ</h6>
                    <h6>Invester Relation</h6>
                    <h6>Privacy</h6>
                    <h6>Speed Test</h6>
                    <button>English</button>
                    <h6>Netflix India</h6>
            </div>
            <div className="signup-footer-three">
                <h6>Help Center</h6>
                <h6>Jobs</h6>
                <h6>Cookie Preference</h6>
                <h6>Legal Notices</h6>
            </div>
            <div className="signup-footer-four">
                <h6>Account</h6>
                <h6>Ways To Watch</h6>
                <h6>Corporate Information</h6>
                <h6>Only On Netflix</h6>
            </div>
            <div className="signup-footer-five">
                <h6>Media Center</h6>
                <h6>Terms Of Use</h6>
                <h6>Contact Us</h6>
            </div>
        </div>
    </div>
    )
}

export default Sign;
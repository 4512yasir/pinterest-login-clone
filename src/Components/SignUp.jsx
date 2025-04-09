import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <i className="fa-brands fa-pinterest"></i>
            <h1>Sign up to see more</h1>
            <p>Discovery starts here</p>
            <Button text="Continue with Email" id="Email-button" />
            <Button text="Continue with Google" id="Google-button" />
            <p>By continuing, you agree to Pinterest's <a href="">Terms of Service</a> and acknowledge you've read our <a href="">Privacy Policy</a>. <a href="">Notice at collection.</a></p>
            <p><Link to ="/login">Already have an account? Log in</Link></p>
            <p>Are you a business? <a href="">Get started here!</a></p>
        </div>
    );
}

export default SignUp;

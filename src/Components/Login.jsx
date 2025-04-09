import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container">
            <div>
                <i className="fa-brands fa-pinterest"></i>
                <h2>Login to see more</h2>
            </div>
            <div className="form">
                <form>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" placeholder="email" className="inputs" />
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password" className="inputs" />
                        <a href=""><p>Forgot password?</p></a>
                    </div>
                    <Button text="login" id="login-button" />
                    <p>OR</p>
                    <Button text="Continue with Facebook" id="Facebook-button" />
                    <Button text="Continue with Google" id="Google-button" />
                </form>
                <p>By continuing, you agree to Pinterest's <a href="">Terms of Service</a> and acknowledge you've read our <a href="">Privacy Policy</a>. <a href="">Notice at collection.</a></p>
                <p><Link to="/sign-up">Not on Pinterest yet? Sign up</Link></p>
                <p>Are you a business? <a href="">Get started here!</a></p>
            </div>
        </div>
    );
}

export default Login;

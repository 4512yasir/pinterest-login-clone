import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");  // State to hold success message
    const navigate = useNavigate();  // Hook for navigation after successful login

    // Handle form submission
    const handleLogin = (e) => {
        e.preventDefault();

        // Clear previous messages
        setErrorMessage("");
        setSuccessMessage("");

        // Simple validation
        if (!email || !password) {
            setErrorMessage("Both fields are required!");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage("Please enter a valid email.");
            return;
        }

        // Simulate authentication (this would typically be an API call)
        if (email === "test@example.com" && password === "password123") {
            setSuccessMessage("Login successful!");  // Set success message
            setTimeout(() => {
                navigate("/home");  // Redirect to home page after success
            }, 2000); // Wait 2 seconds before redirecting
        } else {
            setErrorMessage("Invalid email or password.");
        }
    };

    return (
        <div className="container">
            <div>
                <i className="fa-brands fa-pinterest"></i>
                <h2>Login to see more</h2>
            </div>
            <div className="form">
                <form onSubmit={handleLogin}> 
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input 
                          type="email"
                          placeholder="email"
                          className="inputs"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          placeholder="password"
                          className="inputs"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <a href=""><p>Forgot password?</p></a>
                    </div>

                    {/* Display error message if validation fails */}
                    {errorMessage && <p className="error">{errorMessage}</p>}

                    {/* Display success message if login is successful */}
                    {successMessage && <p className="success">{successMessage}</p>}

                    <Button text="Login" id="login-button" />

                    <p>OR</p>

                    <Button text="Continue with Facebook" id="Facebook-button" />
                    <Button text="Continue with Google" id="Google-button" />
                </form>

                <p>
                    By continuing, you agree to Pinterest's <a href="">Terms of Service</a> and acknowledge you've read our <a href="">Privacy Policy</a>. <a href="">Notice at collection.</a>
                </p>
                
                <p>
                    <Link to="/sign-up">Not on Pinterest yet? Sign up</Link>
                </p>

                <p>
                    Are you a business? <a href="">Get started here!</a>
                </p>
            </div>
        </div>
    );
}

export default Login;

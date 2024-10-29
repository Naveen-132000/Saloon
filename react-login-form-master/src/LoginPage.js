import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="login-container">
            <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
            <div className="card">
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    
                    {/* Conditionally render additional fields if Sign Up is selected */}
                    {isSignUp && (
                        <>
                            <input type="email" placeholder="Email" required />
                            <input type="tel" placeholder="Phone Number" required />
                        </>
                    )}

                    <div className="button-container">
                        <button type="submit" className="client-login">Client</button>
                        <button type="submit" className="customer-login">Customer</button>
                    </div>
                </form>
            </div>
            <div className="footer">
                <p>
                    {isSignUp ? (
                        "Already have an account? "
                    ) : (
                        "Don't have an account? "
                    )}
                    <a href="#" onClick={toggleSignUp}>
                        {isSignUp ? "Log In" : "Sign Up"}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

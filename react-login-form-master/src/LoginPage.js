import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="login-container">
            <h2>Sign Up</h2>
            <div className="card">
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <div className="button-container">
                        <button type="submit" className="client-login">Client</button>
                        <button type="submit" className="customer-login">Customer</button>
                    </div>
                </form>
            </div>
            <div className="footer">
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
};

export default LoginPage;

import { useState } from 'react'
import './login.css'

function login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        console.log("Email:", email);
        console.log("Password:", password);


    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h2>TradeWise</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                // value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Log In</button>
                    </form>
                    <p className="signup-link">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default login

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import './App.css';

function Home() {
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages
    const navigate = useNavigate();

    const handleSOSClick = () => {
        navigate('/sos'); // Redirect to the SOS page
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Send email and password to the server
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                // Redirect user to the dashboard or any other page upon successful login
                navigate('/dashboard'); // Example: redirect to '/dashboard'
            } else {
                setErrorMessage(data.message); // Set error message from the response
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Server error, please try again later.');
        }
    };

    return (
        <div className="body">
            <div className="login-container">
                <div className="form-container">
                    <h1>Life-saving care, just a click away</h1>
                    <p>Get started with your free account today. No credit card required.</p>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                required
                            />
                        </div>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <button type="submit">Login</button>
                    </form>

                    <div className="or-divider">OR</div>
                    <button className="google-signup-btn">
                        <i className="fa-brands fa-google"></i> Sign in with Google
                    </button>
                    <p className="login-link">
                        Already have an account? <a href="signin#">Sign in with Google</a>
                    </p>
                    <p className="terms">
                        By signing up, I agree to E-hospital <a href="#">terms & conditions</a>
                    </p>
                </div>

                <div className="image-container">
                    <p className="emergency">EMERGENCY ALERT!</p>
                    <p>If you find yourself in a very difficult situation, 
                        <br />
                        make sure to click the SOS button, no need to Sign up.
                    </p>
                    <button className="sos" onClick={handleSOSClick}>SOS Emergency</button>
                </div>
            </div>
        </div>
    );
}

export default Home;

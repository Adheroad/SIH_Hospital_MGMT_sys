import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import './App.css';

function Home(){
    const navigate = useNavigate();

    const handleSOSClick = () => {
        navigate('/sos'); // Redirect to the SOS page
    };

    return (
        <div className="body">
            <div className="login-container">
              <div className="form-container">
                <h1>Life-saving care, just a click away</h1>
                <p>Get started with your free account today.</p>
                <form>
                  {/* Login form elements */}<div className="input-group">
                    <label htmlFor="email">Log.in</label>
                    <input type="email" id="email" placeholder="name@email.com" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="password must be 8 digits with special symbols" required />
                  </div>
              
                 
                </form>
               
                <button className="google-signup-btn">
                  <a href='http://localhost:3000/Registeration'>
                  <i className="fa-brands fa-google"></i>
                  <p1>Sign up Now</p1> 
                  </a>
                </button>
                <p className="login-link">
                  Don't have an account? Sign up 
                </p>
              
              </div>

              <div className="image-container">
                <p className="emergency">EMERGENCY ALERT!</p>
                <p>If you find yourself in a very difficult situation, 
                  <br />
                  make sure to click the SOS button, no need to Sign up.</p>
                <button className="sos" onClick={handleSOSClick}>
                  <i class="fa-solid fa-truck-medical "> </i>
                  SOS Emergency
                    </button>
              </div>
            </div>
          </div>
    );
}
export default Home;

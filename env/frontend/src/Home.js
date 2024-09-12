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
                <p>Get started with your free account today. No credit card required.</p>
                <form>
                  {/* Login form elements */}
                </form>
                <div className="or-divider">OR</div>
                <button className="google-signup-btn">
                  <i className="fa-brands fa-google"></i> Sign in with Google
                </button>
                <p className="login-link">
                  Already have an account? <a href="signin#">Sign in with google</a>
                </p>
                <p className="terms">
                  By signing up, I agree to E-hospital <a href="#">terms & conditions</a>
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

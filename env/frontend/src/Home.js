import React from "react";
import './App.css';
function Home(){
    return (
        <div className="body">
            <div className="login-container">
              <div className="form-container">
                <h1>Life-saving care, just a click away</h1>
                <p>Get started with your free account today. No credit card required.</p>
                <form>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="name@email.com" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="password must be 8 digits with special symbols" required />
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" id="updates" />
                    <label htmlFor="updates">Receive notification for my appointments.</label>
                  </div>
                  <button type="submit" className="submit-btn">Create my account</button>
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
                <button className="sos">SOS Emergency</button>
              </div>
            </div>
          </div>
    );
}
export default Home;
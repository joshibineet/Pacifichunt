import React from "react";
import "./signup.css";
import image1 from "../../assets/signuplogo.svg";

const Signup = () => {
  return (
    <div className="sign_up_up">
      <div className="sign_up_content">
        <h3>
          Join <span> Pacific Hunt </span> today
        </h3>
        <div className="sign_up_form">
          <img src={image1} alt="" className="sign_up_logo" />
          <form>
            <label>
              Email
              <input className="inputs" type="email" placeholder="Email"/>
            </label>
            <label>
              Password
              <input className="inputs" type="password" placeholder="Password" />
            </label>
            <input className="Login" type="submit" value="Log in"/>
          </form>
          <p className="forget">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

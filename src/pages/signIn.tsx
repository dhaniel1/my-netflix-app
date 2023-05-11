import React, { useContext } from "react";
import { Button, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../store/authContext";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const ctx = useContext(authContext);

  function clicked(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    ctx.authenticated = true;
    navigate("/home");
  }
  let error;

  return (
    <div className="signin">
      <Navbar />
      <div className="signin__mainContainer">
        <div className="signin__formContainer">
          <h1>Sign In</h1>
          <form className="signin__form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email or phone number"
              />
              {error && (
                <small id="emailHelp" className="form-text text-muted">
                  Please enter a valid email or phone number.
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <Button onClick={clicked} styles="btn btnRed" title="Submit" />
            <div className="form__checkContainer">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <p>
                <Link to={"#"}>Need Help?</Link>
              </p>
            </div>
            <div className="form__signup">
              <p>
                New to Netflix? <span>Sign up now </span>
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <Link to={"#"}>Learn more.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
